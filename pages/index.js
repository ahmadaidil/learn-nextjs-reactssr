import Layout from '../components/Layout'
import PostList from '../components/PostList'

import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>My Blog</h1>
    <PostList shows={props.shows} />
  </Layout>
)

Index.getInitialProps = async () => {
  const
    res = await fetch('https://api.tvmaze.com/search/shows?q=spider-man'),
    data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)
  return {
    shows: data
  }
}

export default Index
