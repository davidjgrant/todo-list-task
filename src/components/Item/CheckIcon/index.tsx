import React from 'react';

export const CheckIcon = ({ isChecked }: { isChecked: boolean }) => {
  return (
    <div
      className={`w-6 h-6 rounded-full flex items-center justify-center hover:outline-4 ${
        isChecked
          ? 'bg-blue-500'
          : 'bg-white shadow-sm hover:border-blue-500/10 hover:border-2'
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.22917 12.242L13.8654 6.62663C13.9754 6.51658 14.0983 6.46369 14.234 6.46796C14.3697 6.47224 14.4952 6.53207 14.6106 6.64746C14.726 6.76283 14.7836 6.88703 14.7836 7.02004C14.7836 7.15304 14.726 7.27724 14.6106 7.39263L8.71473 13.2884C8.57798 13.4252 8.4196 13.4936 8.23959 13.4936C8.05957 13.4936 7.90119 13.4252 7.76444 13.2884L5.38944 10.9135C5.2794 10.8034 5.2217 10.6806 5.21636 10.5449C5.21102 10.4092 5.26604 10.2837 5.38142 10.1683C5.49681 10.0529 5.621 9.99521 5.754 9.99521C5.88702 9.99521 6.01121 10.0529 6.12659 10.1683L8.22917 12.242Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};
