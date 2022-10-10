import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';

import api from '../services/api';

type Transaction = {
  id: number;
  title: string;
  type: 'withdraw' | 'deposit';
  category: string;
  amount: number;
  createdAt: string;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (t: TransactionInput) => Promise<void>;
};

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api('http://localhost:3000/api/transactions').then((transactions) =>
      setTransactions(transactions.data.transactions),
    );
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const { data } = await api.post('/transactions', {
      ...transactionInput,
    });

    setTransactions([...transactions, data]);
  }

  return (
    <TransactionsContext.Provider value={{ createTransaction, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
