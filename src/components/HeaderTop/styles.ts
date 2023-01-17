import styled from "styled-components";
import { FONTS } from "../../theme/fonts";


export const Container = styled.header`
  width: 100%;
  height: 57px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentHeaderInformation = styled.div`
  display: flex;
  flex-direction: row;
`

export const BoxIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background-color: blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.div``;
export const HeaderSubtitle = styled.div``;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 12px;
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`
export const ContainerTitleText = styled.div`
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  font-size: 15px;
`;

export const ContainerSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Square = styled.div`
  width: 10px;
  height: 10px;
  background-color: #66ff99;
`;
export const ContainerSubtitleText = styled.div`
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  font-size: 12px;
  color: #9999;
`;

export const ContentProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px; 
`;

export const ContainerContentProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProfileCircleImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 20px;
  margin-left: -12px;
  border: 3px solid white;
`;

export const ProfileCircleImgMore = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 20px;
  margin-left: -12px;
  border: 3px solid white;
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600; 
`;

export const ButtonShare = styled.button`
  padding: 8px;
  border: 2px solid #9999 ;
  color: #999;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONTS.Roboto};
  font-weight: 500;
`;
export const InputSearch = styled.div`
  border: 2px solid #9999 ;
  padding: 8px 12px;
  border-radius: 8px;
  width: 140px;
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 20px;
`;