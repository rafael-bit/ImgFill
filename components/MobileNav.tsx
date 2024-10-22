"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <header className="md:hidden flex flex-between fixed h-16 w-full border-b shadow-md border-gray-100 bg-white p-5 lg:hidden">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/ImgFill.png"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sm:w-60">
              <>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={50}
                  height={50}
                />

                <ul className="mt-10 w-full flex-col items-start gap-2 flex">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname

                    return (
                      <li
                        className={`rounded-full w-full flex-col items-start gap-2 flex hover:bg-gray-800 hover:text-white ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700'
                          }`}
                        key={link.route}
                      >
                        <Link className="sidebar-link cursor-pointer" href={link.route}>
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <div className="mt-7 w-full flex justify-center bg-gray-100 p-3 rounded-full">
                  <UserButton afterSignOutUrl="/" showName />
                </div>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-gray-800">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  )
}