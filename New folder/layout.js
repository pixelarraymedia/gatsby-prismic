/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"




import "../styles/global.css"
import OAPguidelines from "./OAPguidelines"
import Showcase from "./showcase"
import Cards from "./Cards"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
        html{
          
        }
      }
    }
  `)

  return (
    <>
     
      <div
        style={{
         
         
       
        }}
      >
        <main>
          <Showcase />
          <OAPguidelines />
          <Cards />
          
          {children}</main>
        <footer >
         
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
