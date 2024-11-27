import { HiMapPin, HiLink, HiUsers, HiBuildingOffice2 } from 'react-icons/hi2';
import type { GithubUser } from '../types/github';

interface UserCardProps {
  user: GithubUser;
}

export const UserCard = ({ user }: UserCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="card">
      <div className="flex gap-6">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-24 h-24 rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">{user.name || user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light"
              >
                @{user.login}
              </a>
            </div>
            <p className="text-sm">
              Joined {formatDate(user.created_at)}
            </p>
          </div>
        </div>
      </div>

      {user.bio && (
        <p className="mt-6">{user.bio}</p>
      )}

      <div className="mt-6 grid grid-cols-3 gap-4 bg-background-light dark:bg-background-dark rounded-lg p-4">
        <div>
          <p className="text-sm">Repos</p>
          <p className="font-bold text-lg">{user.public_repos}</p>
        </div>
        <div>
          <p className="text-sm">Followers</p>
          <p className="font-bold text-lg">{user.followers}</p>
        </div>
        <div>
          <p className="text-sm">Following</p>
          <p className="font-bold text-lg">{user.following}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <HiMapPin className="w-5 h-5" />
          <span>{user.location || 'Not Available'}</span>
        </div>
        <div className="flex items-center gap-2">
          <HiUsers className="w-5 h-5" />
          <span>{user.twitter_username || 'Not Available'}</span>
        </div>
        <div className="flex items-center gap-2">
          <HiLink className="w-5 h-5" />
          <a
            href={user.blog || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={user.blog ? 'text-primary-light' : ''}
          >
            {user.blog || 'Not Available'}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <HiBuildingOffice2 className="w-5 h-5" />
          <span>{user.company || 'Not Available'}</span>
        </div>
      </div>
    </div>
  );
};
