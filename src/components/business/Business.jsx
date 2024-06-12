import React, { useEffect, useState } from 'react'
import './Business.css'
import axios from 'axios'

export default function Business() {

    const[list,Setlist]=useState([])
    useEffect(()=>{

    axios.get('https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=16b68d66d05960a017a25800790ec6e2')
    .then((response)=>{
        console.log(response);
        Setlist(response.data.articles)
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
    <div className='container-fluid business'>
        <h1 className='business head'>Business News</h1>
       <p className='businesspara'>{formattedDate}</p> 

       <div className='bsnsrow'>

        {list.map((item)=>(
        <div className='bsnscol'>
            <img src={item.image} className='bsnsimg'onError={(event)=>event.target.src='/images/newsimage1.jpg'} />

            <a href={item.source.url} className='linkbsns' target='_blank'>
            <h2 className='bsnstitle'>{item.title}</h2>
            </a>

            <h4 className='bsnssource'><span className='bsnsby'>by</span> {item.source.name}</h4>
            <h4 className='bsnspublish'>{item.publishedAt.substring(0,10)}</h4>

        </div>
))} 
    </div>
</div>
      
    </>
  )
}
