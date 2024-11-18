import { Link } from "react-router-dom"

interface Currency {
  r030: number
  txt: string
  rate: number
  cc: string
}

const CurrencyCard: React.FC<{ currency: Currency }> = ({ currency }) => (
  <div>
    <p>
      {currency.txt} ({currency.cc})
    </p>
    <p>Курс: {currency.rate}</p>
    <Link to={`/edit/${currency.r030}`}>Редагувати</Link>
  </div>
)

export default CurrencyCard
