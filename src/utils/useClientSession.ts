import { useSession } from 'next-auth/react'

type User = {
  name?: string
  email?: string
  image?: string
  id?: string
  role?: string
}
export const useClientSession = () => {
  const session = useSession()
  return session?.data?.user as User
}
