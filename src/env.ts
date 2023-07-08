import { str, cleanEnv } from "envalid";

export const env = cleanEnv(process.env, {
  TWITTER_APP_KEY: str(),
  TWITTER_APP_SECRET: str(),
  GIPHY_KEY: str(),
});
