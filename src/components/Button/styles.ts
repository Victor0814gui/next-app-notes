import styled,{ css } from "styled-components";
import { FONTS } from "../../theme/fonts";



export const Container = styled.button<{isSelected: boolean}>`
  height: 100%;
  max-width: 200px;
  border: 0;
  padding: 0 15px;
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  color: #8c8c8c;
  background-color: transparent;
  transition: 0.3s all;
  position: relative;
  cursor: pointer;

  ${(props => props.isSelected
    ? css`
        border-bottom: 3px solid blueviolet;
        color: blueviolet
      `
    : css`
        border-bottom: 0;
      `
  )};

  &:hover{
    color: blueviolet;
  };

  &:active{
    cursor: default;
    color: purple;
  };
`;