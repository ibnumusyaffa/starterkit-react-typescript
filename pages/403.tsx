import { useRouter } from 'next/router'

import { Button } from '@/components/button'

export default function Example() {
  const router = useRouter()
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-600">403</h1>

          <p className="mt-6 text-base leading-7 text-gray-600">
            Anda tidak mempunya akses ke halaman ini
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className='px-7' onClick={() => router.back()}>
              Kembali
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
