import dotenv from "dotenv";
import { Environment } from "../types/index";

const DB_URI_VARS = ["MONGODB_URI", "MONGODB_URI_DEV"];

dotenv.config({ path: ".env" });

export const getEnv: () => Environment = () => {
  switch (process.env.NODE_ENV) {
    case "production":
      return "production";
    default:
      return "development";
  }
};

const environments: Environment[] = ["production", "development"];
const e = environments.indexOf(getEnv());
export const ENVIRONMENT = environments[e];
export const MONGODB_URI = process.env[DB_URI_VARS[e]];

if (!MONGODB_URI) {
  console.error(
    `No mongo connection string. Set ${DB_URI_VARS[e]} environment variable.`,
  );
}
