import { FilterBox, Heading, InputGroup, Label, SubHeading } from './styles';

type FiltersProps = {
    filterStarredRepos: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filters: { starred: boolean; languages: string[] };
    filteredLanguages: string[];
    filterReposByLanguage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filters = ({
    filterStarredRepos,
    filters,
    filteredLanguages,
    filterReposByLanguage,
}: FiltersProps) => {
    return (
        <FilterBox>
            <Heading>Filters</Heading>
            <InputGroup>
                <input
                    type="checkbox"
                    id="starred"
                    onChange={filterStarredRepos}
                    name="starred"
                    checked={filters.starred}
                />
                <Label htmlFor="starred">Starred Repos</Label>
            </InputGroup>
            <SubHeading>Languages</SubHeading>
            {filteredLanguages.map((language) => (
                <InputGroup key={language}>
                    <input
                        type="checkbox"
                        id={language}
                        onChange={filterReposByLanguage}
                        name={language}
                        checked={filters.languages.includes(language)}
                    />
                    <Label htmlFor={language}>{language}</Label>
                </InputGroup>
            ))}
        </FilterBox>
    );
};

export default Filters;
