import React, { ReactNode } from 'react';

export const IconButton = ({ icon }: { icon: ReactNode }) => {
  return (
    <button className="shadow-sm w-11 h-11 flex justify-center items-center rounded-full hover:border-blue-500/10 hover:border-2 bg-white">
      {icon}
    </button>
  );
};
