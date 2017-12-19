import PostLink from './PostLink'

// import fetch from 'isomorphic-unfetch'

export default (props) => (
  <ul>
    {props.shows.map(({show}, idx) => (
      <PostLink key={idx} id={show.id} title={show.name} />
    ))}
  </ul>
)
