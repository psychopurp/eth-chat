import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface IProps {
    data: Queries.Query
}

const BlogPost: React.FC<IProps> = ({ data }) => {

    const { mdx } = data
    const image = getImage(mdx?.frontmatter?.hero_image)

    return (
        <Layout pageTitle={mdx?.frontmatter?.title}>
            <p>{mdx?.frontmatter?.date}</p>
            <GatsbyImage image={image} alt={mdx?.frontmatter?.hero_image_alt} />
            <p>
                Photo Credit:{" "}
                <a href={mdx.frontmatter.hero_image_credit_link}>
                    {mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
            {mdx && <MDXRenderer>
                {mdx.body}
            </MDXRenderer>}

        </Layout>

    )
}



export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
            childImageSharp {
              gatsbyImageData
            }
        }
      }
      body
    }
  }
`

export default BlogPost