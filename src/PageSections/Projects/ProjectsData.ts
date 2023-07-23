import CPPDBExplorerImage from "../../Images/ProjectImages/CDBCard.png";
import LiquiDashImage from "../../Images/ProjectImages/LiquiDashImage.png";
import LiquiBotImage from "../../Images/ProjectImages/LiquiBotCard.png";
import LiquiBotWebsiteImage from "../../Images/ProjectImages/LiquiBotWebsiteFinal.png";
import CPPIcon from "../../Icons/Languages/CPPIcon.png";
import DiscordIcon from "../../Icons/Languages/DiscordIcon.png";
import FlaskIcon from "../../Icons/Languages/FlaskIcon.png";
import ReactIcon from "../../Icons/Languages/icons8-react-100.png";
import LinuxIcon from "../../Icons/Languages/LinuxIcon.png";
import MongoDBIcon from "../../Icons/Languages/MongoDBIcon.png";
import PythonIcon from "../../Icons/Languages/PythonIcon.png";
import TypescriptIcon from "../../Icons/Languages/TypescriptIcon.png";
import GithubIcon from "../../Icons/Languages/GithubIcon.png";
import SQLIcon from "../../Icons/Languages/SQLIcon.png";


export const allProjectImages = [LiquiDashImage,LiquiBotImage,LiquiBotWebsiteImage,CPPDBExplorerImage];
export const ProjectsData = {
    "LiquiDash" : {
        image: LiquiDashImage,
        bullets: ['Built with React', 'Written in Typescript'],
        skillsUsed: [TypescriptIcon,FlaskIcon,MongoDBIcon,ReactIcon, GithubIcon],
        linkToProject: "https://liquidash.netlify.app/"
    },
    "LiquiBot" : {
        image: LiquiBotImage,
        bullets: ['Utilizes the Discord.py framework.', "Over 20 commands", "verified active developer badge"],
        skillsUsed: [PythonIcon,FlaskIcon,DiscordIcon,MongoDBIcon,LinuxIcon, GithubIcon],
        linkToProject: "https://discord.com/oauth2/authorize?client_id=1074436572172259500&permissions=8&scope=bot"
    },
    "LiquiBot Website" : {
        image: LiquiBotWebsiteImage,
        bullets: ['Built with react'],
        skillsUsed: [TypescriptIcon,ReactIcon, GithubIcon],
        linkToProject: "https://liquibot.netlify.app/"
    },
    "C++ Database Explorer" : {
        image: CPPDBExplorerImage,
        bullets: ["Allows execution of sql commands from the command line.", "Commands are simplified to provide ease of use for users."],
        skillsUsed: [CPPIcon,SQLIcon,GithubIcon],
        linkToProject: "https://github.com/j-leidy"
    }
}