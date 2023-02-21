import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import {
  SummaryContainer,
  SummaryCardIncomeAndExits,
  SummaryCardTotal,
} from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCardIncomeAndExits>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 1000,00</strong>
      </SummaryCardIncomeAndExits>

      <SummaryCardIncomeAndExits>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 500,00</strong>
      </SummaryCardIncomeAndExits>

      <SummaryCardTotal>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 500,00</strong>
      </SummaryCardTotal>
    </SummaryContainer>
  );
}
