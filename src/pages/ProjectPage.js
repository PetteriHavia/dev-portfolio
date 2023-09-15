import { useParams } from "react-router-dom";
import { ProjectArray } from "../components/ProjectsArray";
import row from "../assets/row.svg";
import {
  ProjectInfoContainer,
  PageHeading,
  ProjectDetails,
  Column,
  Container,
  InnerContainer,
  ProjectInnerContainer,
  ProjectTools,
  DemoAndGitLink,
} from "../styles/Elements.style";
import Navigation from "../components/Navigation";
import { LiaGithub } from "react-icons/lia";
import { IconContext } from "react-icons";
import PageNotFound from "../pages/PageNotFound";

const ProjectPage = () => {
  const { id } = useParams();

  //convert id from url to integer and compare it to the ProjectArray id
  const project = ProjectArray.find((item) => item.id === parseInt(id, 10));

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <>
      <Container>
        <InnerContainer className="spacing">
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
              <>
                {project.project_info.map((item, key) => (
                  <p key={key}>{item}</p>
                ))}
              </>
              <DemoAndGitLink>
                <LiaGithub size={55} className="git-icon" />
                <h3>DEMO</h3>
              </DemoAndGitLink>
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
