import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import ContributorList from './../../../contributors.json';

const Contributors = () => {

  const [allContributors, setAllContributors] = useState([]);

  useEffect(() => {
    const uniqueContributors = new Map();

    for (const repo of ContributorList) {
      repo.contributors.forEach((contributor) => {
        uniqueContributors.set(contributor.id, contributor);
      });
    }

    const uniqueContributorsArray = Array.from(uniqueContributors.values());

    setAllContributors(uniqueContributorsArray);
  }, []);

  return <div className={[styles.contributors, styles.section_padding].join(' ')}>
    <div className={styles.uptane_contributors}>
      <h1>Uptane Contributors</h1>
    </div>
    <div className={styles.contributor_list}>
      {
        allContributors.map((contributor) => (
          <a className={styles.contributor} href={contributor?.html_url} target="_blank">
            <img src={contributor?.avatar_url} />
          </a>
        ))
      }
    </div>
  </div>
}

export default Contributors;