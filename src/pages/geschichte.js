import React from 'react';
import { graphql } from 'gatsby';


import Layout from '../components/Layout/Layout';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';

import classes from '../styles/pages/geschichte/geschichte.module.css';

const geschichte = ({ data }) => {
  const img = data.allFile.edges;
  const images = img.map(({ node }) => {
    const image = node.childImageSharp.fluid;
    return {
      src: image.src,
      width: image.presentationWidth,
      height: image.presentationHeight,
    }
    
  });

  return (
    <Layout>
      <div className={classes.Container}>
        <div className={classes.Content}>
          <h2>Geschichte Milland</h2>
          <p>
            Milland ist ein eigenständiger Stadtteil von Brixen, dessen Bürger
            die Individualität hervorheben und leben. Besonders stolz sind die
            Millander auf ihre eigenständige Vereinsgemeinschaft, den
            Dorfcharakter und die eigene Industriezone. Dr. Bruno Hosp umreißt
            die Geschichte von Milland anlässlich der 1100 Jahr Feier von
            Milland (1993) wie folgt:
          </p>
          <p>
            Milland begeht heuer (1993) ein Jubiläum: der Anlass ist die erste
            urkundliche Nennung vor 1100 Jahren in einem Diplom des Königs
            Arnulf von Kärnten, das in der Literatur häufig als Lüsner Jagdbrief
            bezeichnet wird. Die Nähe zur Bischofsstadt Brixen brachte die
            Adelssitze nach Milland und damit eine gewisse Wohlhabenheit, wozu
            besonders im 15. und 17. Jahrhundert auch die Wallfahrt zu „Maria am
            Sand“ beitrug.
          </p>
          <p>
            Seit der Jahrhunderwende geriet das kleine Dorf immer mehr in den
            Bann der Stadt, die sich zunächst hauptsächlich nach Milland
            ausdehnte. Somit hat Milland den Weg vom Dorf zur Stadtrandsiedlung
            durchgemacht. Trotz des ständigen Kommens und Gehens, des Zu- und
            Abwanderns gibt es Bemühungen, dem Dorf ein Eigenleben und
            Innenleben zu erhalten oder neu zu schaffen.
          </p>
          <p>
            Auch diese Website sieht ihr Wirken als Teil des eigenständigen
            Charkaters und damit sie unseren Charakter wiederspiegelt, freuen
            wir uns auf Einsendungen von Bildern, Fotos, historischen Fotos und
            Änderungsvorschläge auf bildungsausschuss.milland@gmail.com. Euer
            Bildungsausschuss
          </p>
        </div>
        <h3>Milland alt und neu</h3>
        <div className={classes.ImageContainer}>
          <PhotoGallery images={images} columns={3} />
        </div>
      </div>
    </Layout>
  );
};

export default geschichte;

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "geschichte" } }) {
      edges {
        node {
          childImageSharp {
            id
            fluid(maxWidth: 700) {
              src
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`;
