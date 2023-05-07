import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css"

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <legend className="form__legend"> <strong>Przelicznik walut</strong></legend>
      <p>
        <label>
          <span class="form__labelText">
            Kwota w zł*:
          </span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form__field js-amount"
            placeholder="Wpisz kwotę w zł"
            required type="number"
            step="0.01"
            min="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">
            Wybierz walutę:
          </span>
          <select
            className="form__field js-currency"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            )))}
          </select>
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz!</button>
      </p>
      <p className="form__info"> Kursy pochodzą ze strony <strong>walutomat.pl</strong> na dzień 24.03.2023 r.</p>
      <Result result={result} />
    </form>
  );
};