import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FONTS } from '../theme/fonts';

export const ContainerWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 25px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 21px;
  gap: 18px;
`;

export const SectionAddTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const HeaderSectionAddTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTask = styled.div`
  padding: 16px;
  border: 1px solid #d9d9d9;
  width: 240px;
  height: 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;

  &:hover{
    border: 3px solid #d9d9d9;
    color: blueviolet;
  }
`;
