const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages'});
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  };
}

exports.createPages = ({ graphql, actions}) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              section
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `)
    .then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node}) => {
        let componentPath = null;
        if(node.frontmatter.section === 'event') {
          componentPath = path.resolve('./src/templates/eventPost.js');
        } else if(node.frontmatter.section === 'club') {
          componentPath = path.resolve('./src/templates/clubPost.js');
        } else {
          return;
        }

        createPage({
          path: node.fields.slug,
          component: componentPath,
          context: {
            slug: node.fields.slug,
          }
        })
      })
      resolve();
    })
  })
}