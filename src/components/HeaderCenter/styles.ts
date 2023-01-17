import styled from "styled-components";
import { FONTS } from "../../theme/fonts";


export const Container = styled.div`
  height: 47px;
  width: 100%;
  border: 2px solid #d9d9d9;
  background-color: #f2f2f2 ;
  border-radius: 10px;
  padding: 2px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

export const ButtonAddChart = styled.button`
  border: 0;
  padding: 0 12px;
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  color: white;
  background-color: blueviolet;
  height: 100%;
  border-radius: 8px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;