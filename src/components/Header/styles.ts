import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);

  main {
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    border: 0;
    background-color: var(--blue-light);
    color: #FFF;
    padding: 0 2rem;
    height: 3rem;
    font-size: 1rem ;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
