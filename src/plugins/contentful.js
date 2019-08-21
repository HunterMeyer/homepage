const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VUE_APP_CONTENTFUL_TOKEN
});

module.exports = client
