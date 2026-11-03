# Web Cat App — catalogue de produits Angular

Application **Angular 19** de consultation d'un catalogue de produits, branchée sur une API REST simulée avec **json-server**. Le projet met l'accent sur la **programmation réactive avec RxJS** : chaque appel HTTP passe explicitement par les états *chargement*, *chargé* et *erreur*.

![Angular](https://img.shields.io/badge/Angular-19-DD0031)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3)

## Fonctionnalités

- Liste de **tous les produits**, des produits **sélectionnés** et des produits **disponibles**
- **Recherche** par mot-clé (formulaire template-driven)
- **Gestion d'état des requêtes** : indicateur de chargement, affichage des données, message d'erreur
- **Simulation de panne réseau** : environ 10 % des appels « tous les produits » visent volontairement un hôte injoignable, pour montrer la gestion d'erreur
- Navigation entre l'accueil et le catalogue (Angular Router)

## Points techniques

- **Composants standalone** (sans `NgModule`)
- **Pipeline RxJS** sur chaque requête : `map` → `startWith(LOADING)` → `catchError(ERROR)`, consommé dans le template avec le pipe `async`
- **État générique typé** `AppDataState<T>` associé à l'enum `DataStateEnum`, réutilisable pour tout type de données
- **Service injectable** avec `HttpClient` et URL d'API définie par environnement (`environment.ts`)
- **Rendu côté serveur (SSR)** configuré avec `@angular/ssr`

## Stack technique

| Couche | Technologies |
|---|---|
| Framework | Angular 19 (standalone components, Router, SSR) |
| Langage | TypeScript |
| Réactivité | RxJS 7 |
| UI | Bootstrap 5, Font Awesome |
| API simulée | json-server (`db.json`) |

## Architecture

```
src/app/
├── components/
│   ├── home/        → page d'accueil
│   ├── nav-bar/     → barre de navigation
│   └── products/    → catalogue (liste, filtres, recherche)
├── services/        → ProductsService (appels HTTP)
├── model/           → interface Product
└── state/           → AppDataState<T> et DataStateEnum
```

## Lancer le projet

Prérequis : Node.js 18 ou plus.

```bash
git clone https://github.com/erryhany/web-cat-app.git
cd web-cat-app
npm install
npm start
```

`npm start` lance en parallèle :

| Service | URL |
|---|---|
| Application Angular | http://localhost:4200 |
| API json-server | http://localhost:3000/products |

## Pistes d'évolution

- Remplacer json-server par un back-end **Spring Boot** et une base de données
- Ajouter les opérations d'écriture : sélectionner, supprimer, créer et modifier un produit
- Factoriser le pipeline RxJS répété dans le composant
- Tests unitaires des services et composants

## Auteur

**Mourad Erryhany** — Développeur Java / Spring Boot · [GitHub](https://github.com/erryhany)
