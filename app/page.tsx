import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import getProjects from "@/datas/datas";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const projects = getProjects().slice(0, 3);

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-200 dark:bg-[#1f2039] text-black dark:text-white">
            <Navbar/>
            <header className="p-6 text-center">
                <div className="mb-6 flex justify-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-black shadow-lg">
                        <Image
                            src="/moi.png"
                            alt="Votre photo de profil"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">Just Vallin--Détrez</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">Étudiant en Informatique</p>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Projets</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <Link href={`/projets`} key={project.id}>
                                <Card className="h-full transition-transform hover:scale-105 bg-[#A5B4FC]">
                                    <CardHeader>
                                        <CardTitle className="dark:text-black">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription
                                            className="dark:text-black">{project.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Capacités techniques</h2>
                    <div className="flex flex-wrap gap-2">
                        {["HTML / CSS", "SQL / PostgreSQL", "JAVA", "Python", "C ++", "PHP / Laravel", "Angular / Typescript / JS", "Git", "Docker", "VBA Excel"].map((skill) => (
                            <Badge key={skill} variant="secondary"
                                   className="bg-[#A5B4FC] dark:text-black">{skill}</Badge>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Capacités personnelles</h2>
                    <div className="flex flex-wrap gap-2">
                        {["Travail d'équipe", "Résolution de problèmes", "Communication", "Adaptabilité", "Gestion du temps"].map((skill) => (
                            <Badge key={skill} variant="secondary"
                                   className="bg-[#A5B4FC] dark:text-black">{skill}</Badge>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Expériences</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Stage",
                                company: "Infopesage",
                                description: "Stage de fin d’année de BUT2 informatique, de 2 mois, créer de diverses applications afin d’optimiser le fonctionnement de l’entreprise."
                            },
                            {
                                title: "Marathon du web",
                                company: "IUT de Lens",
                                description: "Réaliser un site internet en 48h. Ce site internet regroupe des histoires interactives où le héros est le lecteur. Il doit faire des choix qui influenceront la suite de l'histoire."
                            },
                            {
                                title: "Situation d'Apprentissage et d'Évaluation (SAÉ)",
                                company: "IUT de Lens",
                                description: "Multiples projets de groupe : créations d'applications, site web, jeu du chameau, space invaders, bataille navale, calculatrice, juste prix, etc."
                            },
                            {
                                title: "Service civique",
                                company: "Montigny-en-Gohelle",
                                description: "Encadrement et suivi du bon déroulement dans le club de tennis de table de Montigny-en-Gohelle."
                            },
                            {
                                title: "Ordres de mission",
                                company: "IUT de Lens",
                                description: "Représentant du département informatique de l'IUT lors de plusieurs salons de l’étudiant."
                            },
                        ].map((experience, index) => (
                            <Card key={index} className="bg-[#A5B4FC]">
                                <CardHeader>
                                    <CardTitle className="dark:text-black">{experience.title}</CardTitle>
                                    <CardDescription className="dark:text-black">{experience.company}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="dark:text-black">{experience.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>
            <footer className="p-6 text-gray-600 dark:text-black bg-[#A5B4FC]">
                <div className="flex justify-between items-center">
                    <p className="text-left">
                        © {new Date().getFullYear()} Just Vallin--Détrez. Tous droits réservés.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="mailto:j.vallindetrez@gmail.com" className="text-gray-600 dark:text-black">
                            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                        </a>
                        <a href="https://github.com/JustVDiut" className="text-gray-600 dark:text-black">
                            <FontAwesomeIcon icon={faGithub} size="lg"/>
                        </a>
                        <a href="https://www.linkedin.com/in/just-vallin-d%C3%A9trez-066518253/"
                           className="text-gray-600 dark:text-black">
                            <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}