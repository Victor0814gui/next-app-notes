import {
  ContainerWrapper,
  Container,
  Button,
  SectionTitle,
  FavoritesItem,
  Square,
  FavoriteText,
  FooterContainer,
  ButtonInviteTeammates,
  FavoritesContainer,
} from "./styles";

import {
  TbHome2,
  TbCheckbox,
  TbLock,
  TbPremiumRights,
  TbUserPlus,
} from "react-icons/tb";

export function NavBar() {
  return (
    <ContainerWrapper>
      <Container>
        <Button>
          <TbHome2 size={25} />
          Home
        </Button>
        <Button>
          <TbCheckbox size={25} />
          My Tasks
        </Button>
        <Button>
          <TbHome2 size={25} />
          Inbox
        </Button>
        <SectionTitle>Reperting</SectionTitle>
        <Button>
          <TbCheckbox size={25} />
          Portifolios
        </Button>
        <Button>
          <TbHome2 size={25} />
          Goals
        </Button>
        <SectionTitle>Favorites</SectionTitle>
        <FavoritesContainer>
          <FavoritesItem>
            <Square />
            <FavoriteText>Recruting Weekly me...</FavoriteText>
          </FavoritesItem>
          <FavoritesItem>
            <Square />
            <FavoriteText>WebSite Launch</FavoriteText>
          </FavoritesItem>
          <FavoritesItem>
            <Square />
            <FavoriteText>Rebranding Video</FavoriteText>
          </FavoritesItem>
          <FavoritesItem>
            <TbPremiumRights size={22} color={"#ffcc66 "} />
            <FavoriteText style={{ color: "#333333" }}>
              Rebranding Video
            </FavoriteText>
            <TbLock size={22} color={"#9999 "} />
          </FavoritesItem>
          <FavoritesItem>
            <Square />
            <FavoriteText>Email calendar</FavoriteText>
          </FavoritesItem>
          <FavoritesItem>
            <Square />
            <FavoriteText>Website Design Regu...</FavoriteText>
          </FavoritesItem>
          <FavoritesItem>
            <Square />
            <FavoriteText>Custom Stories - Q4</FavoriteText>
          </FavoritesItem>
        </FavoritesContainer>
      </Container>
      <FooterContainer>
        <ButtonInviteTeammates>
          <TbUserPlus />
          Invite Teammates
        </ButtonInviteTeammates>
      </FooterContainer>
    </ContainerWrapper>
  );
}
