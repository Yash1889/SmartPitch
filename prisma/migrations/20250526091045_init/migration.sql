-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STARTUP', 'INVESTOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('PENDING', 'CONTACTED', 'REPLIED', 'MEETING_SCHEDULED', 'PITCH_COMPLETED', 'INTERESTED', 'NOT_INTERESTED', 'DEAL_CLOSED');

-- CreateEnum
CREATE TYPE "CommunicationType" AS ENUM ('EMAIL', 'MEETING', 'CALL', 'NOTE', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'STARTUP',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Startup" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "description" TEXT,
    "industry" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "foundedDate" TIMESTAMP(3),
    "teamSize" INTEGER,
    "valuation" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "financialMetrics" JSONB,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "firmName" TEXT NOT NULL,
    "description" TEXT,
    "investmentFocus" TEXT[],
    "stagePreference" TEXT[],
    "checkSize" JSONB NOT NULL,
    "location" TEXT NOT NULL,
    "portfolioSize" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PitchDeck" (
    "id" TEXT NOT NULL,
    "startupId" TEXT NOT NULL,
    "currentVersion" INTEGER NOT NULL DEFAULT 1,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PitchDeck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "pitchDeckId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" SMALLINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Analytics" (
    "id" TEXT NOT NULL,
    "pitchDeckId" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "uniqueViews" INTEGER NOT NULL DEFAULT 0,
    "averageTime" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lastViewed" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "startupId" TEXT NOT NULL,
    "investorId" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "status" "MatchStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Communication" (
    "id" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "type" "CommunicationType" NOT NULL,
    "content" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Communication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_userId_key" ON "Startup"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Investor_userId_key" ON "Investor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PitchDeck_startupId_key" ON "PitchDeck"("startupId");

-- CreateIndex
CREATE UNIQUE INDEX "Analytics_pitchDeckId_key" ON "Analytics"("pitchDeckId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_startupId_investorId_key" ON "Match"("startupId", "investorId");

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investor" ADD CONSTRAINT "Investor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PitchDeck" ADD CONSTRAINT "PitchDeck_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_pitchDeckId_fkey" FOREIGN KEY ("pitchDeckId") REFERENCES "PitchDeck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Analytics" ADD CONSTRAINT "Analytics_pitchDeckId_fkey" FOREIGN KEY ("pitchDeckId") REFERENCES "PitchDeck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communication" ADD CONSTRAINT "Communication_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
