export const CoinList = (currency) =>
  `/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_api_key=${process.env.REACT_APP_COIN_GECKO_API_KEY}`;

export const SingleCoin = (id) =>
  `/api/v3/coins/${id}?x_cg_api_key=${process.env.REACT_APP_COIN_GECKO_API_KEY}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&x_cg_api_key=${process.env.REACT_APP_COIN_GECKO_API_KEY}`;
