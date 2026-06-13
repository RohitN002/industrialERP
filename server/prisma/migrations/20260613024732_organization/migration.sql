-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "OrganizationName" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "OrganizationLocation" TEXT NOT NULL,
    "OrganizationAddress" TEXT NOT NULL,
    "websiteUrl" TEXT NOT NULL,
    "primaryMail" TEXT NOT NULL,
    "primaryPhone" TEXT NOT NULL,
    "EmailforBilling" TEXT,
    "baseCurrency" TEXT NOT NULL DEFAULT 'INR',
    "reportBasis" TEXT,
    "organizationLanguage" TEXT,
    "communicationLanguage" TEXT,
    "companyId" TEXT,
    "logoUrl" TEXT,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);
