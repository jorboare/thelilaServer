const contentful = require("contentful");
const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  space: space,
  accessToken: accessToken,
});

const getFood = async () => {
  return await client.getEntries({
    content_type: "comida",
  });
};

const getDrinks = async () => {
  return await client.getEntries({
    content_type: "bebida",
  });
};

module.exports = {
  getFood,
  getDrinks,
};
