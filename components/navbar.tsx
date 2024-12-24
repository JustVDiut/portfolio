"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import ModeToggle from "@/components/theme";

const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/projets', label: 'Projets' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
]

export function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="bg-[#A5B4FC] dark:bg-[#A5B4FC] shadow-md">
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                  <Link href="/">
                      <Image
                          src="/logo.png"
                          alt="Logo"
                          width={50}
                          height={50}
                          className="object-contain"
                      />
                  </Link>
                    <div className="flex space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                                    pathname === item.href && "bg-gray-100 dark:bg-[#1f2039] text-gray-900 dark:text-white"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}