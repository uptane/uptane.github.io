import React from 'react';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function SupportedBySection() {
    return (
        <section className={[styles.supported_by_section, styles.section_padding].join(' ')}>
            <h3 className={styles.Tagline}>We are a Linux Foundation <Link href="https://jointdevelopment.org/" target="_blank">Joint development foundation</Link> Project.</h3>

            <ThemedImage
                alt="Supported By Logo"
                width="300px"
                sources={{
                    light: useBaseUrl('/img/JDF_light.png'),
                    dark: useBaseUrl('/img/JDF_light.png'),
                }}
            />
        </section>
    );
}
