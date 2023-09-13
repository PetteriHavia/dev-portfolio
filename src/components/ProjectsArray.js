import poke_api_img from '../assets/pokeapi-default.png';
import task_app_img from '../assets/taskapp-default.png'
import kravmagaveikkola_img from '../assets/kravmaga-default.png';
import musicapp_img from '../assets/musicapp-default.png';
import zerodistance_img from '../assets/zerodistance-default.png';

export const ProjectArray = [
    {
        id: 1,
        project_name: "Task App",
        framework: "React",
        img: task_app_img,
        project_info: [
            "I created this simple to-do app using React as a learning exercise. This app allows users to jot down tasks and add them to a list. The list is divided into three categories: All, Active, and Completed. Users can mark tasks as completed by clicking the icon on the left side of each task, which moves them to the Completed category. Initially, users can also delete tasks by clicking the X icon.",
            "At the bottom of the app, there's a section displaying the total number of active to-dos, helping users keep track of their pending tasks. Additionally, there's a Clear Completed button that allows users to remove all completed tasks from the list in one go.",
        ],
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
        project_info: [
            "This project is a React front-end interface for the public API knows as PokeAPI that contains information about the pokemon series and games. The idea was to create a Pokédex-style application. This app allows users to search for specific Pokémon and view relevant information about them.",
            "The search functionality within the app permits users to look up individual Pokémon using their names or unique ID numbers. Additionally, users have the option to select a particular generation from a dropdown menu (such as Kanto, Johto, Kalos, etc.). Upon selecting a generation, the app displays a list of all the Pokémon belonging to that specific generation.",
        ],
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
        project_info: [
            "Music player app made by using React, featuring a small library of songs for users to choose from. The app allows users to play, skip forward, and skip backward through the songs in the library. To access the library, users can click on the top right corner.",
            "The library contains all the songs that the app currently has. Users can conveniently filter through the songs by typing the song's name into the input field. The styling of this app was accomplished using SASS, marking my first experience learning and using it",
        ],
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
        project_info: [
            "I created a website for Krav Maga Veikkola, a self-defense training company. The company had a clear vision for the site, which needed to be simple and concise, containing essential information for both new and existing club members. To streamline ongoing maintenance and updates, the company opted for WordPress as the platform of choice.",
            "WordPress was selected because it offers a user-friendly content management system that allows the company to easily make adjustments and perform simple changes without requiring any prior coding knowledge. To enhance the site's versatility and customization, we integrated the Elementor page builder plugin. With Elementor, the company can effortlessly update images, text, and even create new layouts for fresh content.",
            "By leveraging WordPress and Elementor, Krav Maga Veikkola has a website that not only meets their immediate needs but also empowers them to adapt and evolve their online presence in the future."
        ],
        github_link: "GitHub_link",
        url_link: "url link",
        tech: [
            "WordPress",
            "Elementor",
        ],
        type:"Client"
    },

    {
        id: 5,
        project_name: "Zerodistancesolutions.com",
        framework: "WordPress",
        img: zerodistance_img,
        project_info: [
            "Zero Distance Solutions is a Finnish-based training company with expertise in military, tactical, and security forces. The company embarked on the journey of creating a new website and opted for the popular WordPress platform.",
            "The company provided essential materials for the website and also presented preliminary layout sketches for the pages they envisioned. Recognizing the importance of future content updates and ease of management, Zero Distance Solutions decided to integrate the Elementor page builder plugin.",
            "Elementor was chosen for its user-friendly yet powerful editor, which facilitates easy visual design and component building through a simple drag-and-drop interface. This choice ensures that the company can effortlessly modify and enhance the website's content, allowing for seamless updates as their needs evolve over time.",
        ],
        github_link: "GitHub_link",
        url_link: "url link",
        tech: [
            "WordPress",
            "Elementor",
        ],
        type:"Client"
    },



]