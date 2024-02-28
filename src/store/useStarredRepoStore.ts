import { create, StateCreator } from 'zustand';
import { PersistOptions, createJSONStorage, persist } from 'zustand/middleware';

type StarredRepoStoreState = {
    repos: number[];
    toggleStarredStatusForRepo: (id: number, starred: boolean) => void;
};

type PersistStore = (
    config: StateCreator<StarredRepoStoreState>,
    options: PersistOptions<StarredRepoStoreState>
) => StateCreator<StarredRepoStoreState>;

const useStarredRepoStore = create<StarredRepoStoreState, []>(
    (persist as PersistStore)(
        (set, get): StarredRepoStoreState => ({
            repos: [],
            toggleStarredStatusForRepo: (id: number, starred: boolean) =>
                set(() => {
                    const reposFromStore = get().repos;
                    return {
                        repos: starred
                            ? reposFromStore.filter((repo) => repo !== id)
                            : [...reposFromStore, id],
                    };
                }),
        }),
        {
            name: 'starred-repo-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useStarredRepoStore;
