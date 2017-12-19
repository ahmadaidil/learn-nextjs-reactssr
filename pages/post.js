import Layout from '../components/Layout'
import Content from '../components/Content'

export default (props) => (
  <Layout>
    <Content id={props.id} title={props.url.query.title} />
  </Layout>
)
