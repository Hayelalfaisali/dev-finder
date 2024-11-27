import { FormEvent, useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

interface SearchBarProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card flex items-center gap-2">
      <HiMagnifyingGlass className="w-6 h-6 text-primary-light" />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub username..."
        className="input flex-1"
      />
      <button
        type="submit"
        disabled={isLoading || !username.trim()}
        className="btn disabled:opacity-50"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};
