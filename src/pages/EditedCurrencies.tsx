import { useState } from "react"
import { useCurrencyStore } from "@/store/currencyStore"
import CurrencyCard from "@/components/CurrencyCard"
import Pagination from "@/components/Pagination"

const EditedCurrencies = () => {
  const { editedCurrencies } = useCurrencyStore()
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10
  const totalPages = Math.ceil(editedCurrencies.length / itemsPerPage)

  const paginatedData = editedCurrencies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div>
      <h1>Змінені курси</h1>
      {editedCurrencies.length === 0 ? (
        <p>Немає змінених курсів.</p>
      ) : (
        <>
          <div>
            {paginatedData.map((currency) => (
              <CurrencyCard key={currency.r030} currency={currency} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  )
}

export default EditedCurrencies
