import React from 'react';
import UptaneCubes from '@site/static/img/uptane_hero_img.svg';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function Header() {
    return (
        <div className={`bg-gradient-blue flex flex-col lg:flex-row hero-clip p-12 pr-28 pb-24 pl-28 md:p-16 lg:p-12`}>
            <div className={`lg:ml-10 flex flex-col items-start justify-center flex-1`}>
            <ThemedImage
                alt="Supported By Logo"
                width="300px"
                sources={{
                    light: useBaseUrl('/img/uptaneLogoHero.svg'),
                    dark: useBaseUrl('/img/uptaneLogoHero.svg'),
                }}
            />
                <h1 className="mt-6 mb-6 text-white font-semibold">A Secure Software Update Framework for Automobiles</h1>
                <div className="flex items-start justify-start gap-8 mt-8">
                    <Link to="/learn-more/getting-started" className="border-2 border-white bg-transparent text-white font-bold text-lg pt-2 pb-2 pr-8 pl-8 rounded-md">Learn More</Link>
                </div>
            </div>
            <div className="hidden lg:flex flex-1 lg:items-center lg:justify-center">
                <UptaneCubes title="uptane Cubes" width="65%" />
            </div>
        </div>
    );
}
