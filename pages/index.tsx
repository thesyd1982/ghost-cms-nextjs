import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Layout from '../containers/layout'
import {getSettings, getPosts, getPages} from '../utils/getData'
import Prayers from '../components/prayers'
import WelcomeSection from '../components/welcome.section'
import OurValuesSection from '../components/our-values.section'

type Post ={
  title:string,
  slug:string,excerpt:string,reading_time:string,
}


type Page ={
  title:string,
  slug:string,
}

type Pnps = {
posts:Post[], pages:Page[]
}






export const getStaticProps =async () =>{
const settings = await getSettings()
const posts = await getPosts()
const pages = await getPages()

return { props: {posts,pages, settings}}
}

 
const Home:React.FC<{props:Pnps}>=(props) =>  {
  const {pages=[], settings={}} = {...props}
  const nav ={...settings} 
  const header ={...settings}

  return (

  <Layout menu={nav} header={header} footer={pages}>
    <main className={styles.main}>
    {/* <div className={styles.container}>
    
     <ul>
       {
         pages.map((page)=>(
         <li key={page.slug}>
           <Link href={`/${page.slug}`} as ={`/${page.slug}`}><a>{page.title}</a></Link> 
         </li>) )
       }
     </ul> */}
     {/* <ul>
       {
         postsData['posts'].map((post)=>(
         <li key={post.slug}>
           <Link href={`/post/${post.slug}`} as ={`/post/${post.slug}`}><a>{post.title}</a></Link> 
         </li>) )

       }
     </ul> */}
    < div className={styles["section-1"]}>
    <Prayers /><WelcomeSection/>
    </div>
    < div className={styles["section-2"]}>
    <OurValuesSection/>
    </div>
    
    </main> 
    </Layout>
  )
}

export default Home