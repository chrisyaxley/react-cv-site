const contentful = require('contentful');

const SPACE_ID = 'kmriaxlsyq0y'
const ACCESS_TOKEN = 'c05fbc3b1f8db2476187dfcb5d85f6ce65a74495a7558c0fcbe8e9f517d17f88'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

exports.getAll = function(req, res){
  client.getEntries( {content_type: 'skills'} )
  .then((response) => {return res.send(response.items)})
}
