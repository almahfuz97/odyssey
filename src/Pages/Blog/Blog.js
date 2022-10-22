import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Blog() {
    const catergories = useLoaderData();
    console.log(catergories.length)
    return (
        <div>
            <h1>This is blog page {catergories.length}</h1>
        </div>
    )
}
