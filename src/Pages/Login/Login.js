import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import React, { useContext } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider'

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export default function Login() {
    const { signInWithGoogle, signInWithFacebook, user, loading } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    console.log(user)
    const from = location.state?.from?.pathname || '/';

    const handleGoogle = () => {
        signInWithGoogle(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.log(err))
    }

    const handleFacebook = () => {
        signInWithFacebook(facebookAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.log(err))
    }


    if (user?.uid) return <Navigate to={from} replace={true} />
    if (loading) return <h2>Loading...</h2>
    return (
        <div className='pt-32 px-8 flex justify-center'>
            <div className='border p-8'>
                <h1 className=' font-bold mb-4'>Login</h1>
                <form action="">
                    <input type="email" name="email" placeholder='Your email' className='p-2 block rounded-md mb-4 bg-slate-200 shadow w-full' />
                    <input type="password" name="password" placeholder='Your email' className='p-2 block rounded-md mb-2  bg-slate-200 focus:bg-slate-200 shadow w-full' />
                    <button type="submit" className='border w-full mt-8 rounded p-2 bg-orange-300 font-bold shadow text-white cursor-pointer'>Login</button>
                </form>
                <button onClick={handleGoogle} className='border w-full mt-8 rounded p-2 bg-transparent-300 font-bold shadow text-orange-300 cursor-pointer'>Continue with google</button>
                <button onClick={handleFacebook} className='border w-full mt-8 rounded p-2 bg-transparent font-bold shadow text-orange-300 cursor-pointer'>Continue with Facebook</button>
            </div>
        </div>
    )
}
