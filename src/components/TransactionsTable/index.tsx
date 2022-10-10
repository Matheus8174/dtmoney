import formatToMoney from '../../helpers/formatToMoney';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions &&
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {formatToMoney(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt),
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
