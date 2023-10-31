import { devices } from '@playwright/test';

const config = {
    webServer: {
        port: 3000,
        command: 'yarn docusaurus serve',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
};

export default config;