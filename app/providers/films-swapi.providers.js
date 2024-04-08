const { _http } = require("../utils/http");

const getSwapiFilms = async () => {
  try {
    const response = await _http.get("/films");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = getSwapiFilms;
