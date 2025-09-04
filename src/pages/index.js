import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={clsx(styles.heroInner)}>
          <div className={clsx(styles.heroText)}>
            <div className={clsx(styles.heroKicker)}>Workshops Creator Workflows </div>
            <h1 className={clsx('hero__title', styles.heroHeadline, styles.heroTitleGradient)}>IA + DADOS + WORKFLOWS EM AÇÃO</h1>
            <p className={clsx('hero__subtitle', styles.heroSubheadline)}>
              Guias de laboratório hands-on aplicados a cenários reais.
            </p>
          </div>
          <div className={clsx(styles.heroArt)}>
            <img
              src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-screenshots/any-ai.sm.png"
              alt="ServiceNow Any AI sparkles"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Home of Creator Workshop Lab Guides">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
