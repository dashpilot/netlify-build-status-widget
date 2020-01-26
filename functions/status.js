const NetlifyAPI = require('netlify')

exports.handler = async (event, context) => {

  /*
  try {
    const {
      user
    } = context.clientContext;

    if (!user) throw new Error('Not Authorized');
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed"
      };
    }
    */

  const client = new NetlifyAPI(process.env.NETLIFY_TOKEN)
  const deploys = await client.listSiteDeploys({
    siteId: process.env.NETLIFY_SITE_ID
  });

  return {
    statusCode: 200,
    body: deploys[0].state
  };

};