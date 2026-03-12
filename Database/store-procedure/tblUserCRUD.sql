DELIMITER $$
DROP PROCEDURE IF EXISTS `tblUserCRUD`$$
CREATE PROCEDURE `tblUserCRUD`(
    IN _user_id INT,
    IN _full_name VARCHAR(150),
    IN _email VARCHAR(150),
    IN _company_name VARCHAR(150),
    IN _mobile VARCHAR(10),
    IN _password VARCHAR(255),
    IN _status VARCHAR(20),
    IN _email_verified TINYINT,
    IN _action ENUM('CHECK', 'INSERT', 'UPDATE', 'CHANGE PASSWORD', 'STATUS', 'SELECTALL', 'SELECTACTIVE', 'SELECTBYID', 'LOGIN')
)
BEGIN
    CASE _action

        WHEN 'CHECK' THEN
            SELECT user_id
            FROM tbl_user
            WHERE mobile = _mobile 
            AND user_id != _user_id;

        WHEN 'INSERT' THEN
            INSERT INTO tbl_user
            SET full_name = _full_name,
                email = _email,
                company_name = _company_name,
                mobile = _mobile,
                password = _password,
                email_verified = _email_verified;

        WHEN 'UPDATE' THEN
            UPDATE tbl_user
            SET full_name = _full_name,
                email = _email,
                company_name = _company_name,
                mobile = _mobile,
                password = _password,
                email_verified = _email_verified
            WHERE user_id = _user_id;

        WHEN 'CHANGE PASSWORD' THEN
            UPDATE tbl_user
            SET password = _password
            WHERE user_id = _user_id;

        WHEN 'STATUS' THEN
            UPDATE tbl_user
            SET status = _status
            WHERE user_id = _user_id;

        WHEN 'SELECTALL' THEN
            SELECT u.user_id, u.full_name, u.mobile, u.email, u.company_name, u.status
            FROM tbl_user AS u
            ORDER BY u.full_name;

        WHEN 'SELECTACTIVE' THEN
            SELECT u.user_id, u.full_name, u.mobile, u.email, u.company_name, u.status
            FROM tbl_user AS u
            WHERE u.status = 'active'
            ORDER BY u.full_name;

        WHEN 'SELECTBYID' THEN
            SELECT u.user_id, u.full_name, u.mobile, u.email, u.company_name, u.status
            FROM tbl_user AS u
            WHERE u.user_id = _user_id;

        WHEN 'LOGIN' THEN
            SELECT u.user_id, u.full_name, u.mobile, u.email, u.company_name, u.status, r.role_id, r.role_name
            FROM tbl_user AS u
            INNER JOIN tbl_roles AS r ON u.role_id = r.role_id
            WHERE u.mobile = _mobile 
            AND u.password = _password;
    END CASE;
END $$
DELIMITER ;