"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex p-5 z-10 fixed bg-gray-50 h-screen">
      <div className="hidden md:flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/ImgFill.png" alt="logo" width={180} height={28} />
        </Link>

        <nav className="h-full flex-col justify-between flex md:gap-4">
          <SignedIn>
            <ul className="w-full flex-col items-start gap-2 flex">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`rounded-full w-full flex-col items-start gap-2 flex hover:bg-gray-800 hover:text-white ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700'
                    }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>


            <ul className="w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`rounded-full w-full flex-col items-start gap-2 flex hover:bg-gray-800 hover:text-white ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700'
                    }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}