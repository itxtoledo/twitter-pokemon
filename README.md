# Node.js Bitcoin Price and Pokémon Twitter Bot

This is a Node.js project written in TypeScript that posts the current price of Bitcoin and its equivalent Pokémon on Twitter every hour. The bot utilizes the Twitter API and fetches the Bitcoin price from the CoinSamba cryptocurrency exchange API. The corresponding Pokémon is chosen randomly from a predefined list.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project's directory.
3. Run the following command to install the dependencies:

```shell
npm install
```

## Configuration

Before running the bot, you need to set up a few configuration variables:

1. Create a new Twitter Developer App and obtain the following credentials:

   - Consumer Key (API Key)
   - Consumer Secret (API Secret Key)
   - Access Token
   - Access Token Secret

2. Rename the `.env.example` file to `.env`.

3. Open the `.env` file and replace the placeholders with your Twitter API credentials:

```shell
NODE_ENV=development
TWITTER_APP_KEY=sdfsf
TWITTER_APP_SECRET=sdf
TWITTER_ACCESS_TOKEN='sdf
TWITTER_ACCESS_SECRET=sdfsdf
```

4. Save the changes.

## Usage

To start the bot, run the following command:

```shell
npm start
```

The bot will fetch the current Bitcoin price from the CoinSamba API and a random Pokémon every hour, and post the information on Twitter using your account.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

Please note that this project is for educational and informational purposes only. The Bitcoin price and Pokémon data provided by the bot may not be accurate, and it is not responsible for any financial transactions or decisions made based on this information. The Bitcoin price is fetched from the Coinsamba API, and its accuracy and reliability are dependent on the Coinsamba service.
