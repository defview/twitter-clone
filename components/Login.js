import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className='flex flex-col items-center space-y-10 pt-48'>
        <Image 
        src='/ticon.png' 
        width={150} 
        height={150} 
        objectFit='contain' 
        />
        <div>
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <button className='text-sky-500 border-opacity-50 font-semibold rounded-md border
                    border-sky-500 px-5 py-2 transition hover:text-white
                    hover:bg-sky-500 duration-700 ease-in-out hover:shadow-md hover:shadow-sky-500'
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                    >Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Login