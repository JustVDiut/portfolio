import { Navbar } from '@/components/navbar'

export default function APropos() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">À propos de moi</h1>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Bonjour et bienvenue sur mon Portfolio ! Je m'appelle Just, étudiant en troisième année de BUT informatique, passionné de programmation et par les nouvelles technologies.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Je possède déjà des compétences en programmation et en développement web, ainsi qu'une forte motivation à apprendre et à me perfectionner dans ces domaines en constante évolution. J'ai acquis plusieurs certifications OpenClassrooms qui attestent de mes compétences. Je possède également un esprit analytique et une capacité à résoudre les problèmes.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        En tant que personne sociable et dynamique, j'aime travailler en équipe et partager mes idées pour créer des solutions innovantes et répondre à certains besoins. Je suis également rigoureux, organisé et prêt à relever de nouveaux défis pour continuer à évoluer dans ma carrière. N'hésitez pas à me contacter pour discuter !                    </p>
                </div>
            </main>
        </div>
    )
}

