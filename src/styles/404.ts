import styled from 'styled-components';
import { FONTS } from '../theme/fonts';

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a{
    font-weight: 600;
    margin-top: 20px;
    padding: 12px;
    border: 2px solid blueviolet;
    border-radius: 8px;
    text-decoration: none;
    color: blueviolet;
    transition: 0.2s all;

    &:hover{
      color: #fff;
      background-color: blueviolet;
    }
  }
`;
