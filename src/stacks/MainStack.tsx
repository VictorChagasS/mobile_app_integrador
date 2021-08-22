import React from 'react'


import AuthRoutes from './auth.routes' 
import { useAuth } from '../hooks/auth'
import MainTab from './MainTab'
import Preload from '../screens/Preload'
const Routes: React.FC = () => {
    const {user,loading} = useAuth()
    if (loading){
        return(
            <Preload></Preload>
        )
    }
    return user ? <MainTab/>:<AuthRoutes/>
}

export default Routes