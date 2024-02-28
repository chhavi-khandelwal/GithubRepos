import RepoTile from '../RepoTile/RepoTile';
import { RepoListContainer } from './styles';

type RepoListProps = {
    repos: GithubRepo[];
};

const RepoList = ({ repos }: RepoListProps) => {
    return (
        <RepoListContainer>
            {repos.map((repo) => (
                <RepoTile
                    key={repo.id}
                    id={repo.id}
                    name={repo.name}
                    starred={repo.starred}
                    description={repo.description}
                    language={repo.language}
                    githubUrl={repo.githubUrl}
                    noOfStars={repo.noOfStars}
                />
            ))}
        </RepoListContainer>
    );
};
export default RepoList;
