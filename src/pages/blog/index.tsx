import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage: React.FC = () => {
    const query = useStaticQuery<Queries.Query>(graphql`
    {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
  `)


    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
            <ul>
                {
                    query.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter?.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter?.date}</p>
                        </article>

                    ))
                }
            </ul>
        </Layout>)
}
export default BlogPage
