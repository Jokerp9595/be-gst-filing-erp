/****************************
 FILE HANDLING OPERATIONS
 ****************************/
import fs from 'fs';
import * as path from 'path';
import { PDFDocument } from 'pdf-lib';
import puppeteer from 'puppeteer';
import { applicationLogger, configuration } from '../configs';

export class PDFService {
  /**
   * Main method to convert HTML to PDF
   */
  static async convertPDF(newFileName: string, htmlFileLocation: string, width: number = 210, height: number = 297) {
    let browser: any;
    try {
      const htmlContent = fs.readFileSync(path.join(configuration.publicDirectory, 'public', htmlFileLocation), 'utf8');
      const domSize = Buffer.byteLength(htmlContent, 'utf8');

      const pdfDir = path.join(configuration.publicDirectory, 'public', 'pdf');

      if (!fs.existsSync(pdfDir)) {
        fs.mkdirSync(pdfDir, { recursive: true });
      }

      const pdfPath = path.join(pdfDir, `${newFileName}.pdf`);

      browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--no-zygote',
          '--js-flags=--max-old-space-size=4096'
        ]
      });

      if (domSize > 2 * 1024 * 1024) {
        return await this.splitAndConvertPDF(newFileName, htmlContent, width, height, browser);
      } else {
        await this.convertHtmlToPdf(htmlContent, pdfPath, width, height, browser);
        fs.unlinkSync(path.join(configuration.publicDirectory, 'public', htmlFileLocation));
        return pdfPath;
      }

    } catch (err: any) {
      applicationLogger.error('PDF Generation Failed', { error: err });
      throw new Error('PDF generation failed: ' + err.message);
    } finally {
      if (browser) {
        await browser.close().catch(() => { });
      }
    }
  }

  /**
   * Convert single HTML content to PDF (reuses browser instance)
   */
  static async convertHtmlToPdf(htmlContent: any, pdfPath: any, width: number, height: number, browser: any) {
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'domcontentloaded', timeout: 0 });
    await page.emulateMediaType('print');
    await page.pdf({
      path: pdfPath,
      width: `${width}mm`,
      height: `${height}mm`,
      margin: { top: '0.1mm', right: '0.1mm', bottom: '0.1mm', left: '0.1mm' }
    });
    await page.close();
  }

  /**
   * Splits a large table by rows into chunks of HTML
   */
  static splitTableByRows(htmlContent: string, rowsPerChunk: number = 100) {
    const tableMatch = htmlContent.match(/<table[\s\S]*?<\/table>/i);
    if (!tableMatch) {
      return [htmlContent];
    }

    const tableHTML = tableMatch[0];
    const headMatch = htmlContent.match(/<head[\s\S]*?<\/head>/i);
    const styles = headMatch ? headMatch[0] : '';

    const theadMatch = tableHTML.match(/<thead[\s\S]*?<\/thead>/i);
    const theadHTML = theadMatch ? theadMatch[0] : '';

    const tbodyMatch = tableHTML.match(/<tbody[\s\S]*?<\/tbody>/i);
    const rows: any = tbodyMatch ? tbodyMatch[0].match(/<tr[\s\S]*?<\/tr>/gi) : [];

    const chunks: any = [];
    for (let i = 0; i < rows.length; i += rowsPerChunk) {
      const chunkRows = rows.slice(i, i + rowsPerChunk).join('');
      const chunkHTML: any = `
          <!DOCTYPE html>
          <html>${styles}
            <body>
              <div class="mainDiv">
                <table>${theadHTML}<tbody>${chunkRows}</tbody></table>
              </div>
            </body>
          </html>`;
      chunks.push(chunkHTML);
    }
    return chunks;
  }

  static async splitAndConvertPDF(newFileName: string, htmlContent: string, width: number = 210, height: number = 297, browser: any) {
    const sections = this.splitTableByRows(htmlContent, 500);

    const uniqueFolder = `temp_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    const tempPdfDir = path.join(configuration.publicDirectory, 'public', 'pdf', 'temp', uniqueFolder);
    if (!fs.existsSync(tempPdfDir)) {
      fs.mkdirSync(tempPdfDir, { recursive: true });
    }

    const page = await browser.newPage();
    await page.emulateMediaType('print');

    const partialPDFs: any = [];
    for (let i = 0; i < sections.length; i++) {
      const pdfPath: any = path.join(tempPdfDir, `${newFileName}_part${i}.pdf`);

      await page.setContent(sections[i], { waitUntil: 'domcontentloaded', timeout: 0 });
      await new Promise(res => {
        setTimeout(res, 200);
      });
      await page.pdf({
        path: pdfPath,
        width: `${width}mm`,
        height: `${height}mm`,
        margin: { top: '0.1mm', right: '0.1mm', bottom: '0.1mm', left: '0.1mm' }
      });
      partialPDFs.push(pdfPath);
    }

    await page.close();

    // Merge PDFs
    const mergedPath = path.join(configuration.publicDirectory, 'public', 'pdf', `${newFileName}.pdf`);
    await this.mergePDFs(partialPDFs, mergedPath);

    // Delete temp folder
    this.deleteFolderRecursive(tempPdfDir);

    return mergedPath;
  }

  /**
   * Recursively delete folder and all its files
   */
  static deleteFolderRecursive(folderPath: string) {
    if (fs.existsSync(folderPath)) {
      fs.readdirSync(folderPath).forEach((file) => {
        const curPath = path.join(folderPath, file);
        if (fs.lstatSync(curPath).isDirectory()) {
          this.deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(folderPath);
    }
  }

  /**
   * Merges multiple PDFs into one
   */
  static async mergePDFs(pdfFiles: any, outputFile: any) {
    const mergedPdf = await PDFDocument.create();
    for (const file of pdfFiles) {
      const pdfBytes = fs.readFileSync(file);
      const pdf = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    const mergedBytes = await mergedPdf.save();
    fs.writeFileSync(outputFile, mergedBytes);
  }
}
