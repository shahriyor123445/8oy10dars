

import { Pagination } from "flowbite-react";
import { useState } from "react";

export function pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={200}
        onPageChange={onPageChange}
      />
    </div>
  );
}
