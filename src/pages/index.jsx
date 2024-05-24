import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Header from '@site/src/components/Header';
import WhatIsUptane from '@site/src/components/WhatIsUptane';
import BlogGrid from '../components/BlogsLatest';
import Community from '../components/JoinCommunity';
import KnowUptane from '../components/KnowUptane';
import PuttingUptane from '../components/PuttingUptane';
import Features from '../components/Features';
import SupportedBySection from '../components/Support';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Distribute Artifacts Across OCI Registries With Ease">
      <main>
        <Header />
        <WhatIsUptane />
        <Features/>
        <KnowUptane/>
        <PuttingUptane/>
        <BlogGrid/>
        <Community />
        <SupportedBySection/>
      </main>
    </Layout>
  );
}
