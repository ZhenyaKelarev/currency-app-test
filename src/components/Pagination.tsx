const Pagination: React.FC<{
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}> = ({ currentPage, totalPages, onPageChange }) => (
  <div>
    {[...Array(totalPages)].map((_, idx) => (
      <button
        key={idx}
        disabled={currentPage === idx + 1}
        onClick={() => onPageChange(idx + 1)}
      >
        {idx + 1}
      </button>
    ))}
  </div>
)

export default Pagination
