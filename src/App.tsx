import { ApiProvider } from '@reduxjs/toolkit/query/react';
import './App.css';
import { api } from './api/fetchGithubRepos';
import RepoListPage from './components/RepoListPage/RepoListPage';

function App() {
    return (
        <ApiProvider api={api}>
            <RepoListPage />
        </ApiProvider>
    );
}

export default App;
