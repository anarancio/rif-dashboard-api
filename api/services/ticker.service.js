const axios = require('axios');

const tickerService = () => {

    const getRifPrice = async () => {
        const url = 'https://api.coingecko.com/api/v3/coins/rif-token/tickers';
        const response = await axios.get(url);
        const tickers = response.data.tickers;
        
        let numberOfUsdTickers = 0;
        let accumulativeAmount = 0;
        for (let i = 0; i < tickers.length; i++) {
            const ticker = tickers[i];
            if (ticker.target == 'USD') {
                accumulativeAmount += ticker.last;
                numberOfUsdTickers++;
            }
        }
        
        return accumulativeAmount / numberOfUsdTickers;
    }

  return {
    getRifPrice,
  };
};

module.exports = tickerService;