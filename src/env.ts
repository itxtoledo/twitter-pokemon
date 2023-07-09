import { str, cleanEnv } from "envalid";

export const env = cleanEnv(process.env, {
  TWITTER_BEARER: str(),
  GIPHY_KEY: str(),
});
