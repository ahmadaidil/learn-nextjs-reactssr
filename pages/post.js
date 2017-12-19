import Layout from '../components/Layout'
import Content from '../components/Content'

export default (props) => (
  <Layout>
    <Content title={props.url.query.title} />
  </Layout>
)
