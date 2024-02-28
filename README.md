# Description

Github shows list of popular github repos from last week which can be starred and filtered via starred status & language. One can update star status for each repo.

# Setup
 - `yarn install` To install dependencies

 - `yarn run dev` Runs the app in the development mode.

 - `yarn test`  To run tests


# Directory Structure of components/containers

						App
						|
					RepoListPage
					|          |
				Filters    	PaginatedRepos
					|           |		|
			input checkbox   Paginate  RepoList
											|		
										RepoTile
										|		|
									Detail	IconButton + Star

# Architecture
 - components: All the folders of react components used in the app. Each folder contains a tsx file for rendering and a ts file for styled components + test files for testing the functionality of the game.
 - store: used `ZUSTAND` to support localstorage for storing starred repo ids. `useStarredRepoStore` is a hook responsible for any update and re-rendering when starred status of repo is changed.
	Benefits of using zustand
	A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks, isn't boilerplatey or opinionated.
 - api: Uses rtk query to fetch list of github repos
 - Testing: Unit tests for RepoListPage added which tests rendering of repo list and filtering based on languages.

# Special Mention
 - Added zustand store for localstorage usage for starred repos
 - Used rtk for caching to avoid re-fetching.
 - Added language filter - Repos can be filtered by language
 - Used React Paginate for pagination and optimized update
 - Responsive UI

# Improvements
 - Improved loading state for repos using UI skeletons
 - Introduction of gql for parameter aliasing
 - Improved UX for Pagination
 - Extraction of styleguide components for re-usability
 - Unit test cases for all components
 - Advanced Optimization: Introduction of Virtualized list of repos(includes BE involvement)

# Third-party libraries
 - zustand
 - styled-components
 - @reduxjs/toolkit
 - react-redux
 - react-paginate							
							