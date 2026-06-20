import type { GithubInstallationStatus } from "@/features/dashboard/lib/types";
import { getGithubApp } from "@/features/github/utils/github-app";
import { prisma } from "@/lib/db";