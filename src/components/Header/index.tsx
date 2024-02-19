import React from 'react';
import { Avatar } from '../ui/Avatar';
import AvatarImage from '@/../public/Avatar.png';
import { IconButton } from '../Buttons';
import { ShareIcon } from '../ui/icons';

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-6 mb-6">
      <Avatar image={AvatarImage} fallBack={'Aa'} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl">Home</h1>
        <p className="text-gray-400">Created 2 days ago</p>
      </div>
      <IconButton icon={<ShareIcon />} />
    </header>
  );
};
