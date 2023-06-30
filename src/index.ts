import cron from 'node-cron';
import TwitterApi from 'twitter-api-v2';
import { compareBitcoinPrice } from './bitcoin';

const client = new TwitterApi({
  appKey: 'sua_app_key',
  appSecret: 'sua_app_secret',
  accessToken: 'seu_access_token',
  accessSecret: 'seu_access_secret'
});

function tweet(message) {
  client.v1.tweet(message)
    .then(tweet => {
      console.log('Tweet publicado:', tweet.text);
    })
    .catch(error => {
      console.error('Erro ao publicar tweet:', error);
    });
}

function main() {
  // Agendando a tarefa para ser executada a cada 1 hora
  cron.schedule('0 */1 * * *', () => {
    console.log('Verificando o preço do Bitcoin...');
    compareBitcoinPrice();
  });

  console.log('Tarefa agendada para ser executada a cada 1 hora.');

  // Exemplo de publicação de tweet
  const tweetText = 'Exemplo de tweet';
  tweet(tweetText);
}

main();
