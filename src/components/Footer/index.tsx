import React from 'react';
import { IconButton } from '../Buttons';
import { FacebookIcon, XIcon } from '../ui/icons';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-start gap-3">
      <h3 className="text-gray-400">Follow us</h3>
      <div className="flex gap-3 items-center justify-center">
        <IconButton icon={<FacebookIcon />} />
        <IconButton icon={<XIcon />} />
      </div>
    </footer>
  );
};
