import React, { useState } from "react";
import { Result } from "./Result";
import {
  StyledForm,
  Button,
  Field,
  Header,
  Info,
  LabelText,
  Loading,
  Failure
} from "./styled";

import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
    });
  }

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Header>Przelicznik walut</Header>
      {ratesData.state === "loading"
        ? (
          <Loading>
            Proszę zaczekać... <br />Ładuję kursy walut z Europejskiego Banku Centralnego
          </Loading>
        )
        : (
          ratesData.state === "error" ? (
            <Failure>
              Hmm... Coś poszło nie tak 🥸 Sprawdź, czy masz połączenie z internetem
            </Failure>
          ) : (
            <>
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
                    {Object.keys(ratesData.rates).map
                      (((currency) => (
                        <option
                          key={currency}
                          value={currency}
                        >
                          {currency}
                        </option>
                      )))}
                  </Field>
                </label>
              </p>
              <p>
                <Button>Przelicz!</Button>
              </p>
              <Info> Kursy walut pobierane są z Europejskiego Banku Centralnego. <br />
                Aktualne na dzień:&nbsp;<strong>{ratesData.date}</strong>
                </Info>
                <Result result={result} />
            </>
          )
          )}
    </StyledForm>
  );
};