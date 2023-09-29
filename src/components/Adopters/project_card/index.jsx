import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';

export default function ProjectCard(props) {
    const IconComponent = props.iconComponent; // Use the passed icon component

    return (
        <div className={styles.container}>
            <Link
                href={props.link}
                className={styles.card}
                rel="noreferrer"
            >
                <div className={styles.cardWrapper}>
                    <div className={styles.header}>
                        <div className={styles.iconWrapper}>
                            {IconComponent && <IconComponent className={styles.icon} />} {/* Render the icon */}
                        </div>
                        <div className={styles.title}>{props.title}</div>
                    </div>
                    <div className={styles.content}>
                        <p
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: props.description }}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
}
