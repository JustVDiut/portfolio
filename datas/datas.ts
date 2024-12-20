const projects = [
    {
        id: 1,
        title: "Application de Gestion de Tâches",
        description: "Une application web permettant aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/votre-username/task-manager"
    },
    {
        id: 2,
        title: "Portfolio Personnel",
        description: "Un site web présentant mes compétences, projets et expériences en tant qu'étudiant en informatique.",
        technologies: ["Next.js", "Tailwind CSS"],
        link: "https://github.com/votre-username/portfolio"
    },
    {
        id: 3,
        title: "API de Recommandation de Films",
        description: "Une API RESTful qui suggère des films basés sur les préférences de l'utilisateur et l'historique de visionnage.",
        technologies: ["Python", "Flask", "SQLite"],
        link: "https://github.com/votre-username/movie-recommendation-api"
    }
]

export default function getProjects() {
    return projects;
}