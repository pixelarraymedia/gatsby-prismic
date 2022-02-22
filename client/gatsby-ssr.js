// gatsby-browser.js AND gatsby-ssr.js

import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { linkResolver } from './src/linkResolver'
import HomepageTemplate from './src/templates/homepage'

export const wrapRootElement = ({ element }) => (
  
  <PrismicProvider
  internalLinkComponent={({ href, ...props }) => (
    <Link to={href} {...props} />
  )}
>
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        componentResolver: componentResolverFromMap({
          page: HomepageTemplate,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
  </PrismicProvider>
)