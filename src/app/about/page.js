import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function about() {
  const team= [
    { name: "Hussnain Ahmad", role: "Lead", image: "/images/psycho.jpeg?height=150&width=150", linkedin: "https://www.linkedin.com/in/hussnain-ahmad/" },
    { name: "Tariq Mushtaq", role: "Co-Lead", image: "/images/tariq.jpeg?height=150&width=150", linkedin: "https://www.linkedin.com/in/tariqmushtaq1/" },
    { name: "Bilal Nadeem", role: "Non-Technical Lead", image: "/images/bilal.jpeg?height=150&width=150", linkedin: "https://www.linkedin.com/in/bilalnadeem614/" },
  
    { name: "Zohaib Saeed", role: "Technical Lead", image: "/images/zohaib.jpeg?height=150&width=150", linkedin: "https://www.linkedin.com/in/zohaibsaeed117/" },
  ]
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Our Coding Community</h1>
        <p className="text-xl text-muted-foreground">Connecting developers, fostering innovation</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our community serves as a hub for students passionate about coding, problem-solving, and personal growth. Through workshops, hackathons, and collaborative projects, we empower members to enhance their technical expertise and leadership skills. Whether you're an aspiring developer, a designer, or someone just beginning their tech journey, MLSA UET NC is your gateway to endless opportunities.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Skill Development</li>
              <li>Collaborative Projects</li>
              <li>Networking Opportunities</li>
              <li>Competitions and Challenges
</li>
         
              <li>Career Guidance
</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Join Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Ready to take your tech journey to the next level? Become a part of the MLSA UET NC family</p>
            <Button asChild>
              <a target="_blank" href="https://chat.whatsapp.com/CI3smbEA5QFBJT9OVZDsLk">Join Now</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name}>
              <CardContent className="flex flex-col items-center pt-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
                <Button variant="outline" size="icon" asChild className="my-3">
            <a target="_blank" href={member.linkedin} aria-label="Linkedin">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/MLSA-UET-Lahore-NC/" aria-label="GitHub">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
         
          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.linkedin.com/company/mlsa-uet-nc/" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.instagram.com/mlsa.uet.nc/" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}