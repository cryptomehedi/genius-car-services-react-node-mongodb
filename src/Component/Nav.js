import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification  } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import CustomLink from './CustomLink';

const Nav = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    const [sendEmailVerification] = useSendEmailVerification(auth );
    
    return (
        <nav>
            <ul className={`flex bg-white justify-center w-full sticky font-semibold`}>
                <CustomLink  className="mx-2 md:mx-5" to="/">Home</CustomLink>
                <CustomLink  className="mx-2 md:mx-5" to="/about">About</CustomLink>
                {
                    user ? 
                    <div className='flex'>
                        <p className='mx-2'>{user?.emailVerified ? user?.displayName : <button onClick={()=> sendEmailVerification()} className="font-bold mx-2 text-red-500 border-2 px-2 rounded opacity-75">Please Verify Your Email</button>}</p>
                        <button onClick={handleSignOut} className="font-bold mx-2 text-red-500">Sign Out</button>
                    </div>
                    :
                    <div>
                    <CustomLink  className="mx-2 md:mx-5" to="/login">Login</CustomLink>
                    <CustomLink  className="mx-2 md:mx-5" to="/register">Sign Up</CustomLink>
                    </div>
                }
            </ul>
        </nav>
    );
};

export default Nav;