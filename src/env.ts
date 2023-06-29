import { str, cleanEnv } from "envalid";

export const ENV = cleanEnv(process.env, {
    TT_KEY: str(),
    TT_SECRET: str(),
});