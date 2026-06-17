-- CreateTable
CREATE TABLE "DemoConsent" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "demoConsentGranted" BOOLEAN NOT NULL DEFAULT false,
    "demoConsentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DemoConsent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DemoConsent_email_key" ON "DemoConsent"("email");
