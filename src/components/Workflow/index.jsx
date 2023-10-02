import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function Workflow() {
    return (
        <div className={[styles.workflow, styles.section_padding].join(' ')}>
            <div className={styles.how_uptane_works}>
                <h1>How Uptane Works</h1>
                <p>A thumbnail sketch of how Uptane works. <Link to="/docs/Design">Learn More</Link>.</p>

            </div>
            <div className={styles.workflow_image}>
                <ThemedImage
                    alt="uptane Workflow Image"
                    sources={{
                        light: useBaseUrl('./img/uptane_workflow_light.svg'),
                        dark: useBaseUrl('/img/uptane_workflow_dark.svg'),
                    }}
                />
            </div>
        </div>
    );
}