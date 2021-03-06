import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Waypoint } from 'react-waypoint';
import Section from 'components/shared/section';
import Title from 'components/shared/multi-title';
import Icon from 'components/shared/icon';
import { LanguageContext } from 'contexts/language-context';
import { scss } from 'utils';
import styles from './about.module.scss';

const propTypes = {};
const defaultProps = {};

function KDABanner() {
  const language = useContext(LanguageContext);
  const image = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "kc-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300, maxHeight: 445, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      className={styles.bannerWrapper}
      fluid={image.banner.childImageSharp.fluid}
      alt={language.AboutBannerAlt}
    />
  );
}

function ContentItem({ icon, line1, line2, className }) {
  return (
    <div className={scss(styles.cardWrapper, className)}>
      <div className={styles.iconWrapper}>
        <Icon icon={icon} />
      </div>
      <p>{line1}</p>
      <p>{line2}</p>
    </div>
  );
}

function AboutParagraph({ firstParagraph, secondParagraph }) {
  return (
    <div className={styles.paragraphWrapper}>
      <p>
        {firstParagraph}
      </p>
      <br />
      <p>
        {secondParagraph}
      </p>
    </div>
  );
}

function About() {
  const language = useContext(LanguageContext);
  const [active, setActive] = useState(false);

  return (
    <>
      <Section id={language.AboutUsId}>
        <Title
          name={language.AboutTitle}
          teal={language.AboutSubtitlePrimary}
          white={language.AboutSubtitleSecondary}
        />
        <AboutParagraph
          firstParagraph={language.AboutFirstParagraph}
          secondParagraph={language.AboutSecondParagraph}
        />
        <Waypoint onEnter={() => setActive(true)}>
          <div className={styles.content}>
            <ContentItem
              className={scss(styles.first, active ? styles.active : '')}
              icon="graph"
              line1={language.AboutFirstColTitle}
            />
            <ContentItem
              className={scss(styles.second, active ? styles.active : '')}
              icon="relations"
              line1={language.AboutSecondColTitle}
            />
            <ContentItem
              className={scss(styles.third, active ? styles.active : '')}
              icon="security"
              line1={language.AboutThirdColTitle}
            />
            <ContentItem
              className={scss(styles.fourth, active ? styles.active : '')}
              icon="customer-service"
              line1={language.AboutFourthColTitle}
            />
          </div>
        </Waypoint>
      </Section>
      <KDABanner />
    </>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
