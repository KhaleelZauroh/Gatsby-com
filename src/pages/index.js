import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Reusable/Section"
import Infoblock from "../components/Reusable/Infoblock"


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

}`

export default IndexPage
