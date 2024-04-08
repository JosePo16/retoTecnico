const { _http } = require("../utils/http");

const getSwapiStarships = async () => {
  try {
    const response = await _http.get("/starships");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = getSwapiStarships;
