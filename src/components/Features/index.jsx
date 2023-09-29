import React from 'react';
import styles from './styles.module.css';

const features = [
    {
        title: 'Resilient',
        content: [
            "Acknowledging that all systems will eventually be hacked, Uptane is designed to minimize the damage of a compromise and assure rapid recovery.",
        ],
    },
    {
        title: 'Adaptable',
        content: [
            "Uptane takes a modular approach to problem-solving, so legacy systems can upgrade security without the need for extensive retrofitting",
        ],
    },
    {
        title: 'Responsive',
        content: [
            "The Uptane Standard is a living document that is quick to respond to community input.",
        ],
    },
];

export default function Features() {
    return (
        <div className={[styles.features, styles.section_padding].join(' ')}>
            <div className={styles.features_uptane}>
                <h1>Why Uptane</h1>
            </div>
            {features.map(({ title, content }, index) => (
                <div className={styles.feature_card} key={index}>
                    <div />
                    <h3>{title}</h3>

                    <ul className={styles.list}>
                        {content.map((use, index) => (
                            <li key={index} className={styles.listItem}>
                                {use}
                            </li>
                        ))}
                    </ul>

                </div >
            ))
            }
        </div >
    );
}
