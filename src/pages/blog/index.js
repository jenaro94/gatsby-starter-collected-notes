import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function Blog() {
  const data = useStaticQuery(graphql`
    query AllNotes {
      allCollectedNote {
        nodes {
          path
          title
        }
      }
    }
  `)

  const notes = data.allCollectedNote

  return (
    <div className="container">
      <ul>
        {notes &&
          notes.nodes &&
          notes.nodes.map(note => (
            <li key={note.path}>
              <Link to={`/blog/${note.path}`}>{note.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Blog
