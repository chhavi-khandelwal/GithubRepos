import { render, screen, fireEvent } from '@testing-library/react';
import RepoListPage from './RepoListPage';
import '@testing-library/jest-dom';
import useStarredRepoStore from '../../store/useStarredRepoStore';
import { useGetReposQuery } from '../../api/fetchGithubRepos';

const repoList = [
    {
        id: 1,
        name: 'Repo 1',
        starred: true,
        language: 'JavaScript',
        noOfStars: 20,
        githubUrl: 'https://abc',
    },
    {
        id: 2,
        name: 'Repo 2',
        starred: false,
        language: 'TypeScript',
        noOfStars: 20,
        githubUrl: 'https://def',
    },
];

// Mocking the useGetReposQuery hook
jest.mock('../../api/fetchGithubRepos', () => ({
    useGetReposQuery: jest.fn(() => ({
        data: [],
        error: null,
        isLoading: false,
    })),
}));

// Mocking the useStarredRepoStore hook
jest.mock('../../store/useStarredRepoStore', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        repos: [],
    })),
}));

describe('RepoListPage component', () => {
    test('renders loading state', () => {
        (useGetReposQuery as jest.Mock).mockReturnValue({
            data: [],
            error: null,
            isLoading: true,
        });
        render(<RepoListPage />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders error state', () => {
        const errorMessage = 'Test error message';

        (useGetReposQuery as jest.Mock).mockReturnValue({
            data: [],
            error: { message: errorMessage },
            isLoading: false,
        });
        render(<RepoListPage />);
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    test('renders filtered repositories', () => {
        (useGetReposQuery as jest.Mock).mockReturnValue({
            data: repoList,
            error: null,
            isLoading: false,
        });
        (useStarredRepoStore as unknown as jest.Mock).mockReturnValue([1]);

        render(<RepoListPage />);

        expect(screen.getByText('Repo 1')).toBeInTheDocument();
        expect(screen.getByText('Repo 2')).toBeInTheDocument();
    });

    test('filters repositories by language', () => {
        (useGetReposQuery as jest.Mock).mockReturnValue({
            data: repoList,
            error: null,
            isLoading: false,
        });
        (useStarredRepoStore as unknown as jest.Mock).mockReturnValue([1]);

        render(<RepoListPage />);

        const javascriptCheckbox = screen.getByLabelText('JavaScript');
        fireEvent.click(javascriptCheckbox);

        expect(javascriptCheckbox).toBeChecked();
        expect(screen.queryByText('Repo 1')).toBeInTheDocument();
        expect(screen.queryByText('Repo 2')).not.toBeInTheDocument();
    });
});
