import { Link } from "react-router-dom"

interface Currency {
  r030: number
  txt: string
  rate: number
  cc: string
}

const CurrencyCard: React.FC<{ currency: Currency }> = ({ currency }) => (
  <div className="currency-card">
    <div className="currency-card__content">
      <h3 className="currency-card__title">
        {currency.txt}{" "}
        <span className="currency-card__code">({currency.cc})</span>
      </h3>
      <p className="currency-card__rate">
        Курс: <strong>{currency.rate}</strong>
      </p>
    </div>
    <Link to={`/edit/${currency.r030}`} className="currency-card__edit-button">
      Редагувати
    </Link>
  </div>
)

export default CurrencyCard
