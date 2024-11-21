import React, { useState } from 'react';
// 환율 관련 변수

// exchangeRate (환율)
// krwToUsdRate (한화에서 USD로의 환율)
// conversionRate (환율 변환율)

// 금액 관련 변수

// amountInKrw (한화 금액)
// amountInUsd (미국 달러 금액)
// convertedAmount (변환된 금액)
// krw (한화 금액 간단히)
// usd (미국 달러 금액 간단히)
// 함수 이름 추천

// 환율 계산 함수

// convertKrwToUsd() (한화를 달러로 변환)
// calculateUsd() (달러 계산)
// exchangeCurrency() (통화 변환)

function TestTempEx(props) {
  const [unit, setUnit] = useState("krwToUsdRate")
  const [currencyRate, setCurrencyRate] = useState("")
  const convertedAmount = (unit === "krwToUsdRate")
    ? (currencyRate) 
    : (currencyRate)


  return (
    <div>
      <h2>환율 계산기</h2>
      <p>Converted : {currencyRate ? convertedAmount : "--"}
        {unit === "krwToUsdRate" ? " 원" : " $"}
      </p>
      <TestTempInput
        value={currencyRate}
        unit={unit}
        onChange={setCurrencyRate}
      />
      <TestTempRadio
      unit={unit}
      onUnitChange={setUnit}
      />
    </div>
  );
}

export default TestTempEx;