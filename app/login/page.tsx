'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex flex-col p-6 gap-5">
        <h2 className="text-3xl font-bold w-52 mt-5">Signin to your PopX account</h2>
        <p className="text-gray-500 text-lg pr-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <fieldset className="border border-gray-300 rounded-lg bg-white">
            <legend className="text-purple-600 ml-3 pr-3 pl-1">Email Address</legend>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 ml-2 rounded-lg bg-transparent text-gray-900 placeholder-gray-400 border-none focus:outline-none focus:ring-0"
              placeholder="Enter your email address"
            />
          </fieldset>
          <fieldset className="border border-gray-300 rounded-lg bg-white">
            <legend className="text-purple-600 ml-3 pr-3 pl-1">Password</legend>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 ml-2 rounded-lg bg-transparent text-gray-900 placeholder-gray-400 border-none focus:outline-none focus:ring-0"
              placeholder="Enter your password"
            />
          </fieldset>
          <button
            type="submit" onClick={() => router.push('/profile')}
            className="w-full bg-gray-300 text-white p-3 rounded-lg hover:bg-purple-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>
    </div>
  );
}
