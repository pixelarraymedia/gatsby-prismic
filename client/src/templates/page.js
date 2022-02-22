import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Showcase } from '../components/Showcase'
import { components } from '../components/slices'
import Layout  from '../components/Layout'


const PageTemplate = ({ data }) => {
  if (!data) return null

  
  const pageContent = data.prismicPage
  const page = pageContent.data || {}

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }
  const topMenu = data.prismicTopMenu || {}

  return (
    <Layout topMenu={topMenu.data} activeDocMeta={activeDoc}>
     <SliceZone slices={page.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
query PageQuery($id: String) {
  prismicPage(id: {eq: $id}) {
    _previewable
    data {
      body {
        ... on PrismicSliceType {
          id
          slice_label
          slice_type
        }
        ...PageDataBodyFullWidthImage
        ...PageDataBodyHeadlineWithButton
        ...PageDataBodyInfoWithImage
        ...PageDataBodyTextInfo
      }
    }
  }
}



`

export default withPrismicPreview(PageTemplate)