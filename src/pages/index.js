import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"


const IndexPage = ({ data }) => (
  <Layout>

    <h1>Selamat Datang di Blog Gatsby with Strapi CMS</h1>
    <p>dapatkan seputar pengetahuan tentang teknologi dan bahasa pemrograman disini</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key = {document.node.id}>
          <h2>
            <Link to = {`/${document.node.id}`}>
              {document.node.title}
            </Link>
          </h2>
          <Img fixed = {document.node.image.childImageSharp.fixed}/>
          <div class="boxs">
          <p>{document.node.content}</p>
          </div>
        </li>
      ))}
    </ul>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width:300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`
