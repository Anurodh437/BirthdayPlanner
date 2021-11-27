const axios = require("axios");

// set up the request parameters
const params = {
  api_key: "7ED553449DF14D2B92CB2E9450F20490",
  type: "search",
  amazon_domain: "amazon.com",
  search_term: "Coffee Mugs ",
  output: "html",
  exclude_sponsored: "false",
  language: "en_US",
  customer_location: "gb",
};

// make the http GET request to Rainforest API
axios
  .get("https://api.rainforestapi.com/request", { params })
  .then((response) => {
    // print the HTML response from Rainforest API
    console.log(response.data);
  })
  .catch((error) => {
    // catch and print the error
    console.log(error);
  });
