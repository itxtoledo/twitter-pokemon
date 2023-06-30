import axios from 'axios';
import db from './db';

export function compareBitcoinPrice() {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    .then(response => {
      const currentPrice = response.data.bpi.USD.rate_float;
      console.log('Preço atual do Bitcoin:', currentPrice);

      const savedPrice = db.get('bitcoinPrice').value();
      if (savedPrice !== null) {
        const priceDiff = ((currentPrice - savedPrice) / savedPrice) * 100;
        const pokemonNumber = Math.round(currentPrice / 1000);
        const formattedPriceDiff = priceDiff.toFixed(2);
        const sign = priceDiff >= 0 ? '+' : '';
        console.log('Variação de preço desde a última hora:', sign + formattedPriceDiff + '%');
        console.log('Número do Pokémon correspondente:', pokemonNumber);

        db.set('bitcoinPrice', currentPrice).write();
      } else {
        db.set('bitcoinPrice', currentPrice).write();
        console.log('Preço do Bitcoin salvo:', currentPrice);
      }
    })
    .catch(error => {
      console.error('Erro ao obter o preço do Bitcoin:', error);
    });
}
