import { Input } from 'postcss'
import React from 'react'
import Image from '../assets/avatar.png'
import { FcGoogle } from 'react-icons/fc'

import { CgMenuRight } from 'react-icons/cg'
import { BiLogIn } from 'react-icons/bi'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const SearchBox = ({ handleSearch }) => {
  const [isActive, setIsActive] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const loginWithGoogle=()=>{
    loginWithRedirect();
    setIsActive(prev=>!prev);
  }
  const logOutFromGoogle=()=>{
    logout({ logoutParams: { returnTo: window.location.origin } });
    setIsActive(prev=>!prev);
  }
  console.log(isAuthenticated);
  console.log(user);
  return (

    <>
      <div className='flex bg-[#dce1e7] dark:bg-[#171c26] text-3xl rounded-full  items-center  mt-6 px-3 pr-1'>
        <CgMenuRight className='text-2xl dark:text-[#dce1e7] text-[#171c26] ' />
        <input type="text" name="" id="" className=' bg-[#dce1e7] dark:bg-[#171c26]  w-full h-12 p-2 focus:outline-none  text-sm rounded-2xl  font-Roboto text-[#000000] dark:text-[#dce1e7]  placeholder:dark:text-[#dce1e7] placeholder:text-[#000000] placeholder:tracking-tighter	' placeholder='Search your notes' onChange={(e) => handleSearch(e.target.value)} />
        <div className=' h-10 w-12 rounded-3xl text-xs flex items-center justify-center object-fit cursor-pointer'>
         {isAuthenticated?
         <img src={user.picture} alt="" className='  h-10 w-10 object-cover rounded-full' onClick={() => setIsActive(prev => !prev)} />
        :
        <img src={Image} alt="" className='  h-10 w-10 object-cover rounded-full' onClick={() => setIsActive(prev => !prev)} />


        } 

          {isAuthenticated ?
            <>
              {
                isActive ?
                  <div className=' flex flex-row text-xl items-center w-40 h-12 rounded-md  top-32 right-5 lg:right-24 fixed bg-[#18191a] transition-transform duration-150 text-text-primary hover:bg-[#252929] ' onClick={logOutFromGoogle} >
                   <button className=' h-12  flex  items-center gap-5 cursor-pointer   ' >
                      <div className='bg-text-primary h-full w-10 flex items-center justify-center rounded-l-md'>
                        <BiLogIn  color='#000000'/>
                      </div>
                      <div className='text-sm font-Chakra'>
                        Log out
                      </div>
                    </button>
                  </div>
                  :
                  <div>

                  </div>
              }
            </>
            :
            <>
              {
                isActive ?
                  <div className=' flex flex-row text-xl items-center w-40 h-12 rounded-md  top-32 right-5 lg:right-24 fixed bg-[#18191a] transition-transform duration-150 text-text-primary hover:bg-[#252929] ' onClick={loginWithGoogle} >
                    <button className=' h-12  flex items-center gap-1 cursor-pointer   ' >
                      <div className='bg-text-primary h-full w-10 flex items-center justify-center rounded-l-md'>
                        <FcGoogle />
                      </div>
                      <div className='text-xs'>
                        Sign in with Google
                      </div>
                    </button>
                  </div>
                  :
                  <div>

                  </div>
              }

            </>
          }


        </div>
      </div>
    </>
  )
}

export default SearchBox