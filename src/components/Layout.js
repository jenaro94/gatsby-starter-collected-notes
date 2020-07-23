import React from "react"
import { Link } from "gatsby"
import "./layout.css"

function Layout({ children, pathname }) {
  return (
    <>
      {pathname !== "/" && (
        <header>
          <Link to={"/"}>&larr; back</Link>
        </header>
      )}
      <main>{children}</main>
      {pathname !== "/" && <footer></footer>}
    </>
  )
}

export default Layout
