import { motion } from "framer-motion";
import styled from "styled-components";
import { FONTS } from "../../theme/fonts";


const colorsTags = {
  medium: {
    background:' #1affb2',
    color: '#00b36b',
  },
  low: {
    background: '#ffaa00',
    color: '#b35900',
  },
  acRight:{
    background: '#ffe680',
    color: '#b38600'
  }
}

type Tags = {
  tag: 'medium'|'low'|'acRight';
}

export const Container = styled(motion.div)`
  padding: 16px;
  border: 1px solid #d9d9d9;
  width: 240px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 7px 0;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.div`
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  font-size: 14px;
  color:  #333333;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

export const Tags = styled.div<Tags>`
  padding: 5px 12px;
  background-color: ${(props) => colorsTags[props.tag].background};
  color: ${(props) => colorsTags[props.tag].color};
  border-radius: 4px;
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  margin-top: 19px;
`;

export const ProfileImage = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 20px;
`;

export const Date = styled.div`
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  font-size: 12px;
  color:  #8c8c8c;
`;

export const ContainerOptions = styled.div`
  margin-left: auto;
  gap: 3px;
  display: flex;
  align-items: center;
`;
