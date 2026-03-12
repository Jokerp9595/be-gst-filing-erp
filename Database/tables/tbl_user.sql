DROP TABLE IF EXISTS `tbl_user`;

CREATE TABLE
    IF NOT EXISTS `tbl_user` (
        `user_id` INT NOT NULL AUTO_INCREMENT,
        `role_id` INT NOT NULL COMMENT 'Reference of tbl_roles',
        `full_name` VARCHAR(150) NOT NULL COMMENT 'User full name',
        `email` VARCHAR(150) NOT NULL UNIQUE COMMENT 'User email address',
        `company_name` VARCHAR(150) NOT NULL COMMENT 'Company name',
        `mobile` VARCHAR(10) NOT NULL UNIQUE COMMENT 'User mobile number',
        `password` VARCHAR(255) NOT NULL COMMENT 'Encrypted password',
        `status` ENUM ('active', 'inactive', 'pending') DEFAULT 'active',
        `email_verified` TINYINT (1) DEFAULT 0 COMMENT '0 = not verified, 1 = verified',
        `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (`user_id`),
        KEY `role_id_idx` (`role_id`)
    ) ENGINE = INNODB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `tbl_user` 
ADD CONSTRAINT `tbl_user_1` FOREIGN KEY (`role_id`) REFERENCES `tbl_roles` (`role_id`);