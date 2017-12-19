import Link from 'next/link'

export default (props) => (
  <li>
    <Link as={`p/${props.title}`} href={`post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
