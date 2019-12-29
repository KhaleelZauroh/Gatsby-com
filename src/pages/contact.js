import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Reusable/Section"
import Infoblock from "../components/Reusable/Infoblock"
import Contact from "../components/Contact/Contact"

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Section
    img={data.img.childImageSharp.fluid}
    title=" Contact Us"
    subtitle = ""
    section = "contact us"
     />
    <Infoblock heading="How can we help" />
    <Contact />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "contact.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }

}`

export default ContactPage
