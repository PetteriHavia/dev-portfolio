import {
    PageNotFoundSection,
    GoBack,

} from "../styles/Elements.style"
import {FaLongArrowAltLeft} from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <PageNotFoundSection>
          <h1>404</h1>
          <h2>No Stuff Here Sorry.</h2>
          <GoBack>
            <Link to="/">
              <FaLongArrowAltLeft size={40} color={"white"} className="arrow-icon"/>
            </Link>
            <h3>Go Back To Homepage</h3>
          </GoBack>
        </PageNotFoundSection>
      )
}

export default PageNotFound;