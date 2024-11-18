import "../styles.css"

const Pagination: React.FC<{
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}> = ({ currentPage, totalPages, onPageChange }) => (
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
