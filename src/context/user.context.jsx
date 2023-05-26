import {createContext,
        useState,
        useEffect} from 'react'

import { onAuthStateChangedListener } from '../components/utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});
export const UserProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null);
   const value = {currentUser, setCurrentUser};  
   
   useEffect(()=>{
    
    /**
     * whenever we are going to call this listener 
     * then this callback function is goung to be called
     * at least once
     * future depeds on the changes in the auth
     */
    const unsubscribe =onAuthStateChangedListener((user)=>{
      /**
       * it is just saying whenever the auth changes log this user
       */
      console.log(user);
    })

    return unsubscribe; 
   },[])

   return <UserContext.Provider value= {value}> {children}</UserContext.Provider>
} 
