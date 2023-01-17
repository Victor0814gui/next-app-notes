import { motion } from "framer-motion";
import styled from "styled-components";
import { FONTS } from "../../theme/fonts";


export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  font-family: ${FONTS.Roboto};
  font-weight: 600;
  font-size: 18px;
  color:  #111111;
`;

export const ContainerOptions = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  gap: 3px;
`;
