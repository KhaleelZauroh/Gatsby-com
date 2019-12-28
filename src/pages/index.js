import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Reusable/Section"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Cart from "../components/Cart/Cart"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Section
    img={data.img.childImageSharp.fluid}
    title=" This will be the title"
    subtitle = "This will be the subtitle"
    section = "section-background"
     />

    <Infoblock heading="About Us" />
    <Cart mycourses={data.mycourses} />
    <Dualinfoblock heading="Our Team" alinfoblock heading="Our Team" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
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
