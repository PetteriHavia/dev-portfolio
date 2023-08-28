import { useParams } from "react-router-dom";
import { ProjectArray } from "../components/ProjectsArray";
import row from "../assets/row.svg";
import {
  ProjectInfoContainer,
  IndividualProjectHeading,
  PageHeading,
  ProjectDetails,
  Column,
  Container,
  InnerContainer,
  ProjectInnerContainer,
  ProjectTools,
} from "../styles/Elements.style";
import Navigation from "../components/Navigation";
import { LiaGithub } from "react-icons/lia";
import { IconContext } from "react-icons";

const ProjectPage = () => {
  const { id } = useParams();

  //convert id from url to integer and compare it to the ProjectArray id
  const project = ProjectArray.find((item) => item.id === parseInt(id, 10));

  if (!project) {
    return <h2>Project ID not found</h2>;
  }

  return (
    <>
      <Container>
        <InnerContainer>
          <PageHeading>
            <h2>Project Details</h2>
            <img src={row} alt="circle illustration" />
          </PageHeading>
        </InnerContainer>
      </Container>
      <ProjectInfoContainer>
        <ProjectInnerContainer>
          <Column>
            <img src={project.img} alt={project.name} />
          </Column>
          <Column>
            <ProjectDetails>
              <h2>{project.project_name}</h2>
              <div>
                {project.project_info.map((item, key) => (
                  <p key={key}>{item}</p>
                ))}
              </div>
              <IconContext.Provider value={{ size: 55 }}>
                <LiaGithub />
              </IconContext.Provider>
              <h3>Project url link</h3>
              <h3>Tech</h3>
              <ProjectTools>
                {project.tech.map((item, key) => (
                    <p key={key}>{item}</p>
                ))}
              </ProjectTools>
            </ProjectDetails>
          </Column>
        </ProjectInnerContainer>
      </ProjectInfoContainer>
    </>
  );
};

export default ProjectPage;
