import { Coinsamba } from "@coinsamba/node-sdk";
import { env } from "./env";
import { TwitterApi } from "twitter-api-v2";
import { GiphyFetch } from "@giphy/js-fetch-api";
import pokedex from "./assets/pokedex.json";

const cs = new Coinsamba();

const tt = new TwitterApi({
  appKey: env.TWITTER_APP_KEY,
  appSecret: env.TWITTER_APP_KEY,
});

const gf = new GiphyFetch(env.GIPHY_KEY);

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const pickPokemonByPriceAndPost = async () => {
  try {
    const res = await cs.getIndex("BTC", "USD");

    const pokemonNumber = Math.round(res.close / 1000) % 150;

    const found = pokedex.find((p) => p.id == pokemonNumber);

    const gif = await gf.search(found!.name.english, {
      sort: "relevant",
      lang: "en",
      limit: 1,
      type: "gifs",
    });

    const gifUrl = gif.data[0].images.original.url;

    let message = "#Bitcoin cotado em Pokémon\n";
    message += `Preço atual ${formatter.format(res.close)}\n`;
    message += `${gifUrl}`;

    await tt.v1.tweet(message);
  } catch (error) {
    console.error(error);
  }
};
