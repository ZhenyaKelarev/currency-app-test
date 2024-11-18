import { useState } from "react"
import { useQuery } from "react-query"
import { fetchCurrencies } from "@/api/exchangeApi"
import CurrencyCard from "@/components/CurrencyCard"
import Pagination from "@/components/Pagination"

const Home = () => {
  const { data: currencies = [], isLoading } = useQuery("currencies", () =>
    fetchCurrencies()
  )
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10
  const paginatedData = currencies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div>
      {isLoading ? (
        <p>Завантаження...</p>
      ) : (
        <>
          {paginatedData.map((currency: any) => (
            <CurrencyCard key={currency.r030} currency={currency} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(currencies.length / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  )
}

export default Home
