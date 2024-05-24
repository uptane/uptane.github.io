import React from 'react';
import data from '@site/static/data/KnowUptane/data.js';
import ProjectCard from './project_card';
import styles from './styles.module.css';

export default function KnowUptane() {
    const ProjectCards = data.projects.map((item, index) => {
        return (
            <ProjectCard
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
                iconComponent={item.icon} // Pass the icon from the data file
            />
        );
    });

    return (
        <main>
            <div>
                <div className={[styles.projects_uptane, styles.section_padding].join(' ')}>
                    <h1>Getting to know Uptane</h1>
                </div>
                <div className={styles.projectcards}>
                    {ProjectCards}
                </div>
            </div>
        </main>
    );
}
