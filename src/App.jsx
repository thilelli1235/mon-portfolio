import { useState } from "react";
function App() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Barre de navigation */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Nom ou logo */}
          <a href="#" className="text-xl font-bold">
           Thelili sellah <span className="text-violet-400">.</span>
          </a>

          {/* Liens de navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">

            <a href="#accueil" className="transition hover:text-violet-400">
              Accueil
            </a>

            <a href="#apropos" className="transition hover:text-violet-400">
              À propos
            </a>

            <a href="#projets" className="transition hover:text-violet-400">
              Projets
            </a>
            <a href="#competences" className="transition hover:text-violet-400">
  Compétences
</a>


            <a href="#contact" className="transition hover:text-violet-400">
              Contact
            </a>
          </div>
          {/* Bouton menu mobile */}
<button
  onClick={() => setMenuOuvert(!menuOuvert)}
  className="md:hidden text-2xl"
>
  ☰
</button>

        </nav>
        {menuOuvert && (
  <div className="md:hidden flex flex-col gap-4 px-6 pb-5 text-sm text-slate-300">
    <a href="#accueil" onClick={() => setMenuOuvert(false)} className="hover:text-violet-400">
      Accueil
    </a>
    <a href="#apropos" onClick={() => setMenuOuvert(false)} className="hover:text-violet-400">
      À propos
    </a>
    <a href="#projets" onClick={() => setMenuOuvert(false)} className="hover:text-violet-400">
      Projets
    </a>
    <a href="#competences" onClick={() => setMenuOuvert(false)} className="hover:text-violet-400">
      Compétences
    </a>
    <a href="#contact" onClick={() => setMenuOuvert(false)} className="hover:text-violet-400">
      Contact
    </a>
  </div>
)}

      </header>

     <section
  id="accueil"
  className="relative overflow-hidden px-6 py-24"
>
  {/* Décorations lumineuses en arrière-plan */}
  <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>
  <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

  <div className="relative mx-auto grid min-h-[70vh] max-w-6xl items-center gap-16 lg:grid-cols-2">
    {/* Partie gauche : présentation */}
    <div>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
        <span className="h-2 w-2 rounded-full bg-violet-400"></span>
        À la recherche d'un stage ou une alternance
      </div>

      <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
        Bonjour, je suis
        <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        Thelili sellah.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
        Étudiante en informatique et passionnée par le développement, je
        conçois des applications web et des interfaces modernes, utiles et
        agréables à utiliser.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#projets"
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-500"
        >
          Découvrir mes projets
        </a>

        <a
          href="#contact"
          className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition hover:border-violet-400/50 hover:bg-violet-400/10"
        >
          Me contacter
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
        <span>React</span>
        <span>JavaScript</span>
        <span>PHP</span>
        <span>Python</span>
        <span>MySQL</span>
      </div>
    </div>

    {/* Partie droite : carte décorative */}
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 rotate-6 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-500 opacity-30 blur-xl"></div>

      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400"></span>
          <span className="h-3 w-3 rounded-full bg-amber-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-400"></span>
        </div>

        <p className="font-mono text-sm text-slate-500">
          &lt;developpeuse&gt;
        </p>

        <p className="mt-4 text-2xl font-semibold leading-relaxed">
          Je construis des projets avec
          <span className="text-violet-400"> curiosité</span>,
          <span className="text-fuchsia-400"> créativité</span> et
          persévérance.
        </p>

        <p className="mt-4 font-mono text-sm text-slate-500">
          &lt;/developpeuse&gt;
        </p>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-400">
            Actuellement basée en France
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section
  id="apropos"
  className="border-t border-white/10 bg-slate-900/40 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    {/* Titre de la section */}
    <div className="mb-14 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
        À propos
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Mon parcours et
        <span className="text-violet-400"> mes ambitions.</span>
      </h2>
    </div>

    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      {/* Présentation */}
      <article className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:p-10">
        <p className="text-lg leading-8 text-slate-300">
          Après trois années d'études en informatique, je poursuis aujourd'hui
          mon apprentissage du développement en France. Mon parcours m'a permis
          de découvrir le développement web, la programmation et les bases de
          données.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Je développe actuellement mes compétences avec React, Tailwind CSS,
          Git, GitHub et Docker. J'aime apprendre en réalisant des projets
          concrets, comprendre le fonctionnement des outils et améliorer
          progressivement mes applications.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Je recherche une alternance ou un stage  qui me permettra de progresser, de
          travailler en équipe et de participer à des projets utiles.
        </p>
      </article>

      {/* Petites cartes d'informations */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <article className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-6">
          <p className="text-sm text-violet-300">Formation</p>
          <p className="mt-2 text-xl font-semibold text-white">
            Informatique
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Développement web, programmation et bases de données
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-400">Objectif actuel</p>
          <p className="mt-2 text-xl font-semibold text-white">
            Trouver une alternance / stage
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Développer mes compétences au sein d'une équipe
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2 lg:col-span-1">
          <p className="text-sm text-slate-400">Ma méthode</p>
          <p className="mt-2 text-xl font-semibold text-white">
            Learning by doing
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Comprendre, pratiquer, tester et améliorer
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
<section id="projets" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">
    {/* Titre de la section */}
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
        Mes projets
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Des idées transformées en
        <span className="text-violet-400"> projets concrets.</span>
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-400">
        Voici une sélection de projets scolaires et personnels qui illustrent
        mon parcours et les technologies que j'ai utilisées.
      </p>
    </div>

    {/* Carte du premier projet */}
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-slate-900">
        <img
          src="/images/interface.png"
          alt="Capture d'écran de l'interface de gestion des demandes administratives"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-7 sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-violet-400">
              Projet réalisé en équipe
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Gestion des demandes administratives
            </h3>
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
            Projet universitaire
          </span>
        </div>

        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
          Application web conçue pour centraliser et suivre les demandes
          administratives. Elle comprend plusieurs espaces utilisateurs, un
          système d'authentification et une base de données permettant de gérer
          les demandes.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map(
            (technologie) => (
              <span
                key={technologie}
                className="rounded-lg border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-sm text-violet-300"
              >
                {technologie}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/thilelli1235/Gestion-des-demandes-administratives"
            className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Voir le code GitHub ↗
          </a>

         
        </div>
      </div>
    </article>

    {/* Carte du deuxième projet */}
    <article className="group mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/40">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-slate-900">
        <img
          src="/images/taches.png"
          alt="Capture d'écran du gestionnaire de tâches"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-7 sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-fuchsia-400">
              Projet personnel
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Gestionnaire de tâches
            </h3>
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
            Application web
          </span>
        </div>

        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
          Application permettant d'ajouter, terminer et supprimer des tâches.
          Chaque tâche peut également avoir une date et une heure d'échéance.
          Ce projet m'a permis de pratiquer les états React, les événements,
          l'affichage de listes et le déploiement local avec Docker.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Tailwind CSS", "Vite", "Git", "Docker"].map(
            (technologie) => (
              <span
                key={technologie}
                className="rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1.5 text-sm text-fuchsia-300"
              >
                {technologie}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/thilelli1235/MES-TACHES"
            className="rounded-xl bg-fuchsia-600 px-5 py-3 font-semibold text-white transition hover:bg-fuchsia-500"
          >
            Voir le code GitHub ↗
          </a>

         
        </div>
      </div>
    </article>

    {/* Carte du troisième projet */}
    <article className="group mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-slate-900">
  <img
    src="/images/hexanova.png"
    alt="Capture d'écran du site de vente HEXANOVA"
    className="h-full w-full object-cover"
  />
</div>


      <div className="p-7 sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-amber-400">
              Projet front-end
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Site de vente de matériel informatique
            </h3>
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
            Site e-commerce
          </span>
        </div>

        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
          Site web consacré à la présentation et à la vente de matériel
          informatique. Ce projet m'a permis de travailler la création
          d'interfaces, l'organisation des produits et les interactions avec
          JavaScript.
        </p>

        <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <span className="mr-2 text-amber-400">✓</span>
            Présentation des produits
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <span className="mr-2 text-amber-400">✓</span>
            Interface responsive
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <span className="mr-2 text-amber-400">✓</span>
            Navigation entre les pages
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <span className="mr-2 text-amber-400">✓</span>
            Interactions en JavaScript
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "Git", "GitHub"].map(
            (technologie) => (
              <span
                key={technologie}
                className="rounded-lg border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-sm text-amber-300"
              >
                {technologie}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/thilelli1235/HEXANOVA"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-amber-600 px-5 py-3 font-semibold text-white transition hover:bg-amber-500"
          >
            Voir le code GitHub ↗
          </a>

         
        </div>
      </div>
    </article>
        {/* Carte du cinquième projet */}
    <article className="group mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-slate-900">
        <img
          src="/images/portfolio.png"
          alt="Capture d'écran de mon portfolio"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-7 sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-emerald-400">
              Projet personnel
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Mon portfolio
            </h3>
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
            En constante évolution
          </span>
        </div>

        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
          Le site que vous êtes en train de consulter ! Conçu avec React et
          Tailwind CSS, il présente mon parcours, mes compétences et mes
          projets. Ce portfolio évolue régulièrement, au fur et à mesure que
          j'apprends de nouvelles choses.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Tailwind CSS", "Vite", "Git", "GitHub"].map(
            (technologie) => (
              <span
                key={technologie}
                className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-300"
              >
                {technologie}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#"
            className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500"
          >
            Voir le code GitHub ↗
          </a>
        </div>
      </div>
    </article>


  </div>
</section>
<section
  id="competences"
  className="border-t border-white/10 bg-slate-900/40 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
        Mes compétences
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Les technologies que
        <span className="text-violet-400"> j'utilise.</span>
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-400">
        Des outils découverts durant mes études et approfondis à travers
        mes projets personnels et universitaires.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <article className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-violet-400/40 hover:bg-violet-400/5">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-2xl">
          🎨
        </div>

        <h3 className="text-2xl font-bold text-white">
          Front-end
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          Création d'interfaces web modernes, lisibles et adaptées aux
          différents écrans.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
            (competence) => (
              <span
                key={competence}
                className="rounded-lg border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-sm text-violet-300"
              >
                {competence}
              </span>
            ),
          )}
        </div>
      </article>

      <article className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-fuchsia-400/40 hover:bg-fuchsia-400/5">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-2xl">
          ⚙️
        </div>

        <h3 className="text-2xl font-bold text-white">
          Back-end et programmation
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          Développement de la logique des applications, traitement des
          formulaires et manipulation des données.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["PHP", "Python", "Tkinter"].map((competence) => (
            <span
              key={competence}
              className="rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-2 text-sm text-fuchsia-300"
            >
              {competence}
            </span>
          ))}
        </div>
      </article>

      <article className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
          🗄️
        </div>

        <h3 className="text-2xl font-bold text-white">
          Bases de données
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          Conception de tables, requêtes et connexion des applications à
          des bases de données.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["MySQL", "SQLite", "phpMyAdmin"].map((competence) => (
            <span
              key={competence}
              className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-300"
            >
              {competence}
            </span>
          ))}
        </div>
      </article>

      <article className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-amber-400/40 hover:bg-amber-400/5">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-2xl">
          🛠️
        </div>

        <h3 className="text-2xl font-bold text-white">
          Outils et environnement
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          Versionnement du code, partage des projets et mise en place des
          environnements de développement.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Git", "GitHub", "Docker", "Vite", "XAMPP", "VS Code"].map(
            (competence) => (
              <span
                key={competence}
                className="rounded-lg border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-sm text-amber-300"
              >
                {competence}
              </span>
            ),
          )}
        </div>
      </article>
    </div>

    <div className="mt-8 rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 p-7 sm:p-9">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">
            Ma méthode
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            Apprendre en construisant
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-slate-400">
            Je progresse en réalisant des projets concrets, en analysant mes
            erreurs et en cherchant à comprendre la logique de chaque outil.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
            Comprendre
          </span>

          <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
            Pratiquer
          </span>

          <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
            Améliorer
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="contact" className="relative overflow-hidden px-6 py-24">
  <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl"></div>
  <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl"></div>

  <div className="relative mx-auto max-w-6xl">
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Contact
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Construisons quelque chose
            <span className="text-violet-400"> ensemble.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Je suis actuellement à la recherche d'un stage ou d'une alternance
            dans le développement informatique. N'hésitez pas à me contacter
            pour discuter d'une opportunité ou découvrir plus en détail mon
            parcours.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:thilellisellah12@gmail.com"
              className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-500"
            >
              M'envoyer un e-mail
            </a>

            <a
              href="/cv.pdf"
              download
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition hover:border-violet-400/50 hover:bg-violet-400/10"
            >
              Télécharger mon CV ↓
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 bg-slate-950/40 p-8 sm:p-12 lg:border-l lg:border-t-0">
          <p className="text-sm font-medium text-slate-500">
            Me retrouver en ligne
          </p>

          <div className="mt-6 space-y-4">
            <a
              href="https://github.com/thilelli1235"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-400/40 hover:bg-violet-400/10"
            >
              <div>
                <p className="font-semibold text-white">GitHub</p>
                <p className="mt-1 text-sm text-slate-500">
                  Découvrir mes dépôts
                </p>
              </div>

              <span className="text-xl text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
                ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/Thelili Sellah"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-400/40 hover:bg-violet-400/10"
            >
              <div>
                <p className="font-semibold text-white">LinkedIn</p>
                <p className="mt-1 text-sm text-slate-500">
                  Consulter mon profil
                </p>
              </div>

              <span className="text-xl text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
                ↗
              </span>
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-white">Localisation</p>
              <p className="mt-1 text-sm text-slate-500">
               Paris 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}

export default App;
