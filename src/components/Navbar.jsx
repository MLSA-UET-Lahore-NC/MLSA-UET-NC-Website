"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, User, LogOut, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import axios from "axios"

import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import Image from "next/image"
const navItems = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  // { name: "Contact", href: "/contact" },
]

export default function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)


  

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href={"/"}>
              <span className="text-2xl font-bold text-primary">
                <Image src="/images/logo.png" alt="logo" width={150} height={150} />
              </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
     
          <div className="flex items-center sm:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:hidden">
                <nav className="mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
               
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
      
                    
          <Button asChild>
              <a target="_blank" href="https://chat.whatsapp.com/CI3smbEA5QFBJT9OVZDsLk">Join Community</a>
            </Button>
        </div>
      </div>
      </div>
    </nav>
  )
}
