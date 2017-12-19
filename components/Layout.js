import Header from './Header'

const layoutStyles = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

export default (props) => (
  <div style={layoutStyles}>
    <Header />
    {props.children}
  </div>
)
