import {Outlet,Link} from 'react-router-dom'  
import Header from '../Header'
import Sidebar from '../Sidebar'

const Layout=()=>{

    return(
        <div>
            <Header/>
            <Outlet/>
            <Sidebar/>
        </div>
    )
}


export default Layout;