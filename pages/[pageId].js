import Image from 'next/image'
import {
    firstSection,
    socials,
    pageHeader,
    mainContainer,
    pageInfo,
    detail,
    detailSpan,
    pa,
    heading

} from '../styles/singlePage.module.css'
import axios from 'axios'
import {useState,useEffect} from 'react'

const singleNews = ({onePost}) => {
    const [post, setPost] = useState(onePost)
  return (
    <>
        <section className={firstSection}>
            <div className={pageHeader}><h1>{post.title.rendered}</h1></div>
            <div className={mainContainer}>
                <div className={socials}></div>
                <Image src={`${post.jetpack_featured_media_url}`} alt="logo" width={1300} height={490}/>
                <div className={pageInfo}>
                    <div className={detail}><Image src="/images/user-square.svg" alt="logo" width={20} height={20}/><span className={detailSpan}>Solomon James</span></div>
                    <div className={detail}><Image src="/images/calendar-2.svg" alt="logo" width={20} height={20}/><span className={detailSpan}>1 March 2022</span></div>
                    <div className={detail}><Image src="/images/clock.svg" alt="logo" width={20} height={20}/><span className={detailSpan}>6mins Read</span></div>
                </div>
                <article>
                    <p className={pa}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vitae iaculis nisi. 
                        Praesent varius diam nisi, sit amet mollis dolor pharetra sit amet. 
                        Suspendisse porttitor viverra nunc nec ultrices.
                        Nam venenatis quis massa at tempus. Suspendisse pretium metus magna,
                        Sed aliquam dui est, auctor egestas turpis dictum a. Mauris sodales iaculis mauris et feugiat. In aliquam mi lacinia massa egestas rutrum.

                    </p>
                </article>
            </div>
        </section>
        <section className={firstSection}>
            <h2 className={heading}>Reader Comments</h2>
            <hr/>
        </section>
    </>
  )
}

singleNews.getInitialProps=async(ctx)=>{
    try {
        const {pageId} = ctx.query;
        const res = await axios.get(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${pageId}`);

        return {onePost:res.data}
    } catch (error) {
        return {errorLoading:true}
    }
}


export default singleNews