import React from 'react'
import Link from 'next/link'

export default function Header({font}) {
    return (
        <header className={`${font.className} flex px-10 py-2 pb-3 justify-between items-center`} >
            <nav className={`${font.className} `}>
                <ul className='flex items-center gap-x-10 text-2xl font-bold'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/#pricing">Pricing</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                </ul>
            </nav>
            <div className="flex items-center mr-[205px] ">
                <img src="/GuyPasscode.svg" alt="hacker illustration" className="h-14 align-top mr-3" />
                <h1 className="text-5xl font-serif">keepr</h1>
            </div>
            <div className="gap-4">
                <button className="border border-blue-950 text-white px-6 py-3 rounded-md hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors">  
                    <Link href="/login">Login</Link>
                </button>
                <button className="bg-blue-950 text-white px-6 py-3 rounded-md ml-4 hover:bg-red-500 transition-colors">
                    <Link href="/signup">Sign Up</Link>
                </button>
            </div>
        </header>
    )
}
