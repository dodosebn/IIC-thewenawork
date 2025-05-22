import React from 'react';

interface LoadingProps {
  onClick: () => void;
}

const Loading = () => {
  return (
    <button
      // onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
    >
      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      View Africa's Metrics
    </button>
  );
};

export default Loading;
