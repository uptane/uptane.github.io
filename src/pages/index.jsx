import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Header from '@site/src/components/Header';
import WhatIsUptane from '@site/src/components/WhatIsUptane';
// import Workflow from '@site/src/components/Workflow';
import Community from '../components/JoinCommunity';
import Adopters from '../components/Adopters';
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
        <Adopters/>
        <PuttingUptane/>
        {/* <Workflow /> */}
        <Community />
        <SupportedBySection/>
      </main>
    </Layout>
  );
}
