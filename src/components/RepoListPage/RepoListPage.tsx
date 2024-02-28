import { useState } from 'react';
import { useGetReposQuery } from '../../api/fetchGithubRepos';
import useStarredRepoStore from '../../store/useStarredRepoStore';
import Filters from '../Filters/Filters';
import PaginatedRepos from '../PaginatedRepos/PaginatedRepos';
import { PageContainer, Flex } from './styles';
import getLastWeekDate from '../../utils/lastWeekDate';
import { updateStarredStatusInRepos } from '../../utils/updateStarredStatusInRepos';

const lastWeekDate = getLastWeekDate();

const RepoListPage = () => {
    // State to manage selected filtering options
    const [filters, setFilters] = useState<{
        starred: boolean;
        languages: string[];
    }>({
        starred: false,
        languages: [],
    });
    // State to manage offset for pagination
    const [repoOffset, setRepoOffset] = useState(0);

    const starredRepos = useStarredRepoStore((state) => state.repos);
    const { data, error, isLoading } = useGetReposQuery(lastWeekDate);

    if (isLoading) {
        return <Flex>Loading...</Flex>;
    }

    if (error || !data) {
        const errorMessage =
            error && 'message' in error ? error.message : 'No data available';
        return <Flex>{errorMessage}</Flex>;
    }

    let updatedRepos = updateStarredStatusInRepos(data, starredRepos);
    const filteredLanguages = updatedRepos.reduce((languages, repo) => {
        if (repo.language && !languages.includes(repo.language)) {
            languages.push(repo.language);
        }
        return languages;
    }, [] as string[]);

    if (filters.starred) {
        updatedRepos = updatedRepos.filter((repo) => repo.starred);
    }

    if (filters.languages.length) {
        updatedRepos = updatedRepos.filter((repo) =>
            filters.languages.includes(repo.language)
        );
    }

    const filterStarredRepos = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepoOffset(0);

        const { name, checked } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }));
    };

    const filterReposByLanguage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, checked } = event.target;
        if (checked) {
            setRepoOffset(0);
            setFilters((prevFilters) => ({
                ...prevFilters,
                languages: [...prevFilters.languages, name],
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                languages: prevFilters.languages.filter(
                    (lang) => lang !== name
                ),
            }));
        }
    };

    return (
        <PageContainer>
            <Filters
                filterStarredRepos={filterStarredRepos}
                filters={filters}
                filteredLanguages={filteredLanguages}
                filterReposByLanguage={filterReposByLanguage}
            />
            <PaginatedRepos
                reposPerPage={5}
                repos={updatedRepos}
                repoOffset={repoOffset}
                setRepoOffset={setRepoOffset}
            />
        </PageContainer>
    );
};

export default RepoListPage;
