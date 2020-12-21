import React from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link} target="_blank">
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  // const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="ABOUT" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="200"
          height="200"
          roundedCircle
          src={`../../icons/sawan2.jpg`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-left about-container">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <div className="mt-4 pt-2">
            <p>
              Hello there! My name is <strong>{`${author}`}</strong>. I am a
            <strong> {occupation}</strong> focused on Front-End Development. I used <Link to="/resume">Codecademy</Link> and <Link to="/resume">FreeCodeCamp</Link> to get started, then applied my knowledge to build my projects.
            <br />
              I am a social person and have great communication skills. I take initiative in difficult situations, and I always strive to improve the product and bring new ideas.
            </p>
            <p>
              In my spare time, I like to read books, think about what I'd like to build next and travel.
            </p>
            <div className="pt-2">
              <h4>Skills:</h4>
              <p><strong>Front-end:</strong> JavaScript, HTML5, CSS3, Python
              </p>
              <p>
                <strong>Libraries:</strong> React.js, Redux, Material UI, webpack, npm, babel
              </p>
              <p>
                <strong>Version control:</strong> Git
              </p>
            </div>
          </div>
          <p >
            Check out my <Link to="/projects">personal projects</Link> to see what I've
            been up to!
            Or check out my <Link to="/blog">blog</Link> to see
            what's recently caught my eye!
          </p>
        </article>
        <article className="w-75 m-auto pb-4 about-container">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed mt-3">
                <small>
                  I am <strong>currently looking for new life-changing opportunities</strong>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:sawankhanchi91@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Books I'm reading:
          </h5>
          <ul style={{ fontSize: "1rem", listStyle: "none", textAlign: "left" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of podcasts I enjoy:
          </h5>
          <ul style={{ fontSize: "1rem", listStyle: "none", textAlign: "left" }}>{showLinks}</ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
