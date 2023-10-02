import React from "react";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';

export default function LinkCard({ link, title, light, dark }) {
    return (
        <div className={styles.container}>
            <Link
                target="_blank"
                href={link}
                className={styles.card}
                rel="noreferrer"
            >
                <div className={styles.cardWrapper}>
                    <div className={styles.header}>
                        <div className={styles.imageWrapper}>
                            <ThemedImage className={styles.image}
                                title={title}
                                sources={{
                                    light: useBaseUrl(`${light}`),
                                    dark: useBaseUrl(`${dark}`),
                                }}
                            />
                        </div>
                        <div className={styles.title}>{title}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};