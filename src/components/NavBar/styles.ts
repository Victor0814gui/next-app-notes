import styled from "styled-components";
import { FONTS } from "../../theme/fonts";

export const ContainerWrapper = styled.div`
  height: 100%;
  width: 270px;
  padding: 14px;
  border-right: 2px solid #f2f2f2;

  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Button = styled.div`
  width: 100%;
  padding: 7px 12px;
  font-family: ${FONTS.Roboto};
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    color: blueviolet;
    border-left: 4px solid blueviolet;
  }

  &:active {
    background-color: blueviolet;
    color: white;
  }
`;

export const SectionTitle = styled.h3`
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  color: #999999;
  padding: 12px;
`;

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FavoritesItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  gap: 8px;

  transition: 0.2s all;

  &:hover {
    color: blueviolet;
  }
`;

export const Square = styled.div`
  height: 8px;
  width: 8px;
  background-color: #33ffbb;
`;

export const FavoriteText = styled.h4`
  font-family: ${FONTS.Roboto};
  font-weight: 500;
  line-height: 16px;
  color: #455a64;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 12px;
  justify-content: center;
`;

export const ButtonInviteTeammates = styled.button`
  background-color: #f2f2f2;
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  font-size: 13px;
  border-radius: 12px;
  border: 0;
  padding: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
