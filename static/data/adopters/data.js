import { MdDesignServices } from 'react-icons/md';
import { GrDocumentThreat } from 'react-icons/gr';
import { BsClockHistory } from 'react-icons/bs';
import { MdOutlinePublish } from 'react-icons/md';
import {TfiLayoutMediaOverlayAlt2} from 'react-icons/tfi';
import {SiMercadopago} from 'react-icons/si';

const projects = [
    {
        title: "Design",
        icon: MdDesignServices,
        description: "A thumbnail sketch of how Uptane works",
        link: "/learn-more/design",
    },
    {
        title: "Threat Model",
        icon: GrDocumentThreat,
        description: "An overview of the range of threats Uptane can prevent or deflect.",
        link: "/learn-more/threat",
    },
    {
        title: "History",
        icon: BsClockHistory,
        description: "Important milestones in the development of the Uptane project.",
        link: "/learn-more/history",
    },
    {
        title: "Publications",
        icon: MdOutlinePublish,
        description: "Links to conference papers, journal articles and whitepapers.",
        link: "/learn-more/publications",
    },
    {
        title: "Press",
        icon: TfiLayoutMediaOverlayAlt2,
        description: "Articles about Uptane in technical and general media",
        link: "/learn-more/press",
    },
    {
        title: "Adoptions",
        icon: SiMercadopago,
        description: "A list of Uptane adopters.",
        link: "/learn-more/adoptions",
    },
];


export default { projects };