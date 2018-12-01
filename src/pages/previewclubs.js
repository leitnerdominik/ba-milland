import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import ClubPreview from '../components/ClubPreview/ClubPreview';

import classes from './previewclubs.module.css';
import { graphql } from 'gatsby';

class Clubs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markdownArr: null,
    }
  }

  UNSAFE_componentWillMount() {
    const markdowns = this.props.data.allMarkdownRemark.edges.map(({node}, index) => {
      return {
        id: node.id,
        image: node.frontmatter.cover_image.childImageSharp.fluid,
        title: node.frontmatter.title,
        link: node.frontmatter.link,
        content: node.html,
      }
    });

    this.setState({markdownArr: markdowns});
  }

  render() {
    const { markdownArr } = this.state;
    const clubs = markdownArr.map(markdown => (
      <ClubPreview
        key={markdown.id}
        img={markdown.image}
        title={markdown.title}
        htmlContent={markdown.content}
        link={markdown.link}
      />
    ));
    return (
      <Layout>
        <div className={classes.ClubsContainer}>
          {clubs}
        </div>
      </Layout>
    );
  }
}
  

export default Clubs;

export const query = graphql`
  query {
    allMarkdownRemark (filter: {frontmatter: {section: {eq: "previewclub"}}}){
      edges {
        node {
          id
          frontmatter {
            title
            section
            link
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

// export const query = graphql`
//   query {
//     allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  relativePath: {regex: "/clubs/"}}) {
//       edges {
//         node {
//           childImageSharp {
//             fluid(maxWidth: 345,  maxHeight: 140) {
//               ...GatsbyImageSharpFluid_noBase64 
//             }
//           }
//         }
//       }
//     }
//   }
// `;
