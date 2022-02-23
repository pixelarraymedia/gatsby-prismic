const linkResolver = require('./src/linkResolver')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
   siteMetadata: {
    siteURL: 'pixelarrayca',
    siteName: 'pixelarray ',
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
   `gatsby-plugin-postcss`,
    {
      
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName:process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: require('./src/linkResolver').linkResolver,
        schemas: {
          tex:  require('./schemas/tex.json'),
          page: require('./schemas/page.json'),
             main: require('./schemas/main.json'),
             homepage:  require('./schemas/homepage.json'),
             post: require('./schemas/post.json'),
             posts: require('./schemas/posts.json'),
             half_image: require('./schemas/half_image.json'),
             repeatable: require('./schemas/repeatable.json'),
             top_menu: require('./schemas/top_menu.json'),
             home:  require('./schemas/home.json'),
        },
      },
      
      
      
    },
    
    {
      resolve: 'gatsby-plugin-express',
      options: {
        output: 'config/gatsby-express.json',
      }
    }

  ]


  
}