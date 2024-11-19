import React, { useState } from "react"
import Pagination from "@/components/Pagination"
import CurrencyCard from "@/components/CurrencyCard"
import { useQuery } from "react-query"
import { fetchCurrencies } from "@/api/exchangeApi"
import "@/styles.css"

interface Currency {
  r030: number
  txt: string
  rate: number
  cc: string
  exchangedate: string
}

const SearchRates = () => {
  const [date, setDate] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const {
    data: currencies = [],
    isLoading,
    refetch,
  } = useQuery(["currencies"], () => fetchCurrencies(date))

  const handleFetch = () => {
    if (date) {
      refetch()
    }
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const filteredCurrencies = currencies.filter((currency: Currency) =>
    currency.txt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const paginatedCurrencies = filteredCurrencies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="search-rates">
      <h1 className="search-rates__title">Пошук курсу валют</h1>
      <div className="search-rates__filter">
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="search-rates__date-picker"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Пошук за назвою"
          className="search-rates__search-input"
        />
        <button
          onClick={handleFetch}
          className="search-rates__fetch-button"
          disabled={!date}
        >
          Показати курси
        </button>
      </div>

      {isLoading && <p>Завантаження...</p>}

      {!isLoading && paginatedCurrencies.length > 0 && (
        <>
          <div className="search-rates__list">
            {paginatedCurrencies.map((currency: Currency) => (
              <CurrencyCard key={currency.r030} currency={currency} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredCurrencies.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {!isLoading && !filteredCurrencies.length && (
        <p>{date ? "Немає даних за обраною датою" : "Немає даних"}</p>
      )}
    </div>
  )
}

export default SearchRates
