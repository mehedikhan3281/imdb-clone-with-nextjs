import Link from 'next/link'
import React from 'react'

export default function () {
    return (
        <div className='flex justify-between items-center p-3nmax-w-6xl'>
            <ul className='flex gap-4'>
                <li>
                    <Link href={'/sign-in'}>Sign in</Link>
                </li>
                <li className='hidden sm:block'>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='hidden sm:block'>
                    <Link href={'/sign-in'}>About</Link>
                </li>
            </ul>
            <Link href={'/'} className='flex gap-1 items-center'>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </Link>
        </div>
    )
}
