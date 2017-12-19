import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

const titles = ['Hello Next.js', 'Learn Next.js', 'Next.js is Awesome']

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {
        titles.map(title => (
          <PostLink title={title} />
        ))
      }
    </ul>
  </Layout>
)
