import Layout from '../components/Layout'
import Content from '../components/Content'

import fetch from 'isomorphic-unfetch'

const Post = (props) => (
  <Layout>
    <Content name={props.show.name} summary={props.show.summary} img={props.show.image.medium} />
  </Layout>
)

Post.getInitialProps = async (context) => {
  const
    { id } = context.query,
    res = await fetch(`https://api.tvmaze.com/shows/${id}`),
    show = await res.json()
  console.log(`Fetched show: ${show.name}`)
  return { show }
}

export default Post
