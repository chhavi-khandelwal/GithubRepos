import RepoList from '../RepoList/RepoList';
import { useState } from 'react';
import { Paginate, PaginatedContainer } from './styles';

type PaginatedReposProps = {
    reposPerPage: number;
    repos: GithubRepo[];
};

function PaginatedRepos({ reposPerPage, repos }: PaginatedReposProps) {
    // Here we use repo offsets; we could also use page offsets
    // following the API or data you're working with.
    const [repoOffset, setItemOffset] = useState(0);

    // Simulate fetching repos from another resources.
    // (This could be repos from props; or repos loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = repoOffset + reposPerPage;
    const currentItems = repos.slice(repoOffset, endOffset);
    const pageCount = Math.ceil(repos.length / reposPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * reposPerPage) % repos.length;
        setItemOffset(newOffset);
    };

    return (
        <PaginatedContainer>
            {currentItems.length ? (
                <RepoList repos={currentItems} />
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
            />
        </PaginatedContainer>
    );
}

export default PaginatedRepos;
