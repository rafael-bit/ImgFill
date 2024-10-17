'use client'

import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { navLinks } from "../constants";
import { Button } from "@/components/ui/button";

export default function SideBar() {
	const pathname = usePathname();

	return (
		<aside className="hidden h-screen w-72 bg-gray-50 p-5 shadow-md shadow-gray-200/50 md:flex flex-col">
			<div className="flex flex-col pb-10">
				<Link href="/" className="flex items-center">
					<Image src="/imgFill.png" width={200} height={200} alt="Site Logo" />
				</Link>
			</div>
			<nav className="h-full flex-col justify-between md:flex md:gap-4">
				<SignedIn>
					<ul className="hidden w-full flex-col items-start gap-2 md:flex">
						{navLinks.slice(0, 6).map((link) => {
							const isActive = link.route === pathname;

							return (
								<li
									key={link.route}
									className={`flex gap-4 items-center px-6 p-2 font-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-gray-900 hover:shadow-inner hover:text-gray-50 group ${isActive ? "bg-gray-800 text-gray-50" : "text-gray-900"
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
					<ul className="flex items-center justify-center w-full flex-col">
						{navLinks.slice(6).map((link) => {
							const isActive = link.route === pathname;

							return (
								<li
									key={link.route}
									className={`flex gap-4 items-center px-6 p-2 mt-1 font-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-gray-900 hover:shadow-inner hover:text-gray-50 group ${isActive ? "bg-gray-800 text-gray-50" : "text-gray-900"
										}`}
								>
									<Link href={link.route} className="flex gap-4 flex-center">
										<Image src={link.icon} width={20} height={20} alt={link.label} className={`isActive && 'brightness-200' `} />
										{link.label}
									</Link>
								</li>
							);
						})}
						<li className="flex items-center justify-center cursor-pointer gap-2 bg-gray-200 hover:bg-gray-400 px-3 py-2 rounded-full w-full text-xl mt-1">
							<UserButton afterSignOutUrl="/" showName />
						</li>
					</ul>
				</SignedIn>
				<SignedOut>
					<Button asChild>
						<Link href="/sign-in">Login</Link>
					</Button>
				</SignedOut>
			</nav>
		</aside>
	);
}
