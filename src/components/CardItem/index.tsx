import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Container,
  Header,
  Title,
  Content,
  Tags,
  Footer,
  ProfileImage,
  Date,
  ContainerOptions,
} from "./styles";

import {
  TbCookie,
  TbApps,
  TbAlignLeft,
} from "react-icons/tb";
import { useDragControls } from "framer-motion";

type Tags = {
  tag:'medium'|'low'|'acRight';
}

type CardItemProps = {
  title: string;
  profileUrl: string;
  date?: string;
  tags: Tags[];
  id: number;
}



export const CardItem = forwardRef((props: CardItemProps,ref) => {
  const controls = useDragControls()

  const cardRef = useRef(null);


  return(
    <Container 
      ref={cardRef}
      // drag
      //@ts-ignore
      // dragConstraints={ref}
      whileHover={{
        boxShadow: "-1px 6px 29px -8px rgba(0,0,0,0.74)",
      }}
      whileTap={{
        scale: 1.02
      }}
    >
      <Header>
        <TbCookie size={25}/>
        <Title>{props.title}</Title>
      </Header>
      <Content>
        {props.tags.map((item) => (
          <Tags key={item.tag} tag={item.tag}>{item.tag}</Tags>
        ))}
      </Content>
      <Footer>
        <ProfileImage src={props.profileUrl}/>
        {!!props.date && <Date>{props.date}</Date>}
        <ContainerOptions>
          <TbCookie/>
          <TbApps/>
          <TbAlignLeft/>
        </ContainerOptions>
      </Footer>
    </Container>
  )
});