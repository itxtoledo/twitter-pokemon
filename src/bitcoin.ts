import { Coinsamba } from "@coinsamba/node-sdk";
import { env } from "./env";
import { TwitterApi } from "twitter-api-v2";

const cs = new Coinsamba();

const tt = new TwitterApi({
  appKey: env.TWITTER_APP_KEY,
  appSecret: env.TWITTER_APP_KEY,
  accessToken: env.TWITTER_ACCESS_TOKEN,
  accessSecret: env.TWITTER_ACCESS_SECRET,
});

export const bitcoin = async () => {
  try {
    const res = await cs.getIndex("BTC", "BRL");

    const pokemonNumber = Math.round(res.close / 1000);

    await tt.v1.tweet("message");
  } catch (error) {
    console.error(error);
  }
};
