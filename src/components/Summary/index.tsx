import incomeImg from '/assets/income.svg';
import outcomeImg from '/assets/outcome.svg';
import totalImg from '/assets/total.svg';

import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';
import formatToMoney from '../../helpers/formatToMoney';

const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => ({
      ...acc,
      [transaction.type]: acc[transaction.type] + transaction.amount,
      total:
        transaction.type === 'deposit'
          ? acc.total + transaction.amount
          : acc.total - transaction.amount,
    }),
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    },
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatToMoney(summary.deposit)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {formatToMoney(summary.withdraw)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatToMoney(summary.total)}</strong>
      </div>
    </Container>
  );
};

export default Summary;
