import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";

export interface IProps {
    children: React.ReactNode
    pageTitle: string | undefined
}

const Layout: React.FC<IProps> = ({ children, pageTitle = "" }) => {

    const query = useStaticQuery<Queries.Query>(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

    return (
        <div>
            <title>{pageTitle} | {query.site?.siteMetadata?.title}</title>
            <header style={{ fontSize: "3rem", color: "gray", fontWeight: 700, margin: "3rem 0" }}>{query.site?.siteMetadata?.title}</header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog" >Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout