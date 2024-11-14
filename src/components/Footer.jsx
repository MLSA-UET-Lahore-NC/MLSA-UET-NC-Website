import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Github } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mlsa UET Lahore New Campus
          </div>
          <div className="flex space-x-4">
            <SocialIcon href="https://github.com/MLSA-UET-Lahore-NC/" Icon={Github} label="Facebook" />
            <SocialIcon href="https://www.linkedin.com/company/mlsa-uet-nc/" Icon={Linkedin} label="LinkedIn" />
            <SocialIcon href="https://www.instagram.com/mlsa.uet.nc/" Icon={Instagram} label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, Icon, label }) {
  return (
    <a href={href} target="_blank" className="text-muted-foreground hover:text-primary" aria-label={label}>
      <Icon className="h-6 w-6" />
    </a>
  )
}