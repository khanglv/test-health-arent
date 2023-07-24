import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center hover">
      <Image src={logo} alt="Airdrop logo" width={100} height={100} />
    </Link>
  )
}