import React from 'react';
import { IUser } from 'src/interfaces/user.interface';

interface Props {
  user: IUser;
}

const ProfileInitials: React.FC<Props> = ({ user }) => {
  const initials: string = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <div className="bg-mvp-yellow-100 rounded-0 flex h-[42px] w-[42px] items-center justify-center p-2">
      <strong className="text-2xl leading-none text-white">{initials}</strong>
    </div>
  );
};

export default ProfileInitials;
