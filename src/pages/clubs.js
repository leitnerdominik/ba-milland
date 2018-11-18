import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import ClubPreview from '../components/ClubPreview/ClubPreview';

import classes from './clubs.module.css';
import { graphql } from 'gatsby';

class Clubs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: null,
    }
  }

  componentWillMount() {
    console.log(this.props.data);
    const images = this.props.data.allFile.edges.map(({node}, index) => {
      console.log(index);
      return node.childImageSharp.fluid
    });

    this.setState({images});
  }

  render() {

    console.log(this.state.images)

    return (
      <Layout>
        <div className={classes.ClubsContainer}>
          <ClubPreview 
            imgPath={this.state.images[0]}
            title="Musikkapelle Milland"
            link="/musikkapelle-milland">
              Ziele: Durch Pflege guter Blasmusik zur Förderung des kulturellen Lebens in Milland beizutragen und dadurch besonders musikbegeisterte Jugendliche anzusprechen.
          </ClubPreview>
        </div>
      </Layout>
    );
  }
}
  

export default Clubs;

export const query = graphql`
  query {
    allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  relativePath: {regex: "/clubs/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 345,  maxHeight: 140) {
              ...GatsbyImageSharpFluid_noBase64 
            }
          }
        }
      }
    }
  }
`;
