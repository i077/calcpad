
import Banner from 'components/Banner/Banner.react';
import Button from 'components/Button/Button.react';
import Event from 'components/Event/Event.react';
import FAQ from 'components/FAQ/FAQ.react';
import Hackry from 'hackry';
import Logo from 'components/Logo/Logo.react';
import Navbar from 'components/Navbar/Navbar.react';
import React from 'react';
import styles from 'web/App.scss';
import Summary from 'components/Summary/Summary.react';
import Section from 'components/Section/Section.react.js'
import Track from 'components/Track/Track.react';
import tracks from 'data/tracks';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {ic_aspect_ratio} from 'react-icons-kit/md/ic_aspect_ratio';
import {ic_question_answer} from 'react-icons-kit/md/ic_question_answer';
import {ic_person} from 'react-icons-kit/md/ic_person';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.hackry = new Hackry('NQZBtoIMDJ');
    this.state = {
      faqs: [],
      events: []
    };
  }

  componentWillMount() {
    this.hackry.faqs((faqs) => {
      this.setState({
        faqs: faqs
      });
    });

    this.hackry.events((events) => {
      this.setState({
        events: events
      });
    });
  }

  renderComingSoon() {
    return (
      <div className={styles.comingSoon}>Coming soon...</div>
    )
  }

  render() {
    return (
      <div>
      <div className = {styles.navbar}>
        <Navbar
          sections = {[
            {
              text:"About",
              sectionID:"about",
              icon:{ic_person}
            },
            {
              text:"Registration",
              sectionID:"register",
              icon:{ic_person}
            },
            {
              text:"FAQs",
              sectionID:"faq",
              icon:{ic_person}
            },
            {
              text:"Event",
              sectionID:"event",
              icon:{ic_person}
            },
            {
              text:"Project Tracks",
              sectionID:"tracks",
              icon:{ic_person}
            }
          ]}
          />
      </div>
      <div className={styles.landingPageContent}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <Navbar
             items={[{
               name: 'Tracks',
               scrollId: 'tracks'
             }, {
               name: 'FAQs',
               scrollId: 'faqs'
             }, {
               name: 'Schedule',
               scrollId: 'schedule'
             }]} />
          </div>
          <div>
          <Banner>
            Register for <a href="https://hackday.mlh.io/localhackday-8d49">Local Hack Day</a>, happening December 2nd.
          </Banner>
          <Logo />
          <Section>
            <div className={styles.summary}>
              <Summary />
            </div>
            <div className={styles.callToActions}>
              <Button
               title='Registration Coming Soon'
               color='darkBlue' />
              <Button
               title='Sponsor'
               externalLink='/sponsorship'
               color='red' />
            </div>
          </Section>
          <Section
           title='Tracks'
           scrollId='tracks'
           description={'There\'s only one thing we like more than working on projects, and that\'s working on projects that work in the real world. That\'s why we\'ve created a unique track system for hackCWRU V.'}>
            {Object.keys(tracks).map((name, index) => {
              const track = tracks[name.toLowerCase()];
              return (
                <Track
                 key={index}
                 name={name.charAt(0).toUpperCase() + name.slice(1)}
                 image={track.image}
                 description={track.description} />
              )
            })}
          </Section>
          <Section title='FAQs' scrollId='faqs'>
            {this.state.faqs.length > 0 ? this.state.faqs.map((faq, index) => {
              return (
                <FAQ
                 key={index}
                 question={faq.question}
                 answer={faq.answer} />
              )
            }) : this.renderComingSoon()}
          </Section>
          <Section title='Schedule' scrollId='schedule'>
            {this.state.events.length > 0 ? this.state.events.map((event, index) => {
              return (
                <Event
                 key={index}
                 name={event.name}
                 when='idk'
                 where={event.location}
                 description={event.description} />
              )
            }) : this.renderComingSoon()}
          </Section>
          </div>
        </div>
      </div>
      </div>
    );
  }

}
