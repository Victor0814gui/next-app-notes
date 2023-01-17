import React, { useState, forwardRef,useEffect, useRef } from "react";
import { CardItem } from "../CardItem";
import{
  Content,
  HeaderContent,
  Title,
  ContainerOptions,
} from "./styles";

import { 
  TbDots
} from "react-icons/tb";
import { FiPlusCircle } from "react-icons/fi";
import { useDragControls, useInView,AnimationProps, Reorder } from "framer-motion";



type Tags = {
  tag:'medium'|'low'|'acRight';
}


type CardItemProps = AnimationProps & {
  title: string;
  profileUrl: string;
  date?: string;
  tags: Tags[];
  index: number;
}

type Props = {
  title: string;
  item: CardItemProps[];
}


export const SectionContainerList =  forwardRef(({title,item,...rest}:Props,refCard) => {
  const [ items,setItems ] = useState(item)
  const controls = useDragControls()
  const ref = useRef(null)

  const isInView = useInView(ref)

  function startDrag(event: any) {
    console.log(event.clientX)
    console.log(event.clientY)
    controls.start(event, { snapToCursor: true })
  }

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <Content
      {...rest}
      onPointerDown={startDrag}
      onDragCapture={(e) => console.log(e.clientX)}
      onDragOverCapture={e => console.log(e)}
    >
      <HeaderContent>
        <Title>{title}</Title>
        <ContainerOptions>
          <FiPlusCircle size={20} />
          <TbDots size={21}/>
        </ContainerOptions>
      </HeaderContent>
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {!!items && items.map((item,i) => (
          <Reorder.Item key={item.index} value={item}>
            <CardItem
              ref={refCard}
              id={item.index}
              key={item.index} 
              date={item.date} 
              profileUrl={item.profileUrl} 
              tags={item.tags} 
              title={item.title}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </Content>
  )
})