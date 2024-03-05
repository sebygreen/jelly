import styles from "./page.module.css";
import { PaintBrushIcon, ChatBubbleOvalLeftEllipsisIcon, CursorArrowRippleIcon, LinkIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";


export default function Page() {
    
const featuresWeb = [
    {
      title: "Création site vitrine",
      description:
        "Élevez votre présence en ligne avec des sites vitrines élégants, fonctionnels, responsives et SEO-optimisés par Jelly Agency.",
      informations:
        ["Site vitrine", "Responsive", "SEO", "Design moderne"]
    },
    {
      title: "Création site Ecommerce",
      description:
        "Boostez vos ventes avec nos solutions E-commerce personnalisées, alliant esthétique moderne, fonctionnalité et optimisation SEO.",
    },
    {
      title: "Refonte de site internet",
      description:
        "Transformez votre site actuel en une expérience utilisateur remarquable avec nos services de refonte axés sur l'innovation et le SEO.",
    },
    {
      title: "Système de réservation",
      description:
        "Optimisez la gestion de vos rendez-vous avec un système de réservation en ligne intégré, pratique et personnalisable.",
    },
    {
      title: "Optimisation de site existant",
      description:
        "Améliorez la performance et le SEO de votre site avec nos solutions d'optimisation ciblées pour une meilleure visibilité en ligne.",
    },
    {
      title: "Menu QRCode",
      description:
        "Modernisez votre service avec des menus QR Code personnalisables, une solution pratique et facile à mettre à jour pour restaurants et entreprises.",
    },
    {
      title: "Intégration de TheFork",
      description:
        "Augmentez vos réservations avec une intégration fluide de TheFork, ouvrant votre établissement à une plus large clientèle.",
    },
  ];
  
  const featuresCommunication = [
    {
      title: "Création supports de communication physique",
      description:
        "Impactez durablement avec nos supports de communication physique créatifs, conçus pour captiver et communiquer efficacement.",
    },
    {
      title: "Création supports de communication numérique",
      description:
        "Engagez votre audience en ligne avec des supports numériques visuellement attrayants et stratégiquement conçus.",
    },
    {
      title: "Redaction de newsletter et emails marketing",
      description:
        "Maintenez le contact et stimulez l'engagement avec notre rédaction experte de newsletters et emails marketing personnalisés.",
    },
  ];
  
  const featuresIdentite = [
    {
      title: "Création ou refonte charte graphique",
      description:
        "Affirmez votre identité de marque avec une charte graphique distinctive et cohérente, conçue pour se démarquer.",
    },
    {
      title: "Création ou refonte de logo",
      description:
        "Renouvelez l'image de votre marque avec un logo unique et mémorable, reflet de votre identité et de vos valeurs.",
    },
    {
      title: "Choix de typographie sur-mesure",
      description:
        "Personnalisez votre communication avec une sélection de typographies sur-mesure, alliant style et lisibilité.",
    },
    {
      title: "Création d'illustrations pour support physique ou numérique",
      description:
        "Enrichissez vos supports avec des illustrations personnalisées qui captivent l'attention et renforcent votre message.",
    },
  ];
  
  const featuresSEO = [
    {
      title: "Analyse, recherche et intégration de mot clés SEO à votre site",
      description:
        "Améliorez votre visibilité en ligne avec une stratégie de mots-clés ciblée, intégrant une recherche approfondie et une optimisation précise.",
    },
    {
      title: "Rédaction de contenu optimisé pour le SEO",
      description:
        "Attirez un trafic qualifié avec du contenu captivant, rédigé spécifiquement pour booster votre référencement naturel.",
    },
    {
      title: "Optimisation du google page rank des pages de votre site",
      description:
        "Augmentez votre classement Google avec des techniques d'optimisation avancées pour un meilleur positionnement et une visibilité accrue.",
    },
    {
      title: "Création et gestion de campagnes Google Ads",
      description:
        "Maximisez votre retour sur investissement avec des campagnes Google Ads conçues, exécutées et optimisées par nos experts.",
    },
    {
      title: "Intégration d'analytics à votre site",
      description:
        "Prenez des décisions informées grâce à l'intégration d'outils analytics, fournissant des données précises sur les performances de votre site.",
    },
    {
      title: "Audit SEO complet et rapport d'optimisation",
      description:
        "Optimisez continuellement votre site avec un audit SEO détaillé, offrant des insights précis pour des améliorations ciblées.",
    },
  ];
  
  const featuresReseauSociaux = [
    {
      title: "Community manager",
      description:
        "Dynamisez votre présence en ligne avec notre service de Community Manager, engageant votre communauté et renforçant votre image de marque sur toutes les plateformes.",
    },
    {
      title: "Shooting photos",
      description:
        "Capturez l'essence de votre marque avec des shootings photos professionnels, offrant des visuels de haute qualité pour une impression marquante en ligne et hors ligne.",
    },
    {
      title: "Création de template de publications",
      description:
        "Uniformisez et stylisez vos publications avec des templates personnalisés, renforçant la cohérence visuelle et l'identité de votre marque sur les réseaux sociaux.",
    },
  ];

  const features = [
    {
      title: "Identité",
      features: featuresIdentite,
    },
    {
      title: "SEO & Publicité",
      features: featuresSEO,
    },
    {
      title: "Réseaux Sociaux",
      features: featuresReseauSociaux,
    },
    {
      title: "Web",
      features: featuresWeb,
    },
    {
      title: "Communication",
      features: featuresCommunication,
    }
  ];

const services = [
  {
    categorie: "Identité",
    services: [
      {
        nom: "Création ou refonte charte graphique",
        description: "Affirmez votre identité de marque avec une charte graphique distinctive et cohérente, conçue pour se démarquer."
      },
      {
        nom: "Création ou refonte de logo",
        description: "Renouvelez l'image de votre marque avec un logo unique et mémorable, reflet de votre identité et de vos valeurs."
      },
      {
        nom: "Choix de typographie sur-mesure",
        description: "Personnalisez votre communication avec une sélection de typographies sur-mesure, alliant style et lisibilité."
      },
      {
        nom: "Création d'illustrations pour support physique ou numérique",
        description: "Enrichissez vos supports avec des illustrations personnalisées qui captivent l'attention et renforcent votre message."
      }
    ]
  },
  {
    categorie: "SEO & Publicité",
    services: [
      {
        nom: "Analyse, recherche et intégration de mot clés SEO à votre site",
        description: "Améliorez votre visibilité en ligne avec une stratégie de mots-clés ciblée, intégrant une recherche approfondie et une optimisation précise."
      },
      {
        nom: "Rédaction de contenu optimisé pour le SEO",
        description: "Attirez un trafic qualifié avec du contenu captivant, rédigé spécifiquement pour booster votre référencement naturel."
      },
      {
        nom: "Optimisation du google page rank des pages de votre site",
        description: "Augmentez votre classement Google avec des techniques d'optimisation avancées pour un meilleur positionnement et une visibilité accrue."
      },
      {
        nom: "Création et gestion de campagnes Google Ads",
        description: "Maximisez votre retour sur investissement avec des campagnes Google Ads conçues, exécutées et optimisées par nos experts."
      },
      {
        nom: "Intégration d'analytics à votre site",
        description: "Prenez des décisions informées grâce à l'intégration d'outils analytics, fournissant des données précises sur les performances de votre site."
      },
      {
        nom: "Audit SEO complet et rapport d'optimisation",
        description: "Optimisez continuellement votre site avec un audit SEO détaillé, offrant des insights précis pour des améliorations ciblées."
      }
    ]
  },
  {
    categorie: "Réseaux Sociaux",
    services: [
      {
        nom: "Community manager",
        description: "Dynamisez votre présence en ligne avec notre service de Community Manager, engageant votre communauté et renforçant votre image de marque sur toutes les plateformes."
      },
      {
        nom: "Shooting photos",
        description: "Capturez l'essence de votre marque avec des shootings photos professionnels, offrant des visuels de haute qualité pour une impression marquante en ligne et hors ligne."
      },
      {
        nom: "Création de template de publications",
        description: "Uniformisez et stylisez vos publications avec des templates personnalisés, renforçant la cohérence visuelle et l'identité de votre marque sur les réseaux sociaux."
      }
    ]
  },
  {
    categorie: "Web",
    services: [
      {
        nom: "Création site vitrine",
        description: "Élevez votre présence en ligne avec des sites vitrines élégants, fonctionnels, responsives et SEO-optimisés par Jelly Agency."
      },
      {
        nom: "Création site Ecommerce",
        description: "Boostez vos ventes avec nos solutions E-commerce personnalisées, alliant esthétique moderne, fonctionnalité et optimisation SEO."
      },
      {
        nom: "Refonte de site internet",
        description: "Transformez votre site actuel en une expérience utilisateur remarquable avec nos services de refonte axés sur l'innovation et le SEO."
      },
      {
        nom: "Système de réservation",
        description: "Optimisez la gestion de vos rendez-vous avec un système de réservation en ligne intégré, pratique et personnalisable."
      },
      {
        nom: "Optimisation de site existant",
        description: "Améliorez la performance et le SEO de votre site avec nos solutions d'optimisation ciblées pour une meilleure visibilité en ligne."
      },
      {
        nom: "Menu QRCode",
        description: "Modernisez votre service avec des menus QR Code personnalisables, une solution pratique et facile à mettre à jour pour restaurants et entreprises."
      },
      {
        nom: "Intégration de TheFork",
        description: "Augmentez vos réservations avec une intégration fluide de TheFork, ouvrant votre établissement à une plus large clientèle."
      }
    ]
  },
  {
    categorie: "Communication",
    services: [
      {
        nom: "Création supports de communication physique",
        description: "Impactez durablement avec nos supports de communication physique créatifs, conçus pour captiver et communiquer efficacement."
      },
      {
        nom: "Création supports de communication numérique",
        description: "Engagez votre audience en ligne avec des supports numériques visuellement attrayants et stratégiquement conçus."
      },
      {
        nom: "Redaction de newsletter et emails marketing",
        description: "Maintenez le contact et stimulez l'engagement avec notre rédaction experte de newsletters et emails marketing personnalisés."
      },
    ]
  }
  // Ajouter les autres catégories de services (SEO & Publicité, Réseaux Sociaux, Web, Communication) de la même manière
];

    const getIcon = (categorieName) => {
        switch (categorieName) {
            case "Web":
                return <ComputerDesktopIcon className="w-5 h-5 inline-block mr-2" />;
            case "SEO & Publicité":
                return <CursorArrowRippleIcon className="w-5 h-5 inline-block mr-2" />;
            case "Réseaux Sociaux":
                return <LinkIcon className="w-5 h-5 inline-block mr-2" />;
            case "Communication":
                return <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 inline-block mr-2" />;
            case "Identité":
                return <PaintBrushIcon className="w-5 h-5 inline-block mr-2" />;
            default:
                return <PaintBrushIcon className="w-5 h-5 inline-block mr-2" />;
        }
    }

    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Nos services</h1>
                <div>
                    {services.map((categorie, index) => {
                        return (
                        <>
                        <div key={index} id={"service-" + categorie.categorie} className={styles.serviceAnchor}>
                            <h2>{categorie.categorie}</h2>
                            {categorie.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className={styles.serviceDetails}>
                                <div className={styles.icon}>{getIcon(categorie.categorie)}</div>
                                <div>
                                    <h3>{service.nom}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        </>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
