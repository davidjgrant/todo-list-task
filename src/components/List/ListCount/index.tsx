import React from 'react';

export const ListCount = ({ curr, max }: { curr: number; max: number }) => {
  return (
    <div className="flex gap-1 justify-end text-right items-center text-gray-400 pl-3">
      <span>{curr}</span> / <span>{max}</span>
    </div>
  );
};
