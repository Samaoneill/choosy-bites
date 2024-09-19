import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

import { PAGE_SIZE } from "../utils/constants";

interface PaginationProps {
  count: number;
}

function Pagination({ count }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount: number = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex flex-col items-center justify-between gap-4 text-white lg:flex-row">
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="hover:text-slate-200 flex items-center justify-center text-white"
        >
          <MdKeyboardArrowLeft /> <span>Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="hover:text-slate-200 flex items-center justify-center text-white"
        >
          <span>Next</span> <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
