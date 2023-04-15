
import { Button } from '@/components/button/Button'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button as={Link} href="/test" color='success'>Hallo</Button>
      <Link href="/test">adadada</Link>
    </main>
  )
}