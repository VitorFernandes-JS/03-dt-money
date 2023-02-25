import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useTransactionContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";
import {
  SummaryContainer,
  SummaryCardIncomeAndExits,
  SummaryCardTotal,
} from "./styles";

export function Summary() {
  const { transactions } = useTransactionContext();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    { income: 0, outcome: 0, total: 0 }
  );

  return (
    <SummaryContainer>
      <SummaryCardIncomeAndExits>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCardIncomeAndExits>

      <SummaryCardIncomeAndExits>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCardIncomeAndExits>

      <SummaryCardTotal>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCardTotal>
    </SummaryContainer>
  );
}
