import { Fragment,useContext } from "react";
import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from "../../../assets/crown.svg"
import './navigation.styles.scss'
import {UserContext} from '../../../context/user.context'
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () =>{
    const {currentUser, setCurrentUser} = useContext(UserContext);
    console.log(currentUser);
    
    /**
     * we are still setting the user when it signs out
     * we no longer has to do it
     * as the moment the user will sign out our auth state change listner will catch it 
     */
    // const signOutHandler = async() =>{
    //     const res= await signOutUser();
    //     setCurrentUser(null);
    // }
    return(
        <Fragment>
            <div className='navigation'>
                <Link className= 'logo-containert' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
            <div className='nav-links-container'>
                <Link className= 'nav-link' to='/shop'>
                    SHOP
                </Link>
                { currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ):( 
                        <Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>
                        )
                }
             </div>
            </div> 
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;