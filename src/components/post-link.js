import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    
    <div className="card">
  <div className="card-body">
    <h3 className="card-title">{post.frontmatter.title}</h3>
    <h6 className="card-subtitle mb-2 text-muted">{post.frontmatter.date}</h6>
    <p className="card-text">{post.frontmatter.description}</p>
    <Link to={post.frontmatter.path}>
      View More
    </Link>
  </div>
  </div>
  
)

export default PostLink