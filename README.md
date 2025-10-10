# Edumapper-Flow
Application Edumapper Flow réalisée avec Nuxt 3, TypeScript et Tailwind 4, sert à estimer les chances d’un élève d’accéder à une formation. Le site permet de saisir ou de générer aléatoirement des informations (lycée, classe, type de bac) afin d’afficher une pré-évaluation de son profil scolaire.

## Quick start

- Prérequis: Node 20+
- Installer les dépendances et lancer le serveur de dev

```
npm ci
npm run dev
```

## Scripts

- `npm run dev` — Nuxt dev server
- `npm run build` — build de production (Nitro)
- `npm run start` — lance le serveur Nitro compilé (`.output/server/index.mjs`)
- `npm run preview` — prévisualise le build localement
- `npm run typecheck` — vérification TypeScript

## Déploiement sur Render

Le dépôt contient un `render.yaml` prêt à l’emploi. Deux options:

### 1) Render Blueprint (recommandé)

1. Pousser vos changements sur `main`
2. Dans Render, créer un nouveau Blueprint et pointer vers ce repo
3. Render détectera `render.yaml` et provisionnera le service web
4. Les commandes utilisées:
	- Build: `npm ci && npm run build`
	- Start: `npm run start`
5. Les variables d’environnement définies: `NITRO_PRESET=node-server`, `NODE_VERSION=20`, `PORT=10000`

### 2) Service Web manuel

1. Créer un nouveau service Web depuis le repo GitHub
2. Runtime: Node
3. Build Command: `npm ci && npm run build`
4. Start Command: `npm run start`
5. Env Vars:
	- `NITRO_PRESET=node-server`
	- `NODE_VERSION=20`
	- `PORT=10000`

Render exposera automatiquement le port configuré; Nitro respectera `PORT`.

## Notes

- Tailwind v4 est configuré via `@tailwindcss/postcss` dans `nuxt.config.ts` et import global dans `assets/css/tailwind.css`.
- Les endpoints côté serveur se trouvent dans `server/api/*` (ex: `/api/prefill`, `/api/fiche-avenir`).
- Les pages principales: `pages/index.vue`, `pages/result.vue`, `pages/fiche-avenir.vue`.
