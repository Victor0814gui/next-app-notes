import React from "react";
import { HeaderTop } from "../components/HeaderTop";
import { HeaderCenter } from "../components/HeaderCenter";
import { HeaderBottom } from "../components/HeaderBottom";
import { NavBar } from "../components/NavBar";

import { 
  ContainerWrapper,
  Container,
  Header,
  Section,
} from "../styles/board";

export default function Board(){
  return (
    <ContainerWrapper>
      <NavBar/>
      <Container>
        <Header>
          <HeaderTop/>
          <HeaderCenter/>
          <HeaderBottom/>
        </Header>
        <Section>
          <h1>Board</h1>
        </Section>
      </Container>
    </ContainerWrapper>
  )
}