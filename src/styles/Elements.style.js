import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
 0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
  `;

const lineWidth = keyframes`
  0%{
    width: 0%;
  }
  100%{
    width: 100%;
  }
  `;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0rem 2rem;
`;

export const Section = styled.div`
  margin-bottom: 5rem;
  //linear-gradient(-70deg, #55B3D0 50%, #383873 0%)
  //top: 0;
  //position: sticky;
`;

//---------NAVIGATION-------------//

export const NavigationContainer = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  display: flex;
  top: 0;
  background-color: white;
  justify-content: center;
  padding: 1.5rem 0rem;
  z-index: 50;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  flex: 1;

  &.spacing{
    padding: 5rem 0rem;
  }
`;

export const NavLogo = styled.div``;

export const NavLinks = styled.div`
  display: flex;
  p {
    margin: 0rem 1.2rem;
    font-weight: 500;
  }
`;

export const NightMode = styled.div``;

//---------HERO-SECTION-------------//

export const HeroContainer = styled(InnerContainer)`
  height: 100vh;
  margin-top: 0rem;
  img {
    max-width: 550px;
    width: 100%;
  }

  @media (max-width: 850px) {
    img {
      width: 60%;
    }
  }
`;

export const HeroHeading = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 1rem;
  }

  span {
    //color:#34A1CD;
    //background: -webkit-linear-gradient(#34A1CD, #55B3D0);
    background: -webkit-linear-gradient(291deg, #d281ff, #55b3d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 850px) {
    h1 {
      font-size: 3rem;
    }
    h3 {
      padding-right: 2rem;
      font-size: 1.5rem;
    }
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
  margin-bottom: 5rem;

  img.illustration-pc {
    max-width: 500px;
    width: 100%;
  }

  @media (max-width: 850px) {
    display: block;
  }
`;

export const InnerContainerSkills = styled(InnerContainer)`
  align-items: baseline;
`;

export const Column = styled.div`
  flex-basis: 50%;
  p {
    margin-top: 1rem;
    font-size: 1.1rem;
    padding-right: 5rem;
    line-height: 2;
    color: #616161;
  }

  @media (max-width: 992px) {
    margin-bottom: 5rem;

    p {
      padding-right: 2rem;
    }
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

export const AboutHeading = styled(PageHeading)`
  display: block;

  &.skill-heading h2 {
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
  }

  &.intrested-heading h2 {
    display: flex;
    justify-content: flex-start;
    padding-left: 2rem;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 1rem 0rem 2.5rem;
  padding: 0rem 2rem 0rem 2rem;
  h3 {
    margin: 0.5rem 0.5rem;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    background: #383873;
    color: white;
    border-radius: 5px;
  }

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

export const Intrested = styled(Skills)`
  justify-content: flex-start;
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
    //color: white;
  }

  h3 {
    text-align: center;
  }

  @media (max-width: 992px) {
    img {
      display: none;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TabHeading = styled.div`
  display: flex;
`;

export const ProjectSection = styled(Section)`
  margin: 8rem 0rem;
  padding: 4rem 0rem;
  //background: #383873;
  min-height: 900px;
  height: auto;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  height: 100%;
`;

export const ClientProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
  height: 100%;
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
        border-bottom: 3px solid #55b3d0;
        animation: ${lineWidth} ease-out 0.5s;
      }
    `}

  @media (max-width: 992px) {
    margin: 0rem 1rem;
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0px 0px 7px 2px #d9d9d9cc;
  animation: ${fadeIn} ease-in 0.8s;

  img {
    position: relative;
    height: 450px;
    object-position: top center;
    width: 100%;
    object-fit: cover;
    display: block;
    border-radius: 5px;
    transition: ease-in .3s;
  }

  &:hover {
    img {
      filter: brightness(30%);
    }

    .card-details {
      display: block;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  //align-items: center;
  //background: white;
  padding: 0.5rem 0rem;
  align-items: center;
  color: #130f49;
  h3 {
    //color: #55b3d0;
    font-weight: 500;
  }
`;

export const DetailsButton = styled.button`
  font-family: "Poppins", "sans-serif";
  font-size: 2rem;
  padding: 0.1rem 1rem;
  border: 3px solid #20C3C5;
  border-radius: 5px;
  background: none;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: ease-in .2s;

  &:hover{
    background: #20C3C5;
  }

`;

export const CardDetails = styled.div`
  display: none;
  position: absolute;
  top: 45%;
  right: 50%;
  z-index: 10;
  transform: translate(50%, -50%);
`;

//---------------PROJECT PAGE----------------//

export const ProjectInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ProjectDetails = styled.div`
  padding: 0rem 0rem 0rem 5rem;

  h2 {
    font-size: 2rem;
    letter-spacing: 5px;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    padding-right: 0rem;
  }
`;

export const ProjectInnerContainer = styled(InnerContainer)`
  align-items: flex-start;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const DemoAndGitLink = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0rem;

  h3{
    margin: 0;
    padding-left: 1.5rem;
  }

  .git-icon{
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

export const ProjectTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  p {
    margin: 0rem;
    padding: 0.2rem 1.5rem;
    background: #383873;
    border-radius: 5px;
    color: white;
  }
`;

//------------- PAGE NOT FOUND --------------//

export const PageNotFoundSection = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .arrow-icon {
    width: 90px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: -webkit-linear-gradient(291deg, #d281ff, #55b3d0);
  }

  h3 {
    padding-left: 2rem;
    margin: 0;
  }
`;
