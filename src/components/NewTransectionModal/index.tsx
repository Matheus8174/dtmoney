import Modal from 'react-modal';
import { useState, FormEvent } from 'react';

import Income from '/assets/income.svg';
import Outcome from '/assets/outcome.svg';
import Close from '/assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

type NewTransectionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

Modal.setAppElement('#root');

const NewTransectionModal: React.FC<NewTransectionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { createTransaction } = useTransactions();

  const [formData, setFormData] = useState({
    title: '',
    value: 0,
    category: '',
  });

  const [type, setType] = useState<'withdraw' | 'deposit'>('deposit');

  async function handleCreateNewTransaction(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await createTransaction({
      ...formData,
      type,
      amount: formData.value,
    });

    setFormData({
      title: '',
      category: '',
      value: 0,
    });

    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={Close} alt="close modal" />
        </button>

        <input
          type="text"
          placeholder="Título"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <input
          type="number"
          placeholder="Valor"
          value={formData.value}
          onChange={(e) => setFormData({ ...formData, value: +e.target.value })}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={Income} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={Outcome} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransectionModal;
