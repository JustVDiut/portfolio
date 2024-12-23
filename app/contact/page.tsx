import { Navbar } from '@/components/navbar'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Contact</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#A5B4FC] dark:bg-[#A5B4FC] rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 text-black dark:text-black">Envoyez-moi un message</h2>
                        <form className="space-y-4">
                        <div>
                                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-black">Nom</label>
                                <Input id="name" placeholder="Votre nom" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-black">Email</label>
                                <Input id="email" type="email" placeholder="votre@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-black dark:text-black">Message</label>
                                <Textarea id="message" placeholder="Votre message" />
                            </div>
                            <Button type="submit">Envoyer</Button>
                        </form>
                    </div>
                    <div className="bg-[#A5B4FC] dark:bg-[#A5B4FC] rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 text-black dark:text-black">Mes coordonnées</h2>
                        <div className="space-y-4">
                            <p className="flex items-center text-black dark:text-black">
                                <Mail className="mr-2 h-5 w-5" />
                                <a href="mailto:votre.email@example.com" className="hover:underline">
                                    j.vallindetrez@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center text-black dark:text-black">
                                <Github className="mr-2 h-5 w-5"/>
                                <Link href="https://github.com/JustVDiut" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    github.com/JustVDiut
                                </Link>
                            </p>
                            <p className="flex items-center text-black dark:text-black">
                                <Linkedin className="mr-2 h-5 w-5"/>
                                <Link href="https://www.linkedin.com/in/just-vallin-d%C3%A9trez-066518253/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    LinkedIn - Just Vallin--Détrez
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

