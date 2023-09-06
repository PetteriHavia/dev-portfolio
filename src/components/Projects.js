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
  StyledTab,
  ClientProjectGrid,
  DetailsButton,
  CardDetails,
} from "../styles/Elements.style";
import row from "../assets/row.svg";
import { ProjectArray } from "./ProjectsArray";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = ({projectSectionRef}) => {
  const [toggleIndex, setToggleIndex] = useState(1);

  const ProjectCard = ({ item }) => {
    return (
      <Card>
        <Link to={`projects/${item.id}`}>
          <img src={item.img} alt={item.project_name} />
          <CardDetails className="card-details">
            <DetailsButton>Details</DetailsButton>
        </CardDetails>
        </Link>
        <CardInfo>
            <h3>{item.project_name}</h3>
            <h3>{item.framework}</h3>
        </CardInfo>
      </Card>
    );
  };


  const personalProjects = ProjectArray.filter(
    (item) => item.type === "Personal"
  );
  const clientProjects = ProjectArray.filter((item) => item.type === "Client");

  const toggleTab = (index) => {
    setToggleIndex(index);
    console.log(toggleIndex);
  };

  return (
    <ProjectSection id="project" ref={projectSectionRef}>
      <ProjectContainer>
        <InnerProjectContainer>
          <ProjectHeading>
            <PageHeading>
              <h2>Projects</h2>
              <img src={row} alt="circle illustration" />
            </PageHeading>
            <TabHeading>
              <StyledTab
                $isActive={toggleIndex === 1}
                onClick={() => toggleTab(1)}
              >
                <h3>ALL</h3>
              </StyledTab>
              <StyledTab
                $isActive={toggleIndex === 2}
                onClick={() => toggleTab(2)}
              >
                <h3>PERSONAL</h3>
              </StyledTab>
              <StyledTab
                $isActive={toggleIndex === 3}
                onClick={() => toggleTab(3)}
              >
                <h3>CLIENT</h3>
              </StyledTab>
            </TabHeading>
          </ProjectHeading>
          <ProjectGrid>
            {toggleIndex === 1 && (
              <>
                {ProjectArray.map((item, key) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
              </>
            )}
            {toggleIndex === 2 && (
              <>
                {personalProjects.map((item, key) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
              </>
            )}
            {toggleIndex === 3 && (
              <ClientProjectGrid>
                {clientProjects.map((item, key) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
              </ClientProjectGrid>
            )}
          </ProjectGrid>
        </InnerProjectContainer>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Projects;
