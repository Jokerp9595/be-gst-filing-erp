/****************************
 FILE HANDLING OPERATIONS
 ****************************/
import fs from 'fs';
import * as path from 'path';
import { applicationLogger, configuration } from '../configs';

export class FileService {

    static removeFile(file: string) {
        try {
            fs.unlinkSync(path.join(configuration.publicDirectory, 'public', file));
        } catch (err: any) {
            applicationLogger.error(`FileService removeFile`, { file: file, error: err });
        }
    }

    static uploadFile(file: any, folder: string) {
        return new Promise(function (resolve, reject) {
            const fileName = file.originalFilename.split(".");
            const newFileName = Date.now().toString() + Math.floor(100000 + Math.random() * 900000) + '.' + fileName[fileName.length - 1];
            const dir = path.join(configuration.publicDirectory, 'public', folder);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            const uploadedFilePath = path.join(configuration.publicDirectory, 'public', folder, newFileName);

            fs.readFile(file.path, (err, data) => {
                if (err) {
                    reject(err.stack);
                } else {
                    fs.writeFile(uploadedFilePath, data, (err) => {
                        if (err) {
                            reject(err.stack);
                        } else {
                            resolve(path.join(folder, newFileName));
                        }
                    });
                }
            });
        });
    }

    static readFile(filepath: string) {
        return new Promise((resolve, reject) => {
            fs.readFile(filepath, 'utf-8', (err, html) => {
                if (err) { return reject({ message: err, status: 0 }); }

                return resolve(html);

            });
        });
    }

    static writeFile(filepath: string, data: any) {
        const fileContents = fs.writeFileSync(filepath, data);
        return fileContents;
    }

    static appendFile(filepath: string, data: any) {
        const fileContents = fs.appendFileSync(filepath, data);
        return fileContents;
    }

}