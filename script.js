// GitHub Repos Fetch
async function fetchGitHubRepos() {
    const response = await fetch('https://api.github.com/users/satya-ctrl/repos');
    const repos = await response.json();

    const repoContainer = document.getElementById('github-repos');
    repoContainer.innerHTML = '';

    repos.forEach(repo => {
        repoContainer.innerHTML += `
            <div class="repo-card">
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available.'}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            </div>
        `;
    });
}

// LeetCode Stats Fetch
async function fetchLeetCodeStats() {
    const response = await fetch('https://leetcode-stats-api.herokuapp.com/satya-ctrl');
    const data = await response.json();

    const leetCodeStats = `
        <p><strong>Total Problems Solved:</strong> ${data.totalSolved}</p>
        <p><strong>Easy:</strong> ${data.easySolved} | <strong>Medium:</strong> ${data.mediumSolved} | <strong>Hard:</strong> ${data.hardSolved}</p>
        <p><strong>Ranking:</strong> ${data.ranking}</p>
    `;
    document.getElementById('leetcode-stats').innerHTML = leetCodeStats;
}

// Fetch data on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubRepos();
    fetchLeetCodeStats();
});
