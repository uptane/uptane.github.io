import React from 'react';
import UptaneCubes from '@site/static/img/uptane_hero_img.svg';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function Header() {
    const headerBackClasses = `${styles.header_back} ${styles.section_padding}`;
    const customButtonClasses = `button button--lg ${styles.customButtonStyle}`;

    return (
        <div className={headerBackClasses}>
            <div className={styles.header_content}>
            <ThemedImage
                alt="Supported By Logo"
                width="300px"
                sources={{
                    light: useBaseUrl('/img/uptaneLogoHero.svg'),
                    dark: useBaseUrl('/img/uptaneLogoHero.svg'),
                }}
            />
                <h3>A Secure Software Update Framework for Automobiles</h3>
                <div className={styles.header_content_buttons}>
                    <Link to="/learn-more/getting-started" className={customButtonClasses}>Learn More</Link>
                </div>
            </div>
            <div className={styles.header_image}>
                <UptaneCubes title="uptane Cubes" width="100%" />
            </div>
        </div>
    );
}
