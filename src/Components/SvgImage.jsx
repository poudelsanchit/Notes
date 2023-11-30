import React from 'react'
import Image from '../assets/random.svg'
import Image2 from '../assets/obito.jpg'

const SvgImage = () => {
    return (
        <div className="flex w-screen justify-center items-center h-screen">
        <div className='bg-[url("src/assets/random.svg")] bg-cover bg-center h-96 w-96 flex justify-center items-center'>
            <img src={Image2} alt="" className='h-20'/>
        </div>
      </div>

    )
}

export default SvgImage