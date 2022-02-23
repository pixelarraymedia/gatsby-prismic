import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'

import  Layout from '../components/Layout'
import { components } from '../components/slices'

const HomepageTemplate = ({ data }) => {
   if (!data) return null

   const homepage = data.prismicHomepage || {}
   const topMenu = data.prismicTopMenu || {}
 
   const { lang, type, url } = homepage || {}
   const alternateLanguages = homepage.alternate_languages || []
   const activeDoc = {
     lang,
     type,
     url,
     alternateLanguages,
   }
 
   return (
     <Layout topMenu={topMenu.data} activeDocMeta={activeDoc}>
 <SliceZone slices={homepage.body} components={components} />
     </Layout >
   )
 }
 
export const query = graphql`
query PageTemplate($id: String) {
prismicHomepage(id: {eq: $id}) {
    _previewable
    alternate_languages {
      uid
      type
      lang
      id
    }
    lang
    url
    type
    data {
      body {
        ... on PrismicSliceType {
          id
          slice_type
          slice_label
        }
        ...HomepageDataBodyFullWidthImage
        ...HomepageDataBodyHeadlineWithButton
        ...HomepageDataBodyInfoWithImage
        ...HomepageDataBodyTextInfo
      }
    }
  }
}






`

export default withPrismicPreview(HomepageTemplate)