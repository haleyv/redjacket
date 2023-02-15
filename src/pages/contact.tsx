import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

interface ContactProps {
  data: {
    contactPage: {
      id: string
      title: string
      description: string
      image: { id: string; url: string }
      blocks: sections.HomepageBlock[]
    }
  }
}

export default function Contact(props: ContactProps) {
  const { contactPage } = props.data

  return (
    <Layout>
      {contactPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as any)} />
      })}
    </Layout>
  )
}
export const Head = (props: ContactProps) => {
  const { contactPage } = props.data
  return <SEOHead {...contactPage} />
}
export const query = graphql`
  {
    contactPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...ContactHeroContent
        ...HomepageCtaContent
      }
    }
  }
`
