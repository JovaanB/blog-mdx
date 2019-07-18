import React from 'react';
import Layout from '../components/layout';
import PostList from '../components/PostList';
import { graphql, useStaticQuery } from 'gatsby';

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM YYYY", locale: "fr")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default () => {
  const response = useStaticQuery(getPosts);
  const posts = response.allMdx.edges;
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};
