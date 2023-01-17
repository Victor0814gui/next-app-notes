import { HeaderTop } from "../components/HeaderTop";
import { HeaderCenter } from "../components/HeaderCenter";
import { HeaderBottom } from "../components/HeaderBottom";
import { SectionContainerList } from "../components/SectionContainerList";
import { NavBar } from "../components/NavBar";
import { itemData } from "../utils/database";
import { FiPlusCircle } from "react-icons/fi";

import { 
  ContainerWrapper,
  Container,
  Header,
  Section,
  SectionAddTask,
  HeaderSectionAddTask,
  ContainerTask,
} from "../styles/home";
import { useRef } from "react";

export default function App(){
  const constraintsRef = useRef(null);
  return (
    <ContainerWrapper>
      <NavBar/>
      <Container>
        <Header>
          <HeaderTop/>
          <HeaderCenter/>
          <HeaderBottom/>
        </Header>
        <Section ref={constraintsRef}>
          {itemData.map(({title,item},index) => (
            <SectionContainerList
              ref={constraintsRef}
              key={index} 
              item={item} 
              title={title}
            />
          ))}
          <SectionAddTask>
            <HeaderSectionAddTask>
              <h3>Untitle Section</h3>
              <FiPlusCircle size={22} />
            </HeaderSectionAddTask>
            <ContainerTask>
            <FiPlusCircle size={22} />
              <h4>Add Task</h4>
            </ContainerTask>
          </SectionAddTask>
        </Section>
      </Container>
    </ContainerWrapper>
  )
}