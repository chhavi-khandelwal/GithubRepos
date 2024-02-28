type JSONResponse = Omit<GithubRepo, 'starred'>[];

export const updateStarredStatusInRepos = (
    repos: JSONResponse,
    starredRepos: number[]
) => {
    return repos.map((repo) => {
        const starred = starredRepos.includes(repo.id);
        return { ...repo, starred };
    });
};
