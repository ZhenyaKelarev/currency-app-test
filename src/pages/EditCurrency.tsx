import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCurrencyStore } from "../store/currencyStore"

const EditCurrency = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { editedCurrencies, addEditedCurrency } = useCurrencyStore()
  const [rate, setRate] = useState<number>(0)

  const handleSave = () => {
    if (!id) return

    const currency = {
      r030: Number(id),
      txt: "Валюта",
      rate,
      cc: "UAH",
      exchangedate: "2023-07-03",
    }
    addEditedCurrency(currency)
    navigate("/edited")
  }

  return (
    <div>
      <h2>Редагувати валюту (ID: {id})</h2>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        placeholder="Новий курс"
      />
      <button onClick={handleSave}>Зберегти</button>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

export default EditCurrency
