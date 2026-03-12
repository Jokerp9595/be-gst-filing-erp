DELIMITER $$

DROP PROCEDURE IF EXISTS `tblFinancialYearCRUD`$$

CREATE PROCEDURE `tblFinancialYearCRUD`(
    IN _financial_year_id INT,
    IN _name VARCHAR(20),
    IN _fy_from DATE,
    IN _fy_to DATE,
    IN _is_closed TINYINT,
    IN _status INT,
    IN _action ENUM('CHECK','INSERT','UPDATE','STATUS','SELECTALL','SELECTACTIVE','SELECTBYID')
)
BEGIN

    CASE _action

        WHEN 'CHECK' THEN
            SELECT `financial_year_id`
            FROM `tbl_financial_years`
            WHERE `name` = _name
            AND `fy_from` = _fy_from
            AND `fy_to` = _fy_to
            AND `financial_year_id` != _financial_year_id;

        WHEN 'INSERT' THEN
            INSERT INTO `tbl_financial_years`
            SET `name` = _name,
                `fy_from` = _fy_from,
                `fy_to` = _fy_to,
                `is_closed` = _is_closed,
                `status` = _status;

        WHEN 'UPDATE' THEN
            UPDATE `tbl_financial_years`
            SET `name` = _name,
                `fy_from` = _fy_from,
                `fy_to` = _fy_to,
                `is_closed` = _is_closed,
                `status` = _status
            WHERE `financial_year_id` = _financial_year_id;

        WHEN 'STATUS' THEN
            UPDATE `tbl_financial_years`
            SET `status` = _status
            WHERE `financial_year_id` = _financial_year_id;

        WHEN 'SELECTALL' THEN
            SELECT `financial_year_id`, `name`, `fy_from`, `fy_to`, `is_closed`, `status`
            FROM `tbl_financial_years`
            ORDER BY `name`;

        WHEN 'SELECTACTIVE' THEN
            SELECT `financial_year_id` AS `value`,
                   `name` AS `label`
            FROM `tbl_financial_years`
            WHERE `status` = 1
            ORDER BY `name`;

        WHEN 'SELECTBYID' THEN
            SELECT `financial_year_id`, `name`, `fy_from`, `fy_to`, `is_closed`, `status`
            FROM `tbl_financial_years`
            WHERE `financial_year_id` = _financial_year_id;

    END CASE;

END$$

DELIMITER ;