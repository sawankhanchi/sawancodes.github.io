import React from "react"
import { graphql } from "gatsby"
// import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation, image } = data.site.siteMetadata
  // const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" image={image} />
      <Container className="text-center pt-3" fluid>
        <Image
          width="200"
          height="200"
          roundedCircle
          fluid
          src={`../../icons/sawan2.jpg`}
          alt={"front-end developer with laptop"}
        />

        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          {unemployed && (
            <p className="mt-2">
              <b> Hello! I am actively looking for new life-changing opportunities :)</b>
            </p>
          )}
          <p>
            <i>
              {occupation} experienced in Front-end Development, &nbsp;
            </i>
            <br />
            <i>
              I'm a self-motivated and well organized person, quick thinking and eager to learn.
              </i>
          </p>
        </Container>
        <hr className="my-4 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.github.com/sawankhanchi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sawankhanchi16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>

          <a
            href="mailto:sawankhanchi91@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "medium"]}
              className="icons github"
              title="Medium"
            />
          </a>
          {/* <a href="../../Sawan Resume - Google Docs1.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume Front-end Developer."
            />
          </a> */}
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
        image {
          src
          width
          height
        }
      }
    }
  }
`
