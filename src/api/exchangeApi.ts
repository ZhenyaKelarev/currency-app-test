import axios from "axios"

const BASE_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange"

export const fetchCurrencies = async (date: string | null = null) => {
  console.log("dat request", date)
  const formattedDate = date?.replace(/-/g, "")
  const url = date
    ? `${BASE_URL}?date=${formattedDate}&json`
    : `${BASE_URL}?json`
  const response = await axios.get(url)
  return response.data
}
