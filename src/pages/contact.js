import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Reusable/Section"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Teamimgsection from "../components/About/Teamimgsection"


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Section
    img={data.img.childImageSharp.fluid}
    title=" About this website"
    subtitle = ""
    section = "about-background"
     />

    <Dualinfoblock heading="A message from us" />
    <Infoblock heading="About Company" />
    <Teamimgsection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }

}`

export default AboutPage
