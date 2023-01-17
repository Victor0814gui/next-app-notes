
import { useRouter } from 'next/router'
import { 
  Container,
  ButtonAddChart,
} from "./styles";

import { Button } from "../Button";

import {
  IoAddSharp,
} from "react-icons/io5";
import Link from 'next/link';
import { useEffect, useState } from 'react';


const pathConfig =[
  {
    name: 'overview',
    path: '/overview',
  },
  {
    name: 'board',
    path: '/board',
  },
  {
    name: 'timeline',
    path: '/timeline',
  },
  {
    name: 'app-drag-and-drop',
    path: '/app-drag-and-drop',
  },
  {
    name: 'dashboard',
    path: '/',
  },
  {
    name: 'more',
    path: '/more',
  },
]


export type PathNameType = {
  pathname: '/'|'overview'|'board'|'timeline'|'calendar'|'dashboard'|'more';
}


export function HeaderCenter(){
  const { pathname } = useRouter() as PathNameType;

  console.log(pathname);
  
  return(
    <Container>
      {pathConfig.map(({name,path}) => (
         <Link key={path} href={path}>
          <Button 
            key={path}
            isSelected={pathname === path}
          >{name}</Button>
        </Link>
      ))}
      <ButtonAddChart>
        <IoAddSharp size={20}/>
        Add Chart
      </ButtonAddChart>
    </Container>
  )
}