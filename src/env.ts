import { str, cleanEnv } from "envalid";

export const env = cleanEnv(process.env, {
  TT_APP_KEY: str(),
  TT_APP_SECRET: str(),
  TT_ACCESS_TOKEN: str(),
  TT_ACCESS_SECRET: str(),

  GIPHY_KEY: str(),
});
