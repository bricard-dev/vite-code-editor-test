import React from 'react';

export default function ButtonTab({ id, toggleTab, buttonContent, imgURL }) {
  return (
    <button
      className="flex items-center px-5 py-3 hover:bg-slate-600 focus:bg-slate-600 outline-none"
      onClick={toggleTab}
    >
      <img className="w-5" src={imgURL} />
      <span className="ml-3 text-slate-100 text-md">{buttonContent}</span>
    </button>
  );
}
