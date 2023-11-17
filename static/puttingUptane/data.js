
import { FaStar} from 'react-icons/fa';
import {AiOutlineDeploymentUnit} from "react-icons/ai"; 
import {GoVersions} from 'react-icons/go';
import {GrDocumentUpdate} from "react-icons/gr";

const projects = [
    {
        title: "Uptane Standard",
        icon: GoVersions,
        description: "The set of requirements necessary for the secure implementation of the framework.",
        link: "docs/standard/uptane-standard",
    },
    {
        title: "Deployment Best Practices",
        icon: AiOutlineDeploymentUnit,
        description: "Examples of best practices for setting up, operating, integrating, and adapting Uptane to work in a variety of situations.",
        link: "docs/deployment/best-practices",
    },
    {
        title: "POUFs",
        icon: FaStar,
        description: "A mechanism to describe the protocols, operations, usage, and formats of an Uptane implementation.",
        link: "/enhancements/pouf/pouf-main",
    },
    {
        title: "PUREs",
        icon: GrDocumentUpdate,
        description: "A vehicle for proposing an addition to or modification of the Uptane Standard.",
        link: "/enhancements/pures/pure1",
    },
];


export default { projects };
