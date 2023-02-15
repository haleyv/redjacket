import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

interface ServicesProps {
  data: {
    servicesPage: {
      id: string
      title: string
      description: string
      image: { id: string; url: string }
      blocks: sections.HomepageBlock[]
    }
  }
}

export default function Services(props: ServicesProps) {
  const { servicesPage } = props.data

  return (
    <Layout>
      {servicesPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as any)} />
      })}
    </Layout>
  )
}
export const Head = (props: ServicesProps) => {
  const { servicesPage } = props.data
  return <SEOHead {...servicesPage} />
}
export const query = graphql`
  {
    servicesPage {
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
        ...ServicesHeroContent
        ...HomepageCtaContent
      }
    }
  }
`
