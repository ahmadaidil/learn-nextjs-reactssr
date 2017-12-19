import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

const posts = [
  {
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  },
  {
    id: 'learn-nextjs',
    title: 'Learn Next.js'
  },
  {
    id: 'nextjs-is-awesome',
    title: 'Next.js is Awesome'
  }
]

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {
        posts.map((post, key) => (
          <PostLink id={post.id} title={post.title} key={key} />
        ))
      }
    </ul>
  </Layout>
)
