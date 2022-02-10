import React from 'react';
import ProfileInitials from 'src/components/atoms/common/ProfileInitials';
import { IUser } from 'src/interfaces/user.interface';

interface Props {
  user: IUser;
}

const Profile: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex cursor-pointer items-center gap-3">
      <ProfileInitials user={user} />

      <strong className="text-mvp-blue-300">
        {user.firstName} {user.lastName}
      </strong>
    </div>
  );
};

export default Profile;
