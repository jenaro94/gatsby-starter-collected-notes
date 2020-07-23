import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

export const query = graphql`
  query NoteQuery($pagePath: String!) {
    collectedNote(path: { eq: $pagePath }) {
      body
      created_at
      curated
      headline
      id
      path
      poster
      site_id
      title
      updated_at
      url
      user_id
      visibility
    }
  }
`

const BlogPost = ({ data }) => {
  if (!data) return null

  const note = data.collectedNote
  return (
    <div>
      <ReactMarkdown source={note.body} />
    </div>
  )
}

export default BlogPost
