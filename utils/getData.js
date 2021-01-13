const BLOG_URL = "https://ghost-backend-masjidalkawthar.herokuapp.com"
const CONTENT_API_KEY = process.env.CONTENT_API_KEY

export const getSettings = async () => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/settings/?key=${CONTENT_API_KEY}`
  )
  const data = await res.json()
  return data.settings
}

export const getPosts = async () => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,reading_time`
  )
  const data = await res.json()

  return data.posts
}

export const getPages = async () => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/pages/?key=${CONTENT_API_KEY}&fields=title,slug`
  )
  const data = await res.json()

  return data.pages
}

export const getPage = async (slug) => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/pages/slug/${slug}?key=${CONTENT_API_KEY}`
  )
  const data = await res.json()
  return data.pages[0]
}
