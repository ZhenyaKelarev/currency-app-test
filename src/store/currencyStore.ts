import { create } from "zustand"

interface Currency {
  r030: number
  txt: string
  rate: number
  cc: string
  exchangedate: string
}

interface CurrencyStore {
  editedCurrencies: Currency[]
  addEditedCurrency: (currencies: Currency[] | Currency) => void
}

export const useCurrencyStore = create<CurrencyStore>((set) => ({
  editedCurrencies: [],
  addEditedCurrency: (currencies) => {
    set((state) => {
      if (Array.isArray(currencies)) {
        return { editedCurrencies: currencies }
      }
      return { editedCurrencies: [...state.editedCurrencies, currencies] }
    })
  },
}))
