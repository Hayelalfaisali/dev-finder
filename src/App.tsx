import { useState } from 'react';
import axios from 'axios';
import { ThemeToggle } from './components/ThemeToggle';
import { SearchBar } from './components/SearchBar';
import { UserCard } from './components/UserCard';
import type { GithubUser } from './types/github';

function App() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const searchUser = async (username: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await axios.get<GithubUser>(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setUser(null);
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError('User not found');
      } else {
        setError('Error fetching user data');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 max-w-3xl mx-auto">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">devfinder</h1>
        <ThemeToggle />
      </header>

      <main className="space-y-6">
        <SearchBar onSearch={searchUser} isLoading={isLoading} />
        
        {error && (
          <div className="card text-red-500 text-center">
            {error}
          </div>
        )}

        {user && <UserCard user={user} />}
      </main>
    </div>
  );
}

export default App;
