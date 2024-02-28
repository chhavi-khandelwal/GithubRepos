import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type JSONResponse = Omit<GithubRepo, 'starred'>[];
type Response = {
    id: number;
    description: string;
    name: string;
    starred: boolean;
    visibility: string;
    language: string;
    html_url: string;
    stargazers_count: number;
};

export const updateStarredStatusinRepos = (
    repos: JSONResponse,
    starredRepos: number[]
) => {
    return repos.map((repo) => {
        const starred = starredRepos.includes(repo.id);
        return { ...repo, starred };
    });
};

//keepUnusedDataFor can be used to refresh data
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
    endpoints: (builder) => ({
        getRepos: builder.query({
            query: (date) =>
                `search/repositories?q=created:${date}&sort=stars&order=desc`,
            transformResponse: (response: { items: Response[] }) => {
                return response.items.map((repo) => ({
                    id: repo.id,
                    description: repo.description,
                    name: repo.name,
                    visibility: repo.visibility,
                    language: repo.language,
                    noOfStars: repo.stargazers_count,
                    githubUrl: repo.html_url,
                }));
            },
        }),
    }),
});

export const { useGetReposQuery } = api;
