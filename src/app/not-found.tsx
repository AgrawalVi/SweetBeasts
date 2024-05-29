import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col w-screen items-center h-screen flex-grow justify-center space-y-4'>
      <h2 className='text-2xl '>404 - PAGE NOT FOUND</h2>
      <p>This page does not exist</p>
      <Link href="/"><Button>Return Home</Button></Link>
    </div>
  )
}
