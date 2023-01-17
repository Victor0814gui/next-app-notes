import React from "react";
import { 
  Container,
  ContentHeaderInformation,
  BoxIcon,
  ContentText,
  ContainerTitle,
  ContainerTitleText,
  ContainerSubtitleText,
  ContainerSubtitle,
  Square,
  ContentProfile,
  ContainerContentProfile,
  ProfileCircleImg,
  ProfileCircleImgMore,
  ButtonShare,
  InputSearch,
  ProfileImg,
} from "./styles";
import { 
  IoChevronDownSharp,
  IoCheckmarkCircle,
  IoStar,
  IoShareSocial,
  IoSearch,
  IoAddSharp,
  IoFilterOutline,
} from "react-icons/io5";




export function HeaderTop(){

  const imgUrl = 'https://avatars.githubusercontent.com/u/2254731?v=4'
  return(
    <Container>
      <ContentHeaderInformation>
        <BoxIcon>
          <IoFilterOutline width={35} height={35}/>
        </BoxIcon>
        <ContentText>
          <ContainerTitle>
            <ContainerTitleText>Custon Stories - Q4</ContainerTitleText>
            <IoChevronDownSharp/>
            <IoCheckmarkCircle/>
            <IoStar color="blueviolet"/>
          </ContainerTitle>
          <ContainerSubtitle>
            <Square/>
            <ContainerSubtitleText>On Track</ContainerSubtitleText>
          </ContainerSubtitle>
        </ContentText>
      </ContentHeaderInformation>
      <ContentProfile>
        <ContainerContentProfile>
          <ProfileCircleImg src={imgUrl}/>
          <ProfileCircleImg src={imgUrl}/>
          <ProfileCircleImg src={imgUrl}/>
          <ProfileCircleImg src={imgUrl}/>
          <ProfileCircleImg src={imgUrl}/>
          <ProfileCircleImgMore>11+</ProfileCircleImgMore>
        </ContainerContentProfile>
        <ButtonShare>
          Share
          <IoShareSocial/>
        </ButtonShare>
        <InputSearch>
          <IoSearch/>
          Search
        </InputSearch>
        <ButtonShare>
          <IoAddSharp/> 
        </ButtonShare>
        <ProfileImg src={imgUrl}/>
      </ContentProfile>

    </Container>
  )
}