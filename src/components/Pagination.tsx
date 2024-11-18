import "@/styles.css"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => (
  <div className="pagination">
    {[...Array(totalPages)].map((_, idx) => (
      <button
        key={idx}
        className={`pagination__button ${
          currentPage === idx + 1 ? "pagination__button--active" : ""
        }`}
        disabled={currentPage === idx + 1}
        onClick={() => onPageChange(idx + 1)}
      >
        {idx + 1}
      </button>
    ))}
  </div>
)

export default Pagination
