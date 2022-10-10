import React from 'react';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import NewTransectionModal from './components/NewTransectionModal';

import GlobalStyle from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    React.useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onHandleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransectionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionsProvider>
  );
}

export default App;
