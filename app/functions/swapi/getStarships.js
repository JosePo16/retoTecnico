const getSwapiStarships = require("../../providers/startship-swapi.providers");

const getStarships = async () => {
  try {
    const result = await getSwapiStarships();

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
  getStarships,
};
