

import { 
  Container,
} from "./styles";

import { Button } from "../Button";

import {
  IoAddSharp,
} from "react-icons/io5";

import { TbDots } from "react-icons/tb";


import ReactIcons from "react-icons";


export function HeaderBottom(){
  return(
    <Container>
      <Button >Created Yesterday</Button>
      <Button>All Tasks</Button>
      <Button>Filter</Button>
      <Button>Score</Button>
      <Button>Customize</Button>
      <Button>
        <TbDots fontWeight={600}/>
      </Button>
    </Container>
  )
}