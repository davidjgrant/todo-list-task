import Image, { StaticImageData } from 'next/image';
import React from 'react';

export const Avatar = ({
  image,
  fallBack,
}: {
  image: StaticImageData;
  fallBack?: string;
}) => {
  return (
    <div className="rounded-full w-fit h-fit overflow-hidden">
      {image ? (
        <Image src={image} alt="avatar" width={56} height={56} />
      ) : (
        <div className="text-center flex items-center justify-center bg-red-100 text-white w-14 min-h-[56px]">
          <span>{fallBack}</span>
        </div>
      )}
    </div>
  );
};
