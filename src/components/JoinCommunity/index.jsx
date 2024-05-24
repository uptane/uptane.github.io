import React from 'react';
import styles from './styles.module.css';
import LinkCard from './community_links';
import Link from '@docusaurus/Link';

export default function Community() {
    const icsFilePath = 'assets/meeting/invite.ics';
    const handleAddToCalendarClick = () => {
        // Create an anchor element to trigger the download
        const a = document.createElement('a');
        a.href = icsFilePath;
        a.download = 'uptane_meeting.ics'; // Set the desired filename
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className={[styles.community, styles.section_padding].join(' ')}>
            <div className={styles.join_community}>
                <h1>Join the Uptane community</h1>
                <p>Join the ever-growing Uptane community for updates, support, and collaboration.</p>
            </div>
            <div className={styles.community_links}>
                <div className={styles.links}>
                    {/* <LinkCard link="#" title="Slack" light="img/community_links/slack.svg" dark="img/community_links/slack.svg" /> */}
                    <LinkCard link="https://github.com/uptane" title="GitHub" light="img/community_links/github_light.svg" dark="img/community_links/github_dark.svg" />
                    <LinkCard link="https://discord.gg/uWyT6gDCqx" title="Discord" light="img/community_links/discord.svg" dark="img/community_links/discord.svg" />
                    <LinkCard link="https://www.linkedin.com/company/uptane/" title="Linkedin" light="img/community_links/linkedin_logo.svg" dark="img/community_links/linkedin_logo.svg" />
                    {/* <LinkCard link="#" title="Twitter" light="img/community_links/twitter.svg" dark="img/community_links/twitter.svg" /> */}
                </div>
                <div className={styles.add_to_calendar}>
                    <div className={styles.calendar_heading}>
                        <h2>Uptane Standards Committee Meeting</h2>
                        <h4>Biweekly Tuesdays | 10:00 AM ET</h4>
                    </div>
                    <div className={styles.calendar_link}>
                        <Link class="button button--secondary button--lg" onClick={handleAddToCalendarClick}>Add to Calendar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}