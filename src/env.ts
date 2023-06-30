import { str, cleanEnv } from "envalid";

export const ENV = cleanEnv(process.env, {
  TWITTER_APP_KEY: str(),
  TWITTER_APP_SECRET: str(),
  TWITTER_ACCESS_TOKEN: str(),
  TWITTER_ACCESS_SECRET: str(),
});
