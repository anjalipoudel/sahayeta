import Image from 'next/image'
import Link from 'next/link'

export default function UserCard({
  userId,
  userImageURL,
  userImageAlt,
  userName,
  userPhoneNumber,
  userBio,
  userAddress,
  userEmail
}: any) {
  console.log(userName)
  return (
    <div>
      <div key={userId}>
        <div className="relative flex h-48 ">
          <Link href="/">
            <Image
              src={userImageURL}
              alt={userImageAlt}
              fill
              className="rounded object-cover"
            />
          </Link>
        </div>
        <div>{userName}</div>
        <div>{userPhoneNumber}</div>

        <div className="">NRP {userBio} Raised</div>
        <div className="">NRP {userAddress} Donations</div>
        <div>{userAddress}</div>
        <div>{userEmail}</div>
      </div>
    </div>
  )
}
