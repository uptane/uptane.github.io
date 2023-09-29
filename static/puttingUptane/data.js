
import { FaStar} from 'react-icons/fa';
import {AiOutlineDeploymentUnit} from "react-icons/ai"; 
import {GoVersions} from 'react-icons/go';
import {GrDocumentUpdate} from "react-icons/gr";

const projects = [
    {
        title: "Uptane Standard",
        icon: GoVersions,
        description: "Short Description about Uptane Standard",
        link: "docs/standard/uptane-standard",
    },
    {
        title: "Deployment Bestt Practices",
        icon: AiOutlineDeploymentUnit,
        description: "Short Description about Deployment Best Practices.",
        link: "docs/deployment/best-practices",
    },
    {
        title: "POUFs",
        icon: FaStar,
        description: "Open source standard for runtime security for hosts",
        link: "docs/enhancements/pouf/pouf-main",
    },
    {
        title: "PUREs",
        icon: GrDocumentUpdate,
        description: "Short Description about Deployment Best PUREs.",
        link: "docs/enhancements/pures/pure1",
    },
];


export default { projects };