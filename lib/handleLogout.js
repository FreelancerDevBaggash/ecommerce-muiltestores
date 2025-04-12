import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

export default async function handleLogout(){
    const router = useRouter()
  await signOut()
  router.push("/")
 }