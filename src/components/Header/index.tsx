import { Container } from './styles';
import Logo from '/assets/logo.svg';

type HeaderProps = {
  onHandleOpenNewTransactionModal: () => void;
};

const Header: React.FC<HeaderProps> = ({ onHandleOpenNewTransactionModal }) => {
  return (
    <Container>
      <main>
        <img src={Logo} alt="dt money" />

        <button type="button" onClick={onHandleOpenNewTransactionModal}>
          Nova transação
        </button>
      </main>
    </Container>
  );
};

export default Header;
