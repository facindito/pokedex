import { useRoute, Link } from 'wouter'
export default function ActiveLink (props) {
  const [isActive] = useRoute(props.href)
  return (
    <Link {...props}>
      <a href='/' className={isActive ? 'active' : ''}>
        {props.children}
      </a>
    </Link>
  )
}
