// src/store/currencyStore.ts
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
  addEditedCurrency: (currency: Currency) => void
}

export const useCurrencyStore = create<CurrencyStore>((set) => ({
  editedCurrencies: [],
  addEditedCurrency: (currency) =>
    set((state) => ({
      editedCurrencies: [...state.editedCurrencies, currency],
    })),
}))
