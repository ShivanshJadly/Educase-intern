'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-end min-h-screen">
      <section className="pl-6 pr-28 mb-6">
        <h1 className="text-2xl font-bold">Welcome to Popx</h1>
        <p className="mt-1 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </section>
      <section className="flex flex-col mb-10 gap-4 px-6">
        <button 
          onClick={() => router.push('/create')}
          className="bg-[#6C25FF] text-md w-full py-[0.6rem] rounded-lg text-white cursor-pointer"
        >
          Create Account
        </button>
        <button 
          onClick={() => router.push('/login')}
          className="bg-[#CEBAFB] text-black text-md w-full py-[0.6rem] rounded-lg cursor-pointer"
        >
          Already Registered? Login
        </button>
      </section>
    </div>
  );
}
