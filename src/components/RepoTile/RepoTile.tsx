import useStarredRepoStore from '../../store/useStarredRepoStore';
import IconButton from '../IconButton/IconButton';
import Star from '../StarIcon/Star';
import {
    BottomPanel,
    Description,
    DetailSection,
    Heading,
    Language,
    RepoTileContainer,
    StarContainer,
    StarCount,
    StarText,
} from './styles';

type RepoTileProps = GithubRepo;
const RepoTile = ({
    id,
    description,
    name,
    language,
    noOfStars,
    githubUrl,
    starred,
}: RepoTileProps) => {
    const toggleStarredStatusForRepo = useStarredRepoStore(
        (state) => state.toggleStarredStatusForRepo
    );

    const toggleStarredStatus = (id: number, starred: boolean) => {
        toggleStarredStatusForRepo(id, starred);
    };

    return (
        <RepoTileContainer>
            <DetailSection>
                <Heading>
                    <a href={githubUrl} aria-label={`View repository: ${name}`}>
                        {name}
                    </a>
                </Heading>
                <Description>{description}</Description>
                <BottomPanel>
                    {language && (
                        <Language
                            aria-label={`Repository language: ${language}`}
                        >
                            {language}
                        </Language>
                    )}
                    {noOfStars && (
                        <StarCount>
                            <Star size="18"></Star>
                            <span>{noOfStars}</span>
                        </StarCount>
                    )}
                </BottomPanel>
            </DetailSection>
            <StarContainer>
                <IconButton
                    onClick={() => toggleStarredStatus(id, starred)}
                    ariaLabel={
                        starred ? 'Unstar repository' : 'Star repository'
                    }
                >
                    <>
                        <Star fillColor={starred} size="18"></Star>
                        <StarText>{starred ? 'Starred' : 'Star'}</StarText>
                    </>
                </IconButton>
            </StarContainer>
        </RepoTileContainer>
    );
};
export default RepoTile;
