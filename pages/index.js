import Image from 'next/image'
import {useState,useEffect} from 'react'
import {
  firstSection,
  sectionHeading,
  cardsContainer,
  heading,
  arrowPara,
  videosContainer,
  mainVideoContainer,
  suggestedVideoContainer,
  suggestedVideo,
  thumbnail,
  details,
  cardPara,
  cardHeading

} from '../styles/Home.module.css'
import Card from '../components/Card'
import Link from 'next/link'
import axios from 'axios'


export default function Home({newsdata}) {
  const [news, setNews] = useState(newsdata)
  return (
    <>
      <section className={firstSection}>
        <div className={sectionHeading}>
          <h2 className={heading}>Category Name</h2>
          <p className={arrowPara}>More News<span><Image src="/images/Arrow - Right.svg" alt="logo" width={18} height={10}/></span></p>
        </div>
        <div className={cardsContainer}>
          {news?.map((article,index)=>(
              index<8&&(
              <Card 
                key={article.id} 
                id={article.id}
                image={article.jetpack_featured_media_url} 
                title={article.title.rendered} 
                summary={article.excerpt.rendered}
                />)
          ))}
          {/* <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/> */}
        </div>
      </section>
      <section className={firstSection}>
        <div className={sectionHeading}>
          <h2 className={heading}>Category Name</h2>
          <p className={arrowPara}>More Videos<span><Image src="/images/Arrow - Right.svg" alt="logo" width={18} height={10}/></span></p>
        </div>
        <div className={videosContainer}> 
          <div className={mainVideoContainer}>
            <Image src="/images/Play button.png" alt="logo" width={200} height={70}/>
          </div>
          <div className={suggestedVideoContainer}>
            <div className={suggestedVideo}>
              <div className={thumbnail}>
                <Image src="/images/Rectangle 35.png" alt="logo" width={400} height={275}/>
              </div>
              <div className={details}>
                <h4 className={cardHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                <p className={cardPara}>
                  Nulla quis egestas ipsum. Quisque in mattis lacus. 
                </p>
              </div>
            </div>
            <div className={suggestedVideo}>
              <div className={thumbnail}>
                <Image src="/images/Rectangle 34.png" alt="logo" width={400} height={275}/>
              </div>
              <div className={details}>
                <h4 className={cardHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                <p className={cardPara}>
                  Nulla quis egestas ipsum. Quisque in mattis lacus. 
                </p>
              </div>
            </div>
          </div>
      
        </div>
      </section>
      <section className={firstSection}>
        <div className={sectionHeading}>
          <h2 className={heading}>Category Name</h2>
          <p className={arrowPara}>More Photos<span><Image src="/images/Arrow - Right.svg" alt="logo" width={18} height={10}/></span></p>
        </div>
        <div className={cardsContainer}>
        {news?.map((article,index)=>(
              index<4&&(
              <Card 
                key={article.id} 
                id={article.id}
                image={article.jetpack_featured_media_url} 
                title={article.title.rendered} 
                summary={article.excerpt.rendered}
                />)
          ))}
        </div>
      </section>
    </>
  )
}

Home.getInitialProps=async(ctx)=>{
  try {
      const res = await axios.get(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/`);
      return {newsdata:res.data}
  } catch (error) {
      return {errorLoading:true}
  }
}
