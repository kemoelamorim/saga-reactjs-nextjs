import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;

  border: 1px solid #ccc;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  box-shadow: white;
  transition: box-shadow #ccc;
  & + & {
    margin-top: 8px;
  }
  &:hover {
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.1);
  }
`