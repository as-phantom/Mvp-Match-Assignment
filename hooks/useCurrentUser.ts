import useUsers from 'hooks/useUsers';
import { useEffect, useState } from 'react';
import { IUser } from 'src/interfaces/user.interface';

export function useCurrentUser(): IUser | undefined {
  const [currentUser, setCurrentUser] = useState<IUser>();

  const users = useUsers();

  useEffect(() => {
    if (!users) {
      return;
    }

    const [user] = users;

    setCurrentUser(user);
  }, [users]);

  return currentUser;
}
