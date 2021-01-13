import Link from 'next/link'
import {useRouter} from 'next/router'
import Layout from '../containers/layout'
import styles from '../styles/Home.module.scss'
import { getPage, getPages, getSettings } from '../utils/getData'


type Page = {
    title: string,
    slug:string,
    html:string
}


export const getStaticProps = async ({ params }) => {
    const settings =await getSettings()
    const page = await getPage(params.slug)
    const pages = await getPages()
	return {
        props:  {settings,page,pages} ,
        revalidate:10
	}
}
export const getStaticPaths = async () => {
    return { paths:[], fallback:true}
}

const Page:React.FC<{page:Page}> = props =>{
  const {page={}, settings={},pages=[]} = {...props}
  const nav ={...settings} 
  const header ={...settings}


    const router = useRouter()
    if(router.isFallback)  { return <h1>...Loading</h1>}
     else {
         
         
return   <Layout menu={nav} header={header} footer={pages}>
             
            <main className={styles.main}>
            <div className={styles.container}>
              <Link href='/'><a>{`go Back`}</a></Link><h1>{page.title}</h1>
                <div dangerouslySetInnerHTML = {{__html:page.html}}>
             </div>
             </div>
             </main>
            </Layout>
         
         
         }
}
export default Page