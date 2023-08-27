import {
  InnerProjectContainer,
  ProjectHeading,
  TabHeading,
  ProjectGrid,
  ProjectContainer,
  PageHeading,
  ProjectSection,
  Card,
  CardInfo,
  CustomColorSVG,
  StyledTab,
} from "../styles/Elements.style";
import row from "../assets/row.svg";
import { ProjectArray } from "./ProjectsArray";
import { useState } from "react";

const Projects = () => {
  const [toggleIndex, setToggleIndex] = useState(1);

  const ProjectCard = ({ item }) => {
    return (
      <Card>
        <img src={item.img} alt={item.project_name} />
        <CardInfo>
          <h3>{item.project_name}</h3>
          <h3>{item.framework}</h3>
        </CardInfo>
      </Card>
    );
  };

  const toggleTab = (index) => {
    setToggleIndex(index);
    console.log(toggleIndex);
  };

  return (
    <ProjectSection>
      <ProjectContainer>
        <InnerProjectContainer>
          <ProjectHeading>
            <PageHeading>
              <h2>Projects</h2>
              <CustomColorSVG src={row} alt="circle row" />
            </PageHeading>
            <TabHeading>
              <StyledTab $isActive={toggleIndex === 1} onClick={() => toggleTab(1)}>
                <h3>ALL</h3>
              </StyledTab>
              <StyledTab $isActive={toggleIndex === 2} onClick={() => toggleTab(2)}>
                <h3>PERSONAL</h3>
              </StyledTab>
              <StyledTab $isActive={toggleIndex === 3} onClick={() => toggleTab(3)}>
                <h3>CLIENT</h3>
              </StyledTab>
            </TabHeading>
          </ProjectHeading>
          <ProjectGrid $isActive={toggleIndex === 1}>
            {ProjectArray.map((item, key) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </ProjectGrid>
        </InnerProjectContainer>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Projects;
