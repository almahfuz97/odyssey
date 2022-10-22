import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import coxsBazar from '../../assets/Rectangle1.png'

export default function Home() {
    const navigate = useNavigate();
    const places = useLoaderData();
    const totalPlaces = places.length;
    const [index, setIndex] = useState(0);
    const place = places[index];

    // background styles
    const backgroundStyle = {
        backgroundImage: `url('${place.img_url}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    };

    const handleNext = () => {
        if (index === totalPlaces - 1) setIndex(0);
        else setIndex(prev => prev + 1);
    }
    const handlePrev = () => {
        if (index === 0) setIndex(totalPlaces - 1);
        else setIndex(prev => prev - 1);
    }

    const handleBooking = () => {
        // const route = `/:`
        navigate(`/destination/${place.id}`);
    }
    return (
        <div style={backgroundStyle}
            className={` bg-[#00000099] bg-blend-darken bg-cover h-screen px-8 py-4 pt-32`}>
            <div className='flex'>
                <div className='bg-opacity-50 w-1/2'>
                    <h1 className=' text-white font-bold text-3xl'>{place.place_name}</h1>
                    <p className=' text-white'> {place.description}</p>
                    <button onClick={handleBooking} className='text-white font-bold border p-4 px-8 rounded mt-8 shadow shadow-white'> Booking </button>                </div>
                <div className='w-1/2 flex justify-center'>
                    <div style={backgroundStyle} className=' border w-96 h-72 bg-cover bg-no-repeat bg-[#00000079] bg-blend-darken  flex justify-center items-center rounded-lg  '>
                        <h2 className=' text-white font-bold'>{place.place_name}</h2>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-16'>
                <div>
                    <button onClick={handlePrev} className='text-white font-bold border p-2 rounded mr-2'> prev </button>
                    <button onClick={handleNext} className='text-white font-bold border p-2 rounded'> Next </button>
                </div>
            </div>

        </div>
    )
}
