import poke_api_img from '../assets/pokeapiapp.png';
import task_app_img from '../assets/taskapp.png'
import kravmagaveikkola_img from '../assets/kravmagaveikkola.png';
import musicapp_img from '../assets/musicplayer.png';

export const ProjectArray = [
    {
        id: 1,
        project_name: "Task App",
        framework: "React",
        img: task_app_img,
        project_info:"Project Info text",
        github_link: "GitHub_link",
        url_link: "url link",
        tech: [
            "React",
            "Styled-Components",
        ],
        type:"Personal"
    },
    {
        id: 2,
        project_name: "PokeAPI Pokedex",
        framework: "React",
        img: poke_api_img,
        project_info:"Project Info text",
        github_link: "GitHub_link",
        url_link: "url link",
        tech: [
            "React",
            "Axios",
            "React Router",
            "PokeAPI",
            "Styled-Components",
        ],
        type:"Personal"
        
    },
    {
        id: 3,
        project_name: "Music Player",
        framework: "React",
        img: musicapp_img,
        project_info:"Project Info text",
        github_link: "GitHub_link",
        url_link: "url link",
        tech: [
            "React",
            "UUID",
            "SSAS",
        ],
        type:"Personal"
        
    },
    {
        id: 4,
        project_name: "Kravmagaveikkola.com",
        framework: "WordPress",
        img: kravmagaveikkola_img,
        project_info:"Project Info text",
        github_link: "GitHub_link",
        url_link: "url link",
        tech: [
            "WordPress",
            "Elementor",
        ],
        type:"Client"
    },

    /*{
        id: 5,
        project_name: "ZeroDistance.solutions",
        framework: "WordPress",
        img: "IMG-HERE",
        project_info:"Project Info text",
        github_link: "GitHub_link",
        url_link: "url link",
        tech: [
            "WordPress",
            "Elementor",
        ],
        type:"Client"
    },*/



]