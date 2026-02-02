const axios = require('axios');

exports.handler = async (event) => {
  const GAS_URL = "https://script.google.com/macros/s/AKfycbxgx4Z6I80tE_blE_tkkYnJXrmpH92IGSMSlveG7IVZoWfsA7hrKZJWb0uFU3dgcEd6qA/exec";

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type" } };
  }

  try {
    const response = await axios.post(GAS_URL, event.body);
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
