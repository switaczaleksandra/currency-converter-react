import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Button, Field, Header, Info, LabelText } from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Header> <strong>Przelicznik walut</strong></Header>
      <p>
        <label>
          <LabelText>
            Kwota w zł*:
          </LabelText>
          <Field
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
          <LabelText>
            Wybierz walutę:
          </LabelText>
          <Field
            as="select"
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
          </Field>
        </label>
      </p>
      <p>
        <Button>Przelicz!</Button>
      </p>
      <Info> Kursy pochodzą ze strony <strong>walutomat.pl</strong> na dzień 24.03.2023 r.</Info>
      <Result result={result} />
    </form>
  );
};