import { Costomer, Dashbord, Inventory, Login, Quicksale, Report, Resetpassword, Setting,Appoitment,Campigns } from "../Pages";

import { HiOutlineClipboardDocumentList as Hicbd } from 'react-icons/hi2';
import { MdOutlineCampaign as Mdc,MdInventory as Mdi } from 'react-icons/md';
import { FaFileInvoiceDollar as Fai } from 'react-icons/fa';
import { AiOutlineBarChart as Air,AiFillSetting as Ais,AiFillDashboard as Aid } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { randomColor as rc } from "../Utils";

export const routes={
    dashbord:'/',
    quicksale:'/quicksale',
    appointment:'/appointment',
    costomer:'/costomer',
    campigns:'/campigns',
    report:'/report',
    settings:'/settings',
    inventory:'/inventory',
    
    ServiceManger:'servicemanager',
    InvoiceManger:'invoicemanager',
    CostomerManger:'Costomermanager',
    StuffManger:'Stuffmanager',
    UserManger:'Usermanager',
    ProductManger:'Productmanager',
    StoreManger:'Storemanager',
}

export default [
    {path:routes.dashbord,tag:'Dashbord',element:(e)=><Dashbord header={e}/>,icon:<Aid color={"gray"} size={20} style={{marginRight:10}}/>},
    {path:routes.quicksale,tag:'Quick Sale',element:(e)=><Quicksale header={e}/>,icon:<Fai color={"gray"} size={20} style={{marginRight:10}}/>},
    {path:routes.appointment,tag:'Appointment',element:(e)=><Appoitment header={e}/>,icon:<Hicbd color={"gray"} size={20} style={{marginRight:10}}/>},
    {path:routes.costomer,tag:'Costomer',element:(e)=><Costomer header={e}/>,icon:<GoPerson color={"gray"} size={20} style={{marginRight:10}}/>},
    {path:routes.campigns,tag:'Campigns',element:(e)=><Campigns header={e}/>,icon:<Mdc color={"gray"} size={20} style={{marginRight:10}}/>},
    {path:routes.report,tag:'Report',element:(e)=><Report header={e}/>,icon:<Air color={"gray"} size={20} style={{marginRight:10}}/>},
    {path:routes.settings,tag:'Settings',element:(e)=><Setting header={e}/>,icon:<Ais color={"gray"} size={20} style={{marginRight:10}}/>},
    {path:routes.inventory,tag:'Inventory',element:(e)=><Inventory header={e}/>,icon:<Hicbd color={"gray"} size={20} style={{marginRight:10}}/>},
];