DROP TABLE IF EXISTS `tbl_roles`;

CREATE TABLE
    IF NOT EXISTS `tbl_roles` (
        `role_id` INT NOT NULL AUTO_INCREMENT,
        `role_name` VARCHAR(100) NOT NULL COMMENT 'Role name e.g. CA Admin, Accountant, Client Operator',
        `role_level` ENUM ('PLATFORM', 'CA', 'CLIENT') NOT NULL COMMENT 'Role level: PLATFORM for system owner, CA for CA office users, CLIENT for client company users',
        `role_description` VARCHAR(255) NOT NULL COMMENT 'Role description',
        `create_by` INT NOT NULL COMMENT 'Reference of tbl_user',
        `updated_by` INT NOT NULL COMMENT 'Reference of tbl_user',
        `status` INT DEFAULT 1 NOT NULL COMMENT '0 for deactive, 1 for active',
        `creating_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updating_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (`role_id`)
    ) ENGINE = INNODB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `tbl_roles` 
ADD CONSTRAINT `tbl_roles_1` FOREIGN KEY (`create_by`) REFERENCES `tbl_user` (`user_id`),
ADD CONSTRAINT `tbl_roles_2` FOREIGN KEY (`updated_by`) REFERENCES `tbl_user` (`user_id`);