import React, { useEffect, useState } from 'react'
import "./Sports.css"
import axios from 'axios'

export default function Sports() {

    const[sports,Setsports]=useState([])

    useEffect(()=>{
        axios.get('https://gnews.io/api/v4/top-headlines?category=sports&lang=en&apikey=16b68d66d05960a017a25800790ec6e2')
        .then((response)=>{
            console.log(response.data.response);
            Setsports(response.data.articles)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    const date = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long',  };
const formattedDate = date.toLocaleDateString('en-GB', options);
console.log(formattedDate);

  return (
    <>
<div className='container-fluid sports'>
    <h1 className='shead'>Sports News</h1> 
    <p className='sportsdate'>{formattedDate}</p>

    <div className='sportsrow'>
        {sports.map((items)=>(

<div className='sportscol'>
<img src={items.image} className='sportsimg'onError={(event)=>event.target.src='/images/newsimage1.jpg'}/>

<a href={items.source.url} className='linksports' target='_blank'>
<h2 className='stitle'>{items.title}</h2>
</a>

<h4 className='sourcename'><span className='sbyspan'>by</span>{items.source.name}</h4>
<h4 className='publish'>{items.publishedAt}</h4>
</div>

        ))}
       
    </div>
</div>

    </>
  )
}
