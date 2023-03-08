 
 import '../css/nav.css'
 import{Route, Routes} from 'react-router-dom'
 import{NavLink} from 'react-router-dom'
import BodyComponent from './BodyCompoment';
import Register from './Register';


function NavComponent() {
    return(
    
        <div>
    <div className='nav'>
       <div className='home'>
       <NavLink to="/home"><div> Kalvium </div></NavLink>
       </div>
       <div className='routes'>
       <NavLink to="/contacts"><div> Contacts </div></NavLink>
       <NavLink to="/registration"><div> Registration </div></NavLink>
       </div>
   </div>

<Routes>
    <Route path='/home' element = {<BodyComponent data='Home'/>}/>
    <Route path='/contacts' element = {<BodyComponent data='Contacts'/>}/>
    <Route path='/registration' element = {<Register/>}/>  
</Routes>
   
        </div>

)
    
    

    ;
}


export default NavComponent;