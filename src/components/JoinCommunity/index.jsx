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
                <h1>Join the Uptane Community</h1>
                <p>Join the ever-growing uptane community for updates, support, and collaboration.</p>
            </div>
            <div className={styles.community_links}>
                <div className={styles.links}>
                    {/* <LinkCard link="#" title="Slack" light="img/community_links/slack.svg" dark="img/community_links/slack.svg" /> */}
                    <LinkCard link="https://discord.gg/uWyT6gDCqx" title="Discord" light="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAeJJREFUSEvdlU9O20AUxr83WMqycALCDcLCSF0lPQHcoFnG3RD2xQzmAGRVh505QckN0lWlGokewZygYVWQzLzqGduM/xAJUljg5Yzn/cbf971nwis/9Mr18Y4BY321/tekfUUYMGE21e7cltP7ermHNe4bxvwscGdPSd2QSArf8v0pMe8BWH84yAmYkkoR4i5A3XxtAUIUHrsHdVAD8MWPNQNHLzKfcRCeuBP7bAUw0j+7ZJyrx5s/G7PoKGdrorcXxckKwPN/RQB9fnZZ6wABx98CVz8BiIX8YRWA+BUGO1sNQJYKxd9bit8sgbbuscKnInWlRCP/ckLg/QogNy33RmK6me9fs0oHU/0x8Q7jMQinNWNLmUqA58dSoG+/GAautW/7w+dhsDMs3vX8mGtf/iMM3IGs2YCG/h3lbBSJGPnxBQG7WVcAs2ngSp9A+ubOpH+qgEcfbED9FlLpwhAiAnoElMnIIdIvvxVjCEIGa/v65YAV4lTI+4aAhzSIDHkfcAIozWyIiMRQmTtligAkzBxlRpKMlnIu3RAwKZqtZVSsaaubrzvK6dmtb6uWGyxDMLuUmA+VjiW+rZ1cLErulXGGRmFeH9N1W6RBSXHPqDSyCy8FrOBt4+g7/mX+L5n+AUAhwxkQhpi9AAAAAElFTkSuQmCC" dark="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAeJJREFUSEvdlU9O20AUxr83WMqycALCDcLCSF0lPQHcoFnG3RD2xQzmAGRVh505QckN0lWlGokewZygYVWQzLzqGduM/xAJUljg5Yzn/cbf971nwis/9Mr18Y4BY321/tekfUUYMGE21e7cltP7ermHNe4bxvwscGdPSd2QSArf8v0pMe8BWH84yAmYkkoR4i5A3XxtAUIUHrsHdVAD8MWPNQNHLzKfcRCeuBP7bAUw0j+7ZJyrx5s/G7PoKGdrorcXxckKwPN/RQB9fnZZ6wABx98CVz8BiIX8YRWA+BUGO1sNQJYKxd9bit8sgbbuscKnInWlRCP/ckLg/QogNy33RmK6me9fs0oHU/0x8Q7jMQinNWNLmUqA58dSoG+/GAautW/7w+dhsDMs3vX8mGtf/iMM3IGs2YCG/h3lbBSJGPnxBQG7WVcAs2ngSp9A+ubOpH+qgEcfbED9FlLpwhAiAnoElMnIIdIvvxVjCEIGa/v65YAV4lTI+4aAhzSIDHkfcAIozWyIiMRQmTtligAkzBxlRpKMlnIu3RAwKZqtZVSsaaubrzvK6dmtb6uWGyxDMLuUmA+VjiW+rZ1cLErulXGGRmFeH9N1W6RBSXHPqDSyCy8FrOBt4+g7/mX+L5n+AUAhwxkQhpi9AAAAAElFTkSuQmCC" />
                    {/* <LinkCard link="#" title="Twitter" light="img/community_links/twitter.svg" dark="img/community_links/twitter.svg" /> */}
                </div>
                <div className={styles.links}>
                    {/* <LinkCard link="#" title="Slack" light="img/community_links/slack.svg" dark="img/community_links/slack.svg" /> */}
                    <LinkCard link="https://github.com/uptane" title="GitHub" light="img/community_links/github_light.svg" dark="img/community_links/github_dark.svg" />
                    {/* <LinkCard link="#" title="Twitter" light="img/community_links/twitter.svg" dark="img/community_links/twitter.svg" /> */}
                </div>
                <div className={styles.add_to_calendar}>
                    <div className={styles.calendar_heading}>
                        <h2>Uptane Community Call</h2>
                        <h4>Biweekly Friday of every month | 5:30 PM EDT</h4>
                    </div>
                    <div className={styles.calendar_link}>
                        <Link class="button button--secondary button--lg" onClick={handleAddToCalendarClick}>Add to Calendar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
