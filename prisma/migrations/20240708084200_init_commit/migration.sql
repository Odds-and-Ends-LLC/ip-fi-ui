-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `profile_picture` LONGTEXT NULL,
    `cover_picture` LONGTEXT NULL,
    `description` LONGTEXT NULL,
    `responseTime` DOUBLE NOT NULL DEFAULT 0,
    `responseRate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_connected_accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `type` ENUM('WALLET', 'WEBSITE', 'TWITTER', 'INSTAGRAM', 'DISCORD', 'LOOKSRARE', 'OPENSEA') NOT NULL,
    `value` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nfts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `collectionAddress` VARCHAR(191) NOT NULL,
    `tokenId` VARCHAR(191) NOT NULL,
    `views` DOUBLE NOT NULL DEFAULT 0,
    `amountEarned` DOUBLE NOT NULL DEFAULT 0,
    `private` BOOLEAN NOT NULL DEFAULT false,
    `price` DOUBLE NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contractTokenId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `coverImageNftAddress` VARCHAR(191) NOT NULL,
    `coverImageNftId` VARCHAR(191) NOT NULL,
    `coverColor` VARCHAR(191) NOT NULL,
    `creationTxHash` VARCHAR(191) NOT NULL,
    `creatorId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_sales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `catalogId` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `quantity` DOUBLE NOT NULL,
    `buyerId` INTEGER NOT NULL,
    `purchaseTxHash` VARCHAR(191) NOT NULL,
    `purchasedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_owners` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `catalogId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `derivate_nfts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `collectionAddress` VARCHAR(191) NOT NULL,
    `tokenId` VARCHAR(191) NOT NULL,
    `derivateTokenId` VARCHAR(191) NOT NULL,
    `creatorId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `derivate_nft_licenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `derivateNftId` INTEGER NOT NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CatalogNfts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `catalogId` INTEGER NOT NULL,
    `derivateNftId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_connected_accounts` ADD CONSTRAINT `user_connected_accounts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalogs` ADD CONSTRAINT `catalogs_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalog_sales` ADD CONSTRAINT `catalog_sales_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalog_sales` ADD CONSTRAINT `catalog_sales_catalogId_fkey` FOREIGN KEY (`catalogId`) REFERENCES `catalogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalog_owners` ADD CONSTRAINT `catalog_owners_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalog_owners` ADD CONSTRAINT `catalog_owners_catalogId_fkey` FOREIGN KEY (`catalogId`) REFERENCES `catalogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `derivate_nfts` ADD CONSTRAINT `derivate_nfts_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `derivate_nft_licenses` ADD CONSTRAINT `derivate_nft_licenses_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CatalogNfts` ADD CONSTRAINT `CatalogNfts_derivateNftId_fkey` FOREIGN KEY (`derivateNftId`) REFERENCES `derivate_nfts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CatalogNfts` ADD CONSTRAINT `CatalogNfts_catalogId_fkey` FOREIGN KEY (`catalogId`) REFERENCES `catalogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
