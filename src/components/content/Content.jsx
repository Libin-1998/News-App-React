import React, { useEffect, useState } from 'react'
import './Content.css'
import axios from 'axios'

export default function Content() {

    const[news,Setnews]=useState([])

    useEffect(()=>{
        axios.get('https://gnews.io/api/v4/search?q=example&apikey=16b68d66d05960a017a25800790ec6e2 ')
        .then((response)=>{
            console.log(response);
            Setnews(response.data.articles)

        })
        .catch((error)=>{
            console.log(error);
        })

    },[])

//     const date = new Date();
// const day = date.getDate();
// const month = date.toLocaleString('default', { month: 'long' });
// const year = date.getFullYear();
// const formattedDate = `${day} ${month} ${year}`;
// console.log(formattedDate);

const date = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long',  };
const formattedDate = date.toLocaleDateString('en-GB', options);
console.log(formattedDate);

  return (
    <>
<div className='container-fluid navnews'>

  <p className='paradate'>
{formattedDate}</p>

<div class="newscard">

{news.map((gnews)=>(

<div class="firstcard">
<a href={gnews.source.url} className='titlelink' target='_blank'>
  <img src={gnews.image} className='newsimg' />
  <h2 className='titlefont'>{gnews.title}</h2>
  </a>

  <h4 className='sourcefont'><span className='byspan'>by</span> {gnews.source.name}</h4>
  <h4 className='newsdate'>{gnews.publishedAt.split('T')[0]}</h4>
</div>

))}
</div>

  <div className='firstrows'>
    <div className='onecolumn'>
<img src="/newsimg.jpg" alt="" className='imgnews' onError={(event)=>event.target.src='/images/newsimage1.jpg'}/>

    <div className='insidecolumn'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequatur doloribus amet reiciendis quas. Beatae, pariatur ab modi ullam aliquid molestias provident. Autem odio quia ex officia aut dolores quidem.
    </div>
    </div>

      <div className='twocolumn'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut rem in pariatur voluptate doloremque tempora odit illo explicabo consequatur?
      </div>
      </div>

  </div>  
    </>
  )
}
