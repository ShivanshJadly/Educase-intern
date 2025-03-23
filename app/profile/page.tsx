'use client';

import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className='flex flex-col'>
      <section className="flex items-center h-16 px-6 text-xl font-semibold bg-white text-gray-600">
        Account Settings
      </section>
      <section className="flex-1">
        <div className="flex items-start gap-4 p-6 pb-2">
            <div className='w-20 h-20 rounded-full relative border shrink-0'>
                <Image
                    src="/profile.jpg"
                    alt="Marry Doe"
                    fill
                    className="rounded-full object-cover"
                />
            </div>
            <div className='gap-2'>
                <h1 className='text-sm font-semibold'>Marry Doe</h1>
                <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
            </div>
        </div>
        <div className='px-6 pb-6 border-gray-400'>
            <p className="text-gray-800 text-sm leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde enim consequuntur voluptatibus dolore dolorem, sit fuga ex repellendus adipisci. Doloribus dolorem sequi
            </p>
        </div>
        <section className='border-t border-b border-dashed p-6 min-h-[500px] lg:min-h-[430px] flex flex-col justify-between'>
        </section>
      </section>
    </div>
  )
}
