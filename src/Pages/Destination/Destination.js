import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Destination() {
    const destination = useLoaderData();
    console.log(destination)
    return (
        <div>
            <h1>{destination.place_name}</h1>
        </div>
    )
}
