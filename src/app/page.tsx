import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <Link href='/registration/basic'>/registration/basic</Link>
        </li>
        <li>
          <Link href='/registration/addition'>/registration/addition</Link>
        </li>
      </ul>
    </main>
  )
}
