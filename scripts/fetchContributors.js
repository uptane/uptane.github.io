const axios = require('axios');
const fs = require('fs');

const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

const getRepositories = async () => {
    const url = `https://api.github.com/orgs/uptane/repos`;
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}

const getContributors = async (repoName) => {
    const url = `https://api.github.com/repos/uptane/${repoName}/contributors`;
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}

const fetchContributors = async () => {
    try {
        const repositories = await getRepositories();

        const contributorsList = [];

        for (const repo of repositories) {
            const contributors = await getContributors(repo.name);
            contributorsList.push({ repository: repo.name, contributors });
        }

        const jsonContent = JSON.stringify(contributorsList, null, 2);
        fs.writeFileSync('./contributors.json', jsonContent);
        console.log('SUCCESS :: scripts/fetchContributors.js :: Contributors list saved to contributors.json');
    } catch (error) {
        console.error('ERROR :: scripts/fetchContributors.js :: ', error.message);
    }
}

fetchContributors();