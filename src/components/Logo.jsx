import Image from 'next/image'
import linkmateLogo from '@/images/linkmateLogo.svg'

export function Logo(props) {
  return (
    // I want to return a image on /images/linkmateLogo.svg
    <Image src={linkmateLogo} alt="Linkmate" {...props} />
  )
}
