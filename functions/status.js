exports.handler = async (event, context) => {

  import {
    NetlifyAPI
  } from 'netlify';

  const client = new NetlifyAPI(process.env.NETLIFY_TOKEN)
  const deploys = await client.listSiteDeploys({
    siteId: process.env.NETLIFY_SITE_ID
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: deploys[0].state
    })
  };

};