import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "../styles/global.css"


const IndexPage = () => (
  <Layout >
     <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    <SEO title="Home" />
    <div className="container">
    <div className="img-container">
    <img className="portfolio-img" alt="profile" src={"https://avatars2.githubusercontent.com/u/12448024?s=460&u=637e82a0da78858aef826d8d9dbd7db5e2caabbe&v=4"}/>
    </div>
    <h1>Simran Raj</h1>
    <h3>Developer, Designer, Blogger</h3>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/">Home</Link><br />
    <Link to="/blog-page">Blog</Link> <br />
    <Link to="/contact-me">Contact Me</Link> <br />
    </div>
  </Layout>
)

export default IndexPage
