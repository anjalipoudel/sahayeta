import Image from 'next/image';
import Link from 'next/link';

export default function FrontCard(
    {
        campaignId,
        campaignImageURL,
        campaignImageAlt,
        campaignTitle,
        campaignDescription,
        campaignCurrentAmount,
        campaignCollectedAmount
    }: any


) {
    console.log(campaignTitle)
    return (
        <div>
            <div key={campaignId}>
                <div className='flex flex-col bg-blue-50 p-5 w-96 h-96 shadow-2xl gap-5'>
                    <div className="relative flex h-48 ">
                        <Link href="/">
                            <Image
                                src={campaignImageURL}
                                alt={campaignImageAlt}
                                fill
                                className="object-cover rounded"
                            />
                        </Link>
                    </div>
                    <div className='text-xl font-semibold'>{campaignTitle}</div>
                    <div className="text-gray-500 flex justify-center align-middle ">{campaignDescription}</div>
                    <div className='flex justify-between font-medium'>
                        <div className="">NRP {campaignCurrentAmount} Raised</div>
                        <div className="">NRP {campaignCollectedAmount} Donations</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
{/* <div>
          {user?.Users.map((user: any) => {
            return (
             
                key={user?.campaignId}
                campaignId={user?.campaignId}
                name={user?.username}
                email={user?.email}
                campaignDescription={user?.description}
                campaignCurrentAmount={user?.currentAmount}
                campaignCollectedAmount={user?.collectedAmount}
              
            )
          })}
        </div> */}