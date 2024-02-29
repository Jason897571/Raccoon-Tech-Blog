DROP DATABASE IF EXISTS blog_db;

CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE `user`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'User ID',
    `user_name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);

CREATE TABLE `post`(
    `post_id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `contents` TEXT NOT NULL,
    `creator_id` BIGINT NOT NULL,
    `created_date` DATETIME NOT NULL,
    FOREIGN KEY(`creator_id`) REFERENCES `user`(`id`)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

CREATE TABLE `comments`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `post_id` BIGINT NOT NULL,
    `creator_id` BIGINT NOT NULL,
    `created_date` DATETIME NOT NULL,
    FOREIGN KEY(`post_id`) REFERENCES `post`(`post_id`)
    ON DELETE CASCADE,
    FOREIGN KEY(`creator_id`) REFERENCES `user`(`id`)
    ON DELETE CASCADE
);
