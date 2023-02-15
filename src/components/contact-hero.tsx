import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, HomepageImage } from "./ui"
import * as styles from "./contact-hero.css"

export interface ContactHeroProps {
  heading: string
  text?: string
  image?: HomepageImage
}

export default function ContactHero(props: ContactHeroProps) {
  return (
    <Section>
      <Container>
        <SuperHeading className={styles.contactHeroHeader}>
          {props.heading}
        </SuperHeading>
        {props.text && (
          <Text className={styles.contactHeroText}>{props.text}</Text>
        )}
      </Container>
      <Container width="wide">
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            className={styles.contactHeroImage}
          />
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment ContactHeroContent on ContactHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
