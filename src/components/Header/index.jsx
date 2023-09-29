import React from 'react';
import UptaneCubes from '@site/static/img/uptane_cubes.svg';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function Header() {
    const headerBackClasses = `${styles.header_back} ${styles.section_padding}`;
    const customButtonClasses = `button button--lg ${styles.customButtonStyle}`;

    return (
        <div className={headerBackClasses}>
            <div className={styles.header_content}>
                <h1>UPTANE</h1>
                <h3>A Secure Software Update Framework for Automobiles</h3>
                <div className={styles.header_content_buttons}>
                    <Link to="/docs/learn-more/getting-started" className={customButtonClasses}>Learn More</Link>
                </div>
            </div>
            <div className={styles.header_image}>
                <UptaneCubes title="uptane Cubes" width="100%" />
            </div>
        </div>
    );
}
