DROP TABLE IF EXISTS `tbl_company`;

CREATE TABLE
    IF NOT EXISTS `tbl_company` (
        `company_id` INT NOT NULL AUTO_INCREMENT,
        `user_id` INT NOT NULL COMMENT 'Reference of tbl_user - company owner',
        `company_name` VARCHAR(200) NOT NULL COMMENT 'Company name e.g. ABC Pvt Ltd',
        `company_code` VARCHAR(20) NOT NULL COMMENT 'Unique company code',
        `gst_no` VARCHAR(15) NULL COMMENT 'Company GST number',
        `pan_no` VARCHAR(10) NULL COMMENT 'Company PAN number',
        `tan_no` VARCHAR(10) NULL COMMENT 'Company TAN number',
        
        `company_type` ENUM(
            'PROPRIETORSHIP',
            'PARTNERSHIP',
            'LLP',
            'PRIVATE_LIMITED',
            'PUBLIC_LIMITED',
            'TRUST',
            'OTHER'
        ) NOT NULL COMMENT 'Type of business entity',
        
        `address` VARCHAR(2000) NOT NULL COMMENT 'Company full address',
        `city_id` INT NOT NULL COMMENT 'Reference of tbl_city',
        `pin_code` VARCHAR(6) NOT NULL COMMENT 'Company pin code',      
        `contact_no` VARCHAR(10) NOT NULL COMMENT 'Company contact number',
        `email` VARCHAR(320) NOT NULL COMMENT 'Company email address',  
        `financial_year_start_month` INT NOT NULL DEFAULT 4 COMMENT 'Financial year start month (4 = April)',        
        `status` INT DEFAULT 1 NOT NULL COMMENT '0 for deactive, 1 for active',
        `creating_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updating_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        
        PRIMARY KEY (`company_id`),
        UNIQUE KEY `company_code` (`company_code`)
    ) ENGINE = INNODB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `tbl_company`
ADD CONSTRAINT `tbl_company_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`user_id`),
ADD CONSTRAINT `tbl_company_2` FOREIGN KEY (`city_id`) REFERENCES `tbl_city