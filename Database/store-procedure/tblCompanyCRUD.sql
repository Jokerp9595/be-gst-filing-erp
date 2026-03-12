DELIMITER $$
DROP PROCEDURE IF EXISTS `tblCompanyCRUD`$$
CREATE PROCEDURE `tblCompanyCRUD`(
    IN _company_id INT,
    IN _user_id INT,
    IN _company_name VARCHAR(200),
    IN _company_code VARCHAR(20),
    IN _gst_no VARCHAR(15),
    IN _pan_no VARCHAR(10),
    IN _tan_no VARCHAR(10),
    IN _company_type ENUM('PROPRIETORSHIP', 'PARTNERSHIP', 'LLP', 'PRIVATE_LIMITED', 'PUBLIC_LIMITED', 'TRUST', 'OTHER'),
    IN _address VARCHAR(2000),
    IN _city_id INT,
    IN _pin_code VARCHAR(6),
    IN _contact_no VARCHAR(10),
    IN _email VARCHAR(320),
    IN _financial_year_start_month INT,
    IN _status INT,
    IN _action ENUM('CHECK', 'INSERT', 'UPDATE', 'STATUS', 'SELECTALL', 'SELECTACTIVE', 'SELECTBYID', 'SELECTALLBYUSERID')
)
BEGIN
    CASE _action

        WHEN 'CHECK' THEN
            SELECT `company_id`
            FROM `tbl_company`
            WHERE `company_code` = _company_code AND `gst_no` = _gst_no AND `pan_no` = _pan_no AND `tan_no` = _tan_no
            AND `company_id` != _company_id;

        WHEN 'INSERT' THEN
            INSERT INTO `tbl_company`
            SET `user_id` = _user_id,
                `company_name` = _company_name,
                `company_code` = _company_code,
                `gst_no` = _gst_no,
                `pan_no` = _pan_no,
                `tan_no` = _tan_no,
                `company_type` = _company_type,
                `address` = _address,
                `city_id` = _city_id,
                `pin_code` = _pin_code,
                `contact_no` = _contact_no,
                `email` = _email,
                `financial_year_start_month` = _financial_year_start_month;

        WHEN 'UPDATE' THEN
            UPDATE `tbl_company`
            SET `user_id` = _user_id,
                `company_name` = _company_name,
                `company_code` = _company_code,
                `gst_no` = _gst_no,
                `pan_no` = _pan_no,
                `tan_no` = _tan_no,
                `company_type` = _company_type,
                `address` = _address,
                `city_id` = _city_id,
                `pin_code` = _pin_code,
                `contact_no` = _contact_no,
                `email` = _email,
                `financial_year_start_month` = _financial_year_start_month
            WHERE `company_id` = _company_id;

        WHEN 'STATUS' THEN
            UPDATE `tbl_company`
            SET `status` = _status
            WHERE `company_id` = _company_id;

        WHEN 'SELECTALL' THEN
            SELECT `c`.`company_id`, `c`.`company_name`, `c`.`company_code`, `c`.`gst_no`, `c`.`pan_no`, `c`.`tan_no`, `c`.`company_type`, `c`.`address`, `ci`.`city_name`, `c`.`pin_code`, `c`.`contact_no`, `c`.`email`, `c`.`financial_year_start_month`, `c`.`status`
            FROM `tbl_company` AS `c`
            INNER JOIN `tbl_city` AS `ci` ON `c`.`city_id` = `ci`.`city_id`
            ORDER BY `c`.`company_name`;

        WHEN 'SELECTACTIVE' THEN
            SELECT `c`.`company_id`, `c`.`company_name`, `c`.`company_code`, `c`.`gst_no`, `c`.`pan_no`, `c`.`tan_no`, `c`.`company_type`, `c`.`address`, `ci`.`city_name`, `c`.`pin_code`, `c`.`contact_no`, `c`.`email`, `c`.`financial_year_start_month`, `c`.`status`
            FROM `tbl_company` AS `c`
            INNER JOIN `tbl_city` AS `ci` ON `c`.`city_id` = `ci`.`city_id`
            WHERE `c`.`status` = 1
            ORDER BY `c`.`company_name`;

        WHEN 'SELECTBYID' THEN
            SELECT `c`.`company_id`, `c`.`company_name`, `c`.`company_code`, `c`.`gst_no`, `c`.`pan_no`, `c`.`tan_no`, `c`.`company_type`, `c`.`address`, `ci`.`city_name`, `c`.`pin_code`, `c`.`contact_no`, `c`.`email`, `c`.`financial_year_start_month`, `c`.`status`
            FROM `tbl_company` AS `c`
            INNER JOIN `tbl_city` AS `ci` ON `c`.`city_id` = `ci`.`city_id`
            WHERE `c`.`company_id` = _company_id;

        WHEN 'SELECTALLBYUSERID' THEN
            SELECT `c`.`company_id`, `c`.`company_name`, `c`.`company_code`, `c`.`gst_no`, `c`.`pan_no`, `c`.`tan_no`, `c`.`company_type`, `c`.`address`, `ci`.`city_name`, `c`.`pin_code`, `c`.`contact_no`, `c`.`email`, `c`.`financial_year_start_month`, `c`.`status`
            FROM `tbl_company` AS `c`
            INNER JOIN `tbl_city` AS `ci` ON `c`.`city_id` = `ci`.`city_id`
            WHERE `c`.`user_id` = _user_id
            ORDER BY `c`.`company_name`;
    END CASE;
END $$
DELIMITER ;