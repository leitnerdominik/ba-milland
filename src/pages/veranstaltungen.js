import React, { Component } from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';

import Layout from '../components/Layout/Layout';
import Event from '../components/EventsPreview/Event/Event';
import DateFilter from '../components/DateFilter/DateFilter';

import classes from './veranstaltungen.module.css';

class Veranstaltungen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      filteredEvents: [],
      startDate: null,
      endDate: null,
    };

    this.startDateChangeHandler = this.startDateChangeHandler.bind(this);
    this.endDateChangeHandler = this.endDateChangeHandler.bind(this);
  }

  UNSAFE_componentWillMount() {
    const events = this.props.data.allMarkdownRemark.edges.map(({ node }) => {

      const metaData  = node.frontmatter;
      return (
        <Event
          key={node.id}
          title={metaData.title}
          date={metaData.date}
          content={node.excerpt}
          time={metaData.time}
          path={node.fields.slug}
        />
      );
    });

    this.setState({ events, filteredEvents: events });
  }

  startDateChangeHandler(date) {
    this.setState({ startDate: date }, this.filterEvents);
  }

  endDateChangeHandler(date) {
    this.setState({ endDate: date }, this.filterEvents);
  }

  filterEvents() {
    const { events, startDate, endDate } = this.state;
    const filteredEvents = events.filter(event => {
      if(startDate !== null && endDate !== null) {
        const pubDate = moment(event.props.date, "DD.MM.YYYY").toDate();
        return pubDate >= startDate && pubDate <= endDate;
      }
      return true;
    })

    this.setState({ filteredEvents });
  }

  render() {
    const { startDate, endDate, filteredEvents } = this.state;

    const content = filteredEvents.length > 0 ? filteredEvents : <p style={{textAlign: 'center'}}>Keine Veranstaltungen gefunden!</p>;
    
    return (
      <Layout>
        <div>
          <div className={classes.DateContainer}>
            <span>Filter</span>
            <DateFilter
              date={startDate}
              startDate={startDate}
              endDate={endDate}
              changed={this.startDateChangeHandler}
              selectsStart
              placeholder="DD.MM.YYYY"
              description="von"
            />
            <DateFilter
              date={endDate}
              startDate={startDate}
              endDate={endDate}
              changed={this.endDateChangeHandler}
              selectsEnd
              placeholder="DD.MM.YYYY"
              description="bis"
            />
          </div>
          {content}
        </div>
      </Layout>
    );
  }
}

export default Veranstaltungen;

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: [frontmatter___date_from], order: DESC}, filter: {frontmatter: {section: {eq: "event"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`;
