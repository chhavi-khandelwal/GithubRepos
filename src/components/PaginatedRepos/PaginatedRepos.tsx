import RepoList from '../RepoList/RepoList';
import { Paginate, PaginatedContainer } from './styles';

type PaginatedReposProps = {
    reposPerPage: number;
    repos: GithubRepo[];
    repoOffset: number;
    setRepoOffset: (offset: number) => void;
};

function PaginatedRepos({
    reposPerPage,
    repos,
    repoOffset,
    setRepoOffset,
}: PaginatedReposProps) {
    // Simulate fetching repos from another resources.
    // These are repos from props
    const endOffset = repoOffset + reposPerPage;
    const currentRepos = repos.slice(repoOffset, endOffset);
    const pageCount = Math.ceil(repos.length / reposPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * reposPerPage) % repos.length;
        setRepoOffset(newOffset);
    };

    return (
        <PaginatedContainer>
            {currentRepos.length ? (
                <RepoList repos={currentRepos} />
            ) : (
                <div>No repos Found.</div>
            )}
            <Paginate
                breakLabel="..."
                nextLabel="Next>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<Previous"
                renderOnZeroPageCount={null}
                activeClassName="active"
            />
        </PaginatedContainer>
    );
}

export default PaginatedRepos;
