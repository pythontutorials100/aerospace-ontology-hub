import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  email: string
  phone: string
  expertise: string[]
  slug: string
}

export function TeamMember({ name, role, image, email, phone, expertise, slug }: TeamMemberProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-4">
        <div className="flex justify-center mb-4">
          <div className="relative h-32 w-32 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
        </div>
        <CardTitle className="text-center text-xl">{name}</CardTitle>
        <CardDescription className="text-center">{role}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
            <a href={`mailto:${email}`} className="text-primary hover:underline">
              {email}
            </a>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            <a href={`tel:${phone}`} className="text-primary hover:underline">
              {phone}
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">Expertise:</p>
          <div className="flex flex-wrap gap-2">
            {expertise.map((item, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/team/${slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Profile <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
