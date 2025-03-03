import path from "./path";
import icons from "./icons";

const {MdOutlineLibraryMusic, MdOutlineFeed ,AiOutlinePieChart ,TbChartArcs} =icons

export const SidebarMenu =[
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <TbChartArcs size={24}/>
    },
    
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <AiOutlinePieChart size={24}/>
    },
    
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdOutlineFeed size={24}/>
    }
    
]