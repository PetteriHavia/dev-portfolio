import {Container, InnerContainer, FooterBox} from '../styles/Elements.style';
import { LiaGithub } from "react-icons/lia";
import { Link } from 'react-router-dom';

const currentYear = new Date();

const Footer = () => {
    return(
        <FooterBox>
            <p>© Copyright {currentYear.getFullYear()}. Petteri Havia</p>
            <Link to="https://github.com/PetteriHavia" target="_blank"><LiaGithub /></Link>
        </FooterBox>
    )
}

export default Footer;