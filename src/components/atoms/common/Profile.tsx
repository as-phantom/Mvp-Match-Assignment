import React from 'react';
import { IUser } from 'src/interfaces/user.interface';

interface Props {
  user: IUser;
}

const Profile: React.FC<Props> = ({ user }) => {
  const initials: string = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <div className="flex cursor-pointer items-center gap-3">
      <div className="bg-mvp-yellow-100 rounded-0 flex h-[42px] w-[42px] items-center justify-center p-2">
        <p className="text-2xl font-bold leading-none text-white">{initials}</p>
      </div>

      <p className="text-mvp-blue-300 font-bold">
        {user.firstName} {user.lastName}
      </p>
    </div>
  );
};

export default Profile;
