import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"

const IndexPage = ({ data }) => {
  return (
    <Layout category="deployment">
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  )
}

const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/deployment/concept/" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export { query }
export default IndexPage
