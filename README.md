# Developer Portfolio – SvelteKit

Portfolio interactif avec mode sombre/clair, animations au scroll, et formulaire de contact fonctionnel.

## Live Demo

https://svelte-three.vercel.app/

## Installation

```bash
git clone https://github.com/m-tech-cod/svelte
cd dev-portfolio
npm install
npm run dev


---

## Architecture
-Composants : Hero, Projects, Contact, ThemeToggle, Reveal (animations)
-Store : thème (dark/light) persistant (localStorage)
-Données projets : tableau statique dans Projects.svelte (modifiable)
-Routing : SvelteKit (page unique, navigation par ancres)

---

##  Animations

-Apparition progressive des sections au défilement (IntersectionObserver + fade)
-Survol des cartes projets (scale, ombre)
-Effet particules en arrière‑plan (optionnel)
---

##   Optimisations

-Images avec loading="lazy"
-Police système (system-ui)
-Composants réactifs, pas de rendus inutiles
-Code splitting automatique (SvelteKit)

##  Accessibilité

-Navigation clavier (liens, boutons)
-Contrastes WCAG validés
-Mode sombre/clair persistant
-Attributs alt sur les images

---

## Contact fonctionnel

Formulaire intégré avec Formspree – les messages sont réellement envoyés par email.

---

## Fonctionnalité créative
Terminal interactif (commandes : help, about, projects, contact, clear)

---

## Trade‑offs & limitations
Limitation	Raison / Impact
Pas de backend	Formulaire géré par Formspree (gratuit)
Images non optimisées en WebP	Format JPEG/PNG accepté, mais conversion recommandée pour de meilleures performances
Animations simples	Aucune bibliothèque externe (lightweight)

---

👤 Auteur
ALAYDE Malomon Araffath – HNG Internship 2026