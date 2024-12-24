const projects = [
    {
        id: 1,
        title: "Portfolio Personnel",
        description: "Un site web présentant mes compétences, projets et expériences en tant qu'étudiant en informatique.",
        technologies: ["Next.js", "Tailwind CSS"],
    },
    {
        id: 2,
        title: "Site Marathon du Web",
        description: "Réalisation d'un site, hébergeant des histoires dont nous sommes le héros, des histoires dont le contenu dépend du choix du lecteur. A chaque étape, le lecteur a ainsi le choix entre plusieurs possibilités lui donnant accès à diverses suites possibles.",
        technologies: ["PHP", "HTML"],
    },
    {
        id: 3,
        title: "Flatcraft",
        description: "Ce jeu constitue une version simplifiée de jeu Minecraft en 2D.Le joueur y explore un monde généré de manière aléatoire pour collecter des ressources, combattre des monstres, et construire des objets et structures personnalisés.",
        technologies: ["Java"],
    },
    {
        id: 4,
        title: "JEM'S Board",
        description: "Création en groupe d'un site internet, sur le thème de notre choix, ici les tournois de skateboard et tout ce qui les entoure.",
        technologies: ["HTML", "CSS"],
    },
    {
        id: 5,
        title: "Site de Gestion de Tournois de Skateboard",
        description: "Création d'un site internet de gestion de tournois de skateboard, avec une base de données.",
        technologies: ["PHP", "SQL"],
    },
    {
        id: 6,
        title: "Bataille Navale",
        description: "L'utilisateur propose des tirs sur des positions et le jeu lui répond s'il a touché sa cible ou non. Le joueur gagne s'il a coulé tous les navires.",
        technologies: ["Java"],
    },
    {
        id: 7,
        title: "Juste Prix",
        description: "Les participants proposent leur estimation et le jeu répond plus ou moins, il y a un chronomètre, à la fin de celui-ci le participant a perdu s'il n'a pas trouvé le juste prix.",
        technologies: ["Python"],
    },
    {
        id: 8,
        title: "Space Invaders",
        description: "Le joueur contrôle un vaisseau spatial qui peut se déplacer horizontalement à l'écran et tirer des projectiles verticalement. Le but est de détruire les vagues d'aliens qui descendent vers le bas de l'écran.",
        technologies: ["Python"],
    },
    {
        id: 9,
        title: "Calculatrice",
        description: "L'utilisateur peut effectuer des opérations basiques comme l'addition, la soustraction, la multiplication et la division.",
        technologies: ["Python"],
    },
    {
        id: 10,
        title: "Jeu du Chameau",
        description: "Le joueur doit trouver un trésor caché dans le désert en suivant des indications données par un chameau.",
        technologies: ["Python"],
    },
    {
        id: 11,
        title: "Site de Recettes",
        description: "Création d'un site internet de recettes de cuisine, avec une base de données.",
        technologies: ["PHP", "SQL"],
    },
    {
        id: 12,
        title: "Démineur",
        description: "L'objectif est de découvrir toutes les cases non minées sans cliquer sur une mine. Les joueurs utilisent des indices pour déterminer l'emplacement des mines, et dévoilent progressivement le terrain sans déclencher de mines. L'utilisateur propose des positions et le jeu lui répond s'il a touché une mine ou non.",
        technologies: ["Python"],
    }
]

export default function getProjects() {
    return projects;
}