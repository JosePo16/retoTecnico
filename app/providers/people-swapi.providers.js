const { _http } = require("../utils/http");

const getSwapiPeople = async () => {
  try {
    const response = await _http.get('/people')
    return response.data;
  } catch (error) {
    console.log(error)
    return null
  }
};

module.exports = getSwapiPeople;


