DROP TABLE IF EXISTS `tbl_financial_years`;

CREATE TABLE
    IF NOT EXISTS `tbl_financial_years` (
        `financial_year_id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(20) NOT NULL COMMENT 'Financial year name e.g. 2025-26',
        `fy_from` DATE NOT NULL COMMENT 'Financial year start date',
        `fy_to` DATE NOT NULL COMMENT 'Financial year end date',
        `is_closed` TINYINT (1) DEFAULT 0 COMMENT '0 = open, 1 = closed',
        `status` INT DEFAULT 1 NOT NULL COMMENT '0 for deactive, 1 for active',
        `creating_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updating_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (`financial_year_id`)
    ) ENGINE = INNODB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `tbl_financial_years`