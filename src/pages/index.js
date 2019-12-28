import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Reusable/Section"
import Cart from "../components/Cart/Cart"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Section
    img={data.img.childImageSharp.fluid}
    title="You Look Good You Feel Good"
    subtitle = "Start shopping!"
    section = "section-background"
     />
    <Cart mycourses={data.mycourses} />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "diana.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
  mycourses: allContentfulCourses{
    edges{
    node{
      id
      title
      price
      category
      description {
        description
      }
      image{
        fixed(width:200, height:120){
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
   }
  }
}`

export default IndexPage
