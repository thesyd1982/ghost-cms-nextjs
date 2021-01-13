import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.scss'

const BLOG_URL = 'https://ghost-backend-masjidalkawthar.herokuapp.com'
const CONTENT_API_KEY = process.env.CONTENT_API_KEY


type Post = {
    title: string,
    slug:string,
    html:string
}


const getPost  = async (slug:string)=>{
    const res  = await fetch(`${BLOG_URL}/ghost/api/v3/content/tags/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`)
    const {posts}  = await res.json()
    return posts[0]
} 

export const getStaticProps = async ({ params }) => {
	const post = await getPost(params.slug)
	return {
        props: { post },
        revalidate:10
		
	}
}
export const getStaticPaths = async () => {
    return { paths:[], fallback:true}
}

const Post:React.FC<{post:Post}> = ({post}) =>{
    
    const router = useRouter()
    if(router.isFallback)  { return <h1>...Loading</h1>}
     else {return <div  className={styles.container}>
         <Link href='/'><a>{`go Back`}</a></Link><h1>{post.title}</h1>
         <div dangerouslySetInnerHTML = {{__html:post.html}}></div></div>}
}
export default Post