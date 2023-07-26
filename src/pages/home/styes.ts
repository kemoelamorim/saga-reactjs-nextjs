import { styled } from 'styled-components';

export const Container = styled.div`
  /* Estilos para desktops */
  @media screen and (min-width: 1024px){
    font-size: 18px;
    width: 1320px;
    margin: 0 auto;
    padding: 50px;
  }
  /* Estilos para tablets */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }
  /* Estilos para celular */
  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 20px;
  }
`