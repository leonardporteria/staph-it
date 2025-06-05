'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();
    if (res.ok) {
      const token = data.token;
      document.cookie = `token=${token}; path=/; Secure; SameSite=Lax`;
      router.push('/admin');
    } else {
      alert(data.message);
    }
  }

  return (
    <form onSubmit={handleLogin} className='p-6 max-w-sm mx-auto'>
      <h1 className='text-xl mb-4'>Admin Login</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        className='block w-full mb-2 border p-2'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='block w-full mb-4 border p-2'
      />
      <button type='submit' className='bg-blue-600 text-white py-2 px-4'>
        Login
      </button>
    </form>
  );
}
