const config = {
  API_BASE_URL: process.env.API_BASE_URL || 'http://api.weatherapi.com/v1',
  API_KEY: process.env.API_KEY,
  PORT: process.env.PORT || 8080,
};

export default config;
