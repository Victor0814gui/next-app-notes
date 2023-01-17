import React, { ReactNode } from "react";

import { 
  Container,
} from "./styles";


type Props = {
  children: ReactNode;
  isSelected?: boolean;
}

export function Button({isSelected = false,children,...props}:Props){
  return(
    <Container {...props} isSelected={isSelected}>
      {children}
    </Container>
  )
}