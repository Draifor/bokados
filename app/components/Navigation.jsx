import Link from 'next/link'

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Menús', path: '/menus' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

export default function Navigation () {
  return (
    <nav>
      <ul className='list-none m-2 flex flex-wrap gap-3'>
        {navigationItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.name.toLocaleUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
