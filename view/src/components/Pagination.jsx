import React from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const Pagination = ({ total_pages, setPage, page }) => {
  const handlePageChange = (updatedPage) => {
    setPage(updatedPage);
    window.scroll(0, 0);
  };

  return (
    <div className='flex items-center justify-center gap-8 text-white py-8'>
      <button
        onClick={() => handlePageChange(page - 1)}
        className='disabled:text-white/25'
        disabled={page === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />
      </button>

      <h2 color='gray' className='font-normal'>
        Page <strong>{page}</strong> of <strong>{total_pages}</strong>
      </h2>

      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === total_pages}
        className='disabled:text-white/25'
      >
        <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
      </button>
    </div>
  );
};

export default Pagination;
