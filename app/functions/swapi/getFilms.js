const getSwapiFilms = require("../../providers/films-swapi.providers");

const getFilms = async () => {
  try {
    const result = await getSwapiFilms();

    return {
      status: 200,
      body: {
        result,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    getFilms,
};
