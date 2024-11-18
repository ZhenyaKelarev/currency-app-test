import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { useCurrencyStore } from "@/store/currencyStore"

const EditCurrency = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addEditedCurrency, editedCurrencies } = useCurrencyStore()
  const location = useLocation()

  const currency = location.state as {
    r030: number
    txt: string
    rate: number
    cc: string
  }

  const [rate, setRate] = useState<number>(currency?.rate || 0)

  const handleSave = () => {
    if (!id) return

    const existingCurrencyIndex = editedCurrencies.findIndex(
      (item) => item.r030 === Number(id)
    )

    const updatedCurrency = {
      r030: Number(id),
      txt: currency.txt,
      rate,
      cc: currency.cc,
      exchangedate: "2023-07-03",
    }

    if (existingCurrencyIndex !== -1) {
      const updatedCurrencies = [...editedCurrencies]
      updatedCurrencies[existingCurrencyIndex] = updatedCurrency
      addEditedCurrency(updatedCurrencies)
    } else {
      addEditedCurrency([...editedCurrencies, updatedCurrency])
    }

    navigate("/edited")
  }

  return (
    <div className="edit-currency">
      <h2 className="edit-currency__title">Редагувати валюту (ID: {id})</h2>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        placeholder="Новий курс"
        className="edit-currency__input"
      />
      <div className="edit-currency__actions">
        <button onClick={handleSave} className="edit-currency__button save">
          Зберегти
        </button>
        <button
          onClick={() => navigate(-1)}
          className="edit-currency__button back"
        >
          Назад
        </button>
      </div>
    </div>
  )
}

export default EditCurrency
