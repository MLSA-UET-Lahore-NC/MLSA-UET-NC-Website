import { Button } from "@/components/ui/button"

import { Code, Users, Globe } from 'lucide-react'
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Connect. Code. Create.
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Join our vibrant community of developers and turn your coding passion into extraordinary projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a target="_blank" href="https://chat.whatsapp.com/CI3smbEA5QFBJT9OVZDsLk">Join the Community</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Code className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">20+ Events & Challenges</h3>
                    <p className="text-sm text-muted-foreground">Sharpen your skills daily</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">1000+ Active Members</h3>
                    <p className="text-sm text-muted-foreground">Connect with peers worldwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">24/7 Global Support</h3>
                    <p className="text-sm text-muted-foreground">Get help anytime, anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}