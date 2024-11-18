import axios from "axios"

const BASE_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange"

export const fetchCurrencies = async (date: string | null = null) => {
  const url = date ? `${BASE_URL}?date=${date}&json` : `${BASE_URL}?json`
  const response = await axios.get(url)
  return response.data
}
