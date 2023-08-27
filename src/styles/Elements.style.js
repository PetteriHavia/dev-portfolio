import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0rem 2rem;
`;

export const Section = styled.div`
  background: linear-gradient(90deg, #55b3d0 70%, #383873 33%);
  margin-bottom: 5rem;
  //linear-gradient(-70deg, #55B3D0 50%, #383873 0%)
`;

//---------NAVIGATION-------------//

export const InnerContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  flex: 1;
`;

export const NavLogo = styled.div``;

export const NavLinks = styled.div`
  display: flex;
  color: white;
  p {
    margin: 0rem 1.2rem;
    font-weight: 500;
  }
`;

export const NightMode = styled.div``;

//---------HERO-SECTION-------------//

export const HeroContainer = styled(InnerContainer)`
  img {
    max-width: 550px;
    width: 100%;
  }
`;

export const HeroHeading = styled.div`
  color: white;

  h1 {
    font-size: 3.5rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.7rem;
    font-weight: 300;
    padding-right: 11rem;
    margin: 1rem 0rem;
  }
`;

export const Icons = styled.div`
  display: flex;

  svg {
    margin-right: 2rem;
  }
`;

//---------ABOUT-SECTION-------------//

export const InnerContainerAbout = styled(InnerContainer)`
  align-items: baseline;
`;

export const Column = styled.div`
  flex-basis: 50%;
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    padding-right: 5rem;
    line-height: 2;
    color: #616161;
  }
`;

export const PageHeading = styled.div`
  display: flex;
  align-items: center;

  img {
    opacity: 0.7;
    margin-left: 2rem;
  }
`;

export const JustifyEndAboutHeading = styled(PageHeading)`
  justify-content: flex-end;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 1rem 0rem 2.5rem;
  h3 {
    margin: 0.5rem 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    background: #383873;
    color: white;
    border-radius: 5px;
  }
`;

export const Intrested = styled(Skills)`
  h3 {
    background: #ff6224;
  }
`;

//-------------PROJECTS-SECTION------------//

export const ProjectContainer = styled.div`
  width: 100%;
  padding: 0rem 2rem;
`;

export const InnerProjectContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const ProjectHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  h2,
  h3 {
    color: white;
  }

  h3 {
    text-align: center;
  }
`;

export const TabHeading = styled.div`
  display: flex;
`;

export const ProjectSection = styled(Section)`
  padding: 4rem 0rem;
  background: #383873;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
`;

export const Card = styled.div`
  overflow: hidden;
  border-radius: 5px;

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: #55b3d0;
  padding: 0.5rem 1rem;

  h3 {
    color: white;
    font-weight: 400;
  }
`;

export const CustomColorSVG = styled.img`
  filter: brightness(0) invert(1);
`;

export const StyledTab = styled.div.attrs((props) => ({
  isActive: props.isActive,
}))`
  margin-left: 2rem;
  cursor: pointer;
  

  ${(props) =>
    props.$isActive &&
    css`
      h3 {
        border-bottom: 2px solid #55b3d0;
      }
    `}
`;
