'use client'

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "../constants"
import { Button } from "@/components/ui/button"

export default function MobileBar() {
	const pathname = usePathname();

	return (
		<header className="md:hidden flex items-center gap-2 w-full justify-between shadow-lg">
			<Link href="/" className="flex items-center">
				<Image src="/imgFill.png" width={200} height={200} alt="Site Logo" />
			</Link>
			<nav className="flex gap-2 mr-3">
				<SignedIn>
					<UserButton afterSignOutUrl="/" />
					<Sheet>
						<SheetTrigger><Image src="/icons/menu.svg" width={35} height={35} alt="More" className="ml-5" /></SheetTrigger>
						<SheetContent className="sm:w-60 h-full">
							<SheetHeader className="mb-10">
								<Link href="/">
									<Image src="/logo.png" width={60} height={60} alt="Site Logo" />
								</Link>
							</SheetHeader>
							<ul className="flex w-full flex-col items-start gap-4">
								{navLinks.map((link) => {
									const isActive = link.route === pathname;

									return (
										<li
											key={link.route}
											className={`flex px-6 p-3 font-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-gray-900 hover:shadow-inner hover:text-gray-50 group ${isActive ? "bg-gray-800 text-gray-50" : "text-gray-900"
												}`}
										>
											<Link href={link.route} className="flex gap-4 flex-center">
												<Image src={link.icon} width={20} height={20} alt={link.label} className={`isActive && 'brightness-200' `} />
												{link.label}
											</Link>
										</li>
									);
								})}
							</ul>
						</SheetContent>
					</Sheet>
				</SignedIn>
				<SignedOut>
					<Sheet>
						<Button asChild>
							<Link href="/sign-in">Login</Link>
						</Button>
						<SheetTrigger><Image src="/icons/menu.svg" width={35} height={35} alt="More" className="ml-5" /></SheetTrigger>
						<SheetContent className="sm:w-60 h-full">
							<SheetHeader className="mb-10">
								<Link href="/">
									<Image src="/logo.png" width={60} height={60} alt="Site Logo" />
								</Link>
							</SheetHeader>
							<ul className="flex w-full flex-col items-start gap-4">
								{navLinks.map((link) => {
									const isActive = link.route === pathname;

									return (
										<li
											key={link.route}
											className={`flex px-6 p-3 font-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-gray-900 hover:shadow-inner hover:text-gray-50 group ${isActive ? "bg-gray-800 text-gray-50" : "text-gray-900"
												}`}
										>
											<Link href={link.route} className="flex gap-4 flex-center">
												<Image src={link.icon} width={20} height={20} alt={link.label} className={`isActive && 'brightness-200' `} />
												{link.label}
											</Link>
										</li>
									);
								})}
							</ul>
							<div className="mt-10 flex items-center justify-center w-full">
								<Button asChild className="w-1/2">
									<Link href="/sign-in">Login</Link>
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</SignedOut>
			</nav>
		</header>
	)
}