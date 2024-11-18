import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCurrencyStore } from "../store/currencyStore"

const EditCurrency = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addEditedCurrency } = useCurrencyStore()
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
