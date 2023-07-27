import { Costomer, Dashbord, Ticket,Feedback,  Quicksale,Setting, Report, Appoitment, Campigns } from "../Pages";

import { HiOutlineClipboardDocumentList as Hicbd } from 'react-icons/hi2';
import { MdOutlineCampaign as Mdc, MdInventory as Mdi } from 'react-icons/md';
import { FaFileInvoiceDollar as Fai } from 'react-icons/fa';
import { AiOutlineBarChart as Air, AiFillSetting as Ais, AiFillDashboard as Aid } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { AirplaneTicket, BookmarkOutlined, CalendarMonthRounded, CalendarViewDayRounded } from "@mui/icons-material";
import { randomColor as rc } from "../Utils";
// import { CalendarApi } from "@fullcalendar/common";
export const routes = {
    dashbord: '/',
    quicksale: '/quicksale',
    appointment: '/appointment',
    costomer: '/costomer',
    campigns: '/campigns',
    report: '/report',
    settings: '/settings',
    ticket: '/ticket',
    feedback: '/feedback',
    staffProfile: '/staffProfile',

    //Campin Detail Page 
    offers: '/offers',
    voucher: '/voucher',
    targetaudience: '/targetaudience',
    wish: '/wish',

    // Setting //Business Settings
    Storemanager: 'Storemanager',
    StoreClosedate: 'StoreClosedate',
    ManageStoreTime: 'ManageStoreTime',
    StoreNotyfication: 'StoreNotyfication',
    Expense: 'Expense',
    Security: 'Security',
    StaffAttendence: 'StaffAttendence',

    // Setting //Module Level Settings
    InvoiceManger: "invoicemanager",
    CostomerManger: "CostumerManager",
    StuffManger: "StaffManager",
    UserManger: "UserManger",
    ProductManger: "productManager",
    ServiceManger: "SericeManager",
    RewardPointManager: "RewardPointManager",
    MembershipeManager: "MembershipeManager",
    PakgeManager: "PakgeManager",

    // Setting //Data & Migration Settings
    UplodeCostumerData: "UplodeCostumerData",
    UplodeMasterData: "UplodeMasterData",

    // Setting //Store Service
    Inventory: "Inventory",
    VenderManager: "VenderManager",
    CaseRegister: "CaseRegister",
    OnlineAppointment: "OnlineAppointment",

    // Setting //3rd Party Integrate Service
    SmsServices: "SmsServices",
    WhatsappServices: "WhatsappServices",
    DailySoftwareTask: "DailySoftwareTask",

    // Setting //Website
    WebsiteManager:"Settings/WebsiteManager"
}

export default [
    { path: routes.dashbord, tag: 'Dashbord', element: (e) => <Dashbord header={e} />, icon: <Aid color={"gray"} size={20} style={{ marginRight: 10 }} /> },
    { path: routes.quicksale, tag: 'Quick Sale', element: (e) => <Quicksale header={e} />, icon: <Fai color={"gray"} size={20} style={{ marginRight: 10 }} /> },
    { path: routes.appointment, tag: 'Appointment', element: (e) => <Appoitment header={e} />, icon: <CalendarMonthRounded color={"gray"} size={20} style={{ marginRight: 10 }} /> },
    { path: routes.costomer, tag: 'Costomer', element: (e) => <Costomer header={e} />, icon: <GoPerson color={"gray"} size={20} style={{ marginRight: 10 }} /> },
    { path: routes.campigns, tag: 'Campigns', element: (e) => <Campigns header={e} />, icon: <Mdc color={"gray"} size={20} style={{ marginRight: 10 }} /> },
    { path: routes.report, tag: 'Report', element: (e) => <Report header={e} />, icon: <Air color={"gray"} size={20} style={{ marginRight: 10 }} /> },
    { path: routes.settings, tag: 'Settings', element: (e) => <Setting header={e} />, icon: <Ais color={"gray"} size={20} style={{ marginRight: 10 }} /> },
    { path: routes.ticket, tag: 'Ticket', element: (e) => <Ticket header={e} />, icon: <AirplaneTicket color={"gray"} size={20} style={{ marginRight: 10 }} /> },
    { path: routes.feedback, tag: 'Feedback', element: (e) => <Feedback header={e} />, icon: <Hicbd color={"gray"} size={20} style={{ marginRight: 10 }} /> },
];
