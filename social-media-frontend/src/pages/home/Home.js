import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from '../../components/topbar/Topbar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import './Home.css'
export default function Home() {
    return (
        <div>
           <Topbar></Topbar>
               <div className="homeContainer">
               <Sidebar />
               <Feed></Feed>
               <Rightbar></Rightbar>
               </div>
        </div>
    )
}
