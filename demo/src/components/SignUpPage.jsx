import React from 'react';
import { FaUser, FaLock, FaKey, FaCheck } from 'react-icons/fa';

const SignUpForm = () => {
  
    return (

      <div className='h-screen bg-[#000033]'
      style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://img.freepik.com/free-vector/gradient-futuristic-background-with-connection-concept_23-2149104857.jpg?t=st=1708964383~exp=1708967983~hmac=6bfae60619269375d18e6bfd4f88e6827d22105f8dd026e1b837cc124cb57eb9&w=826')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity:'50'
       }}>

        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-md w-full px-6 py-8 shadow-md rounded-lg">
                
                <div className="flex justify-center mb-6">
                    <img className="h-[150px] w-[150px]" src="logo.png" alt="Logo" />
                </div>
                
                <form className="space-y-7">
                    <div className="relative">
                        <label htmlFor="username" className="block text-md font-sans text-white">
                            <FaUser className="absolute h-5 w-5 text-gray-100" />
                            <span className="pl-6">Username</span>
                        </label>
                        <input id="username" name="username" type="text" autoComplete="username" required className="mt-1 block w-full p-3 sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-md font-sans text-white">
                            <FaLock className="absolute h-5 w-5 text-gray-100" />
                            <span className="pl-6">Password</span>
                        </label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required className="mt-1  block w-full p-3 sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="relative">
                        <label htmlFor="confirm-password" className="block text-md font-sans text-white">
                            <FaCheck className="absolute h-5 w-5 text-gray-100" />
                            <span className="pl-6">Confirm Password</span>
                        </label>
                        <input id="confirm-password" name="confirm-password" type="password" autoComplete="confirm-password" required className="mt-1  block w-full p-3 sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <button type="submit" className=" font-sans w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-black bg-[rgb(239,104,8)] hover:bg-[rgb(155,71,10)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign up
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="text-md text-white mr-2 font-sans">Or sign up with</span>
                        <button type="button" className="p-2 bg-white rounded-full shadow-md">
                            <img className="h-6 w-6" src="googleicon.png" alt="Google" />
                        </button>
                    </div>
                </form>


                <div className="mt-4 text-center text-sm">
                    <span className="text-white font-sans">Already have an account? </span>
                    <a href="/LoginPage" className="font-semibold font-sans text-[rgb(24,204,216)] hover:text-[rgb(10,131,139)] text-md">
                        Login
                    </a>
                </div>
            </div>
        </div>
      </div>
    );
};

export default SignUpForm;
