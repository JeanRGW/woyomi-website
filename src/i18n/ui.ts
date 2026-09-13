export const defaultLang = 'en' as const
export const showDefaultLang = false

export const languages = {
  en: {
    code: 'en',
    label: 'EN',
    name: 'English',
    htmlLang: 'en'
  },
  'pt-br': {
    code: 'pt-br',
    label: 'PT-BR',
    name: 'Português (Brasil)',
    htmlLang: 'pt-BR'
  },
  es: {
    code: 'es',
    label: 'ES',
    name: 'Español',
    htmlLang: 'es'
  },
  id: {
    code: 'id',
    label: 'ID',
    name: 'Bahasa Indonesia',
    htmlLang: 'id'
  },
  fr: {
    code: 'fr',
    label: 'FR',
    name: 'Français',
    htmlLang: 'fr'
  },
  ru: {
    code: 'ru',
    label: 'RU',
    name: 'Русский',
    htmlLang: 'ru'
  }
} as const

export type SupportedLanguage = keyof typeof languages

export const ui = {
  en: {
    // Metadata
    'meta.title': 'woyomi — manga, anime, novel & movie reader',
    'meta.description':
      'A multi-source media reader and player for manga, anime, novels, movies, and series. Tauri 2 desktop and Android app with a modular TypeScript plugin system.',

    // Navigation & Header
    'nav.formats': 'Formats',
    'nav.showcase': 'Interface',
    'nav.plugins': 'Plugin Engine',
    'nav.download': 'Download',
    'nav.getApp': 'Get App',
    'nav.versionBadge': 'v{version} · alpha',
    'nav.language': 'Language',

    // Hero Section
    'hero.previewBadge': 'v{version} Preview',
    'hero.platforms': 'Windows · Linux · Android',
    'hero.titleLine1': 'One canvas for every story.',
    'hero.titleLine2': 'Manga, anime, novels & cinema.',
    'hero.subtitle':
      'A unified reader and player for desktop & Android. Inspired by Aniyomi and Mihon, rebuilt on Tauri 2 with local-first storage and sandboxed TypeScript plugins.',
    'hero.ctaDownload': 'Get v{version}',
    'hero.ctaReleases': 'Releases',
    'hero.ctaPlugins': 'Plugin Engine',
    'hero.specDesktop': 'Windows & Linux',
    'hero.specAndroid': 'Android APK',
    'hero.specVault': '100% Local SQLite Vault',

    // Hero Showcase Tabs
    'hero.tab.browse': 'Browse Home',
    'hero.tab.manga': 'Manga Reader',
    'hero.tab.detail': 'Media Detail',
    'hero.tab.library': 'Library Vault',
    'hero.tab.mobile': 'Android Shell',
    'hero.deck.tauri': 'Tauri 2 Native Core',
    'hero.deck.model': 'Shared Model (Manga · Anime · Novel · Cinema)',
    'hero.deck.privacy': 'Zero telemetry · Local first',
    'hero.mobileBrowse': 'Android Browse',
    'hero.mobileLibrary': 'Android Library',

    // Features Section
    'features.tagline': 'Unified Media Engine',
    'features.title': 'Four mediums. One focused player.',
    'features.subtitle':
      'Stop juggling four different apps with four different libraries. Woyomi unifies every format into a single, cohesive workflow.',

    'features.manga.title': 'Manga & Webtoons',
    'features.manga.subtitle': 'Engineered for panels and spreads',
    'features.manga.desc':
      'Seamlessly switch between continuous vertical webtoon scroll and dual-page Japanese right-to-left spreads with instant page buffering.',
    'features.manga.tag1': 'Continuous Webtoon',
    'features.manga.tag2': 'Dual-Page RTL',
    'features.manga.tag3': 'Zero Tearing',
    'features.manga.tag4': 'Page Memory',

    'features.anime.title': 'Anime & Streaming',
    'features.anime.subtitle': 'Hardware-accelerated player',
    'features.anime.desc':
      'High-performance native HLS and MP4 video playback. Auto-tracks episode history, manages seasons, and remembers timestamps across restarts.',
    'features.anime.tag1': 'Adaptive HLS',
    'features.anime.tag2': 'Direct MP4',
    'features.anime.tag3': 'Episode History',
    'features.anime.tag4': 'Timestamp Recall',

    'features.novel.title': 'Light Novels & Prose',
    'features.novel.subtitle': 'Distraction-free typography reader',
    'features.novel.desc':
      'Clean typography controls designed for multi-hour reading sessions. Tailor font sizes, line height, margins, and OLED black or warm sepia tones.',
    'features.novel.tag1': 'Custom Fonts',
    'features.novel.tag2': 'Margin Tuning',
    'features.novel.tag3': 'OLED / Sepia',
    'features.novel.tag4': 'TOC Jumper',

    'features.cinema.title': 'Cinema & Series',
    'features.cinema.subtitle': 'Multi-season archive',
    'features.cinema.desc':
      'Group multi-part movies and multi-season series into a single clean catalog entry with unified status tracking and metadata inspection.',
    'features.cinema.tag1': 'Season Bundling',
    'features.cinema.tag2': 'Multi-Part Rails',
    'features.cinema.tag3': 'Metadata Inspector',
    'features.cinema.tag4': 'Progress Sync',

    'features.vault.title': 'Universal Library Vault',
    'features.vault.subtitle': 'A single taxonomy for all your content',
    'features.vault.desc':
      'Organize across <strong class="text-fg">Reading</strong>, <strong class="text-fg">Watching</strong>, <strong class="text-fg">Plan to Watch</strong>, <strong class="text-fg">Completed</strong>, and <strong class="text-fg">Paused</strong>. Statuses, chapter read counts, and episode timestamps stay unified in local SQLite.',

    'features.offline.title': 'Offline Native Downloads',
    'features.offline.subtitle': 'No internet? No problem.',
    'features.offline.desc':
      'Save manga chapters, novel text, and direct MP4 streams straight to your local device for seamless offline reading anywhere.',

    // Showcase / Focus Section
    'showcase.tagline': 'Form & Experience',
    'showcase.title': 'Crafted for deep focus.',
    'showcase.subtitle':
      'No intrusive sidebars during reading, no video player ads, and zero clutter. Every pixel serves your media.',
    'showcase.credits':
      'Screenshots use open-licensed demo content: Pepper & Carrot by David Revoy (CC BY 4.0) and Big Buck Bunny by Blender Foundation (CC BY 3.0).',
    'showcase.card1.num': '01 / Detail & Chapter Deck',
    'showcase.card1.badge': 'Metadata & Tracking',
    'showcase.card1.desc':
      'Rich metadata inspection, multi-tag filtering, one-click reading status transitions, and single-click episode mark-as-read.',
    'showcase.card2.num': '02 / Minimalist Reader Canvas',
    'showcase.card2.badge': 'Distraction-Free',
    'showcase.card2.desc':
      'Keyboard shortcuts, custom zoom steps, automatic page fitting, and subtle floating HUD that disappears when you read.',
    'showcase.mobile.badge': 'Mobile Companion',
    'showcase.mobile.title': 'Built for one hand.',
    'showcase.mobile.desc':
      'On smaller touchscreens, Woyomi naturally shifts navigation to a bottom tab bar with thumb-reach actions, compact horizontal rails, and swipe gestures.',
    'showcase.mobile.list1': 'Bottom nav: Browse, Library, History, Plugins, Settings',
    'showcase.mobile.list2': 'Swipe gestures for chapter next/previous',
    'showcase.mobile.list3': 'Compact OLED-friendly black theme',
    'showcase.mobile.railBrowse': 'Browse Rails',
    'showcase.mobile.railLibrary': 'Library View',

    // Plugins Section
    'plugins.tagline': 'Extensible Architecture',
    'plugins.title': 'Zero bundled sources. 100% extensible.',
    'plugins.subtitle':
      'Woyomi is an open player engine. It ships with no pre-bundled scrapers — you install and manage only the sources you trust.',
    'plugins.pillar1.title': 'Isolated Web Worker Sandbox',
    'plugins.pillar1.desc':
      'Each source plugin runs inside its own isolated Web Worker thread with zero raw DOM access and strict memory isolation.',
    'plugins.pillar2.title': 'Injected SourceContext',
    'plugins.pillar2.desc':
      'Plugins talk to an injected context interface with rate limiting, header customization, and built-in HTML/JSON parsers.',
    'plugins.pillar3.title': 'SHA-256 Integrity Verification',
    'plugins.pillar3.desc':
      'Remote plugin packages are cryptographically validated against manifest hashes before executing in your client.',
    'plugins.pillar4.title': 'Decentralized Static Repositories',
    'plugins.pillar4.desc':
      'Plugin repositories can live anywhere — GitHub Releases, Cloudflare R2, or any static HTTPS endpoint.',
    'plugins.sdkBtn': 'Read Plugin SDK Docs',
    'plugins.footerSandbox': 'Sandboxed in Web Worker runtime',
    'plugins.footerContracts': '✓ Type-safe API contracts',

    // Download Section
    'download.tagline': 'Get Woyomi',
    'download.title': 'Ready for your library.',
    'download.subtitle':
      'Download v{version} preview builds from GitHub Releases or compile from source with your own Rust toolchain.',
    'download.windows.desc': 'Native desktop shell with hardware acceleration for Windows 10 and 11.',
    'download.windows.btn': 'Download .exe',
    'download.linux.desc': 'Universal AppImage and native packages for Ubuntu, Debian, Fedora, and Arch.',
    'download.linux.btn': 'Download Package',
    'download.android.desc': 'Touch-optimized mobile shell with bottom navigation for Android 10+.',
    'download.android.btn': 'Get APK',
    'download.buildTitle': 'Build from Source',
    'download.buildRequirements': 'Node 22+ · pnpm 11.8 · Rust 1.77+',
    'download.copyCmd': 'Copy commands',
    'download.copied': 'Copied!',

    // Footer
    'footer.desc':
      'A local-first, multi-format media reader and streaming player. Ships with zero bundled sources — install and manage only the sources you trust.',
    'footer.status': 'v{version} alpha preview',
    'footer.colProject': 'Project',
    'footer.github': 'GitHub Repository',
    'footer.releases': 'Releases & Changelogs',
    'footer.issues': 'Issue Tracker',
    'footer.colExtensibility': 'Extensibility',
    'footer.pluginGuide': 'Plugin SDK Guide',
    'footer.selfHosted': 'Self-Hosted Sync Backend',
    'footer.license': 'Apache 2.0 License',
    'footer.colLineage': 'Lineage & Credits',
    'footer.heartStatement': 'Crafted with <span class="text-manga inline-block">♥</span> because great stories should be free for everyone',
    'footer.copyright': '© {year} JeanRGW · Released under Apache License 2.0'
  },

  'pt-br': {
    // Metadados
    'meta.title': 'woyomi — leitor de mangás, animes, novels e filmes',
    'meta.description':
      'Leitor e reprodutor de mídia multifonte para mangás, animes, light novels, filmes e séries. App em Tauri 2 para desktop e Android com sistema modular de plugins em TypeScript.',

    // Navegação & Header
    'nav.formats': 'Formatos',
    'nav.showcase': 'Interface',
    'nav.plugins': 'Plugins',
    'nav.download': 'Download',
    'nav.getApp': 'Baixar App',
    'nav.versionBadge': 'v{version} · alpha',
    'nav.language': 'Idioma',

    // Seção Hero
    'hero.previewBadge': 'Prévia v{version}',
    'hero.platforms': 'Windows · Linux · Android',
    'hero.titleLine1': 'Um só espaço para cada história.',
    'hero.titleLine2': 'Mangás, animes, novels & cinema.',
    'hero.subtitle':
      'Um leitor e reprodutor unificado para desktop e Android. Inspirado no Aniyomi e Mihon, reconstruído em Tauri 2 com armazenamento local e plugins isolados em TypeScript.',
    'hero.ctaDownload': 'Baixar v{version}',
    'hero.ctaReleases': 'Versões',
    'hero.ctaPlugins': 'Sistema de Plugins',
    'hero.specDesktop': 'Windows & Linux',
    'hero.specAndroid': 'APK para Android',
    'hero.specVault': 'Armazenamento 100% Local (SQLite)',

    // Abas do Hero
    'hero.tab.browse': 'Explorar',
    'hero.tab.manga': 'Leitor de Mangá',
    'hero.tab.detail': 'Detalhes da Mídia',
    'hero.tab.library': 'Biblioteca',
    'hero.tab.mobile': 'App Android',
    'hero.deck.tauri': 'Núcleo Nativo em Tauri 2',
    'hero.deck.model': 'Modelo Unificado (Mangá · Anime · Novel · Cinema)',
    'hero.deck.privacy': 'Zero telemetria · 100% local',
    'hero.mobileBrowse': 'Explorar no Android',
    'hero.mobileLibrary': 'Biblioteca no Android',

    // Seção de Recursos (Features)
    'features.tagline': 'Plataforma Unificada de Mídia',
    'features.title': 'Quatro formatos. Um único reprodutor.',
    'features.subtitle':
      'Chega de alternar entre quatro aplicativos com bibliotecas separadas. O Woyomi unifica tudo em uma experiência integrada e fluida.',

    'features.manga.title': 'Mangás & Webtoons',
    'features.manga.subtitle': 'Feito sob medida para páginas e tiras',
    'features.manga.desc':
      'Alterne com facilidade entre a rolagem vertical para webtoons e a leitura paginada, com carregamento instantâneo.',
    'features.manga.tag1': 'Webtoon Contínuo',
    'features.manga.tag2': 'Páginação',
    'features.manga.tag3': 'Sem Quebras de Imagem',
    'features.manga.tag4': 'Memória de Leitura',

    'features.anime.title': 'Animes & Streaming',
    'features.anime.subtitle': 'Player com aceleração por hardware',
    'features.anime.desc':
      'Reprodução de alta performance para vídeos HLS e MP4. Histórico automático de episódios, temporadas e retomada ponto onde parou.',
    'features.anime.tag1': 'HLS Adaptativo',
    'features.anime.tag2': 'MP4 Direto',
    'features.anime.tag3': 'Histórico de Episódios',
    'features.anime.tag4': 'Lembrar Posição',

    'features.novel.title': 'Light Novels & Textos',
    'features.novel.subtitle': 'Leitura refinada e sem distrações',
    'features.novel.desc':
      'Controles completos de tipografia pensados para longas sessões de leitura. Ajuste o tamanho da fonte, espaçamento entre linhas, margens e alterne entre os modos Preto OLED ou Sépia.',
    'features.novel.tag1': 'Fontes Personalizadas',
    'features.novel.tag2': 'Ajuste de Margens',
    'features.novel.tag3': 'OLED / Sépia',
    'features.novel.tag4': 'Índice de Capítulos',

    'features.cinema.title': 'Cinema & Séries',
    'features.cinema.subtitle': 'Catálogo completo de temporadas e filmes',
    'features.cinema.desc':
      'Agrupe filmes em partes e séries completas em uma interface limpa, com acompanhamento de progresso e informações detalhadas.',
    'features.cinema.tag1': 'Temporadas Agrupadas',
    'features.cinema.tag2': 'Organização por Partes',
    'features.cinema.tag3': 'Metadados Detalhados',
    'features.cinema.tag4': 'Sincronização de Progresso',

    'features.vault.title': 'Biblioteca Unificada',
    'features.vault.subtitle': 'Um só sistema para organizar todo o seu acervo',
    'features.vault.desc':
      'Organize tudo em <strong class="text-fg">Lendo</strong>, <strong class="text-fg">Assistindo</strong>, <strong class="text-fg">Planejo Ver</strong>, <strong class="text-fg">Concluído</strong> e <strong class="text-fg">Pausado</strong>. Status, contagem de capítulos lidos e progresso dos episódios ficam centralizados no seu SQLite local.',

    'features.offline.title': 'Downloads Nativos Offline',
    'features.offline.subtitle': 'Sem internet? Sem problemas.',
    'features.offline.desc':
      'Baixe capítulos de mangá, textos de novels e vídeos MP4 direto no seu dispositivo para curtir offline onde você estiver.',

    // Seção de Interface (Showcase)
    'showcase.tagline': 'Design & Experiência',
    'showcase.title': 'Criado para foco total.',
    'showcase.subtitle':
      'Sem barras laterais intrusivas, sem anúncios e sem poluição visual. Cada detalhe pensado para valorizar o seu conteúdo.',
    'showcase.card1.num': '01 / Detalhes & Capítulos',
    'showcase.card1.badge': 'Metadados & Progresso',
    'showcase.card1.desc':
      'Metadados completos, filtros por tags, troca rápida de status e marcação de episódios como vistos com apenas um clique.',
    'showcase.card2.num': '02 / Tela de Leitura Minimalista',
    'showcase.card2.badge': 'Sem Distrações',
    'showcase.card2.desc':
      'Atalhos de teclado, zoom personalizado, ajuste automático de página e interface flutuante discreta que desaparece enquanto você lê.',
    'showcase.mobile.badge': 'Versão Mobile',
    'showcase.mobile.title': 'Pensado para usar com uma mão.',
    'showcase.mobile.desc':
      'Em telas de toque, o Woyomi adapta a navegação para uma barra inferior ao alcance do polegar, com trilhas horizontais compactas e gestos de deslizar.',
    'showcase.mobile.list1': 'Navegação inferior: Explorar, Biblioteca, Histórico, Plugins e Configurações',
    'showcase.mobile.list2': 'Gestos de deslizar para avançar e voltar capítulos',
    'showcase.mobile.list3': 'Tema escuro compacto otimizado para telas OLED',
    'showcase.mobile.railBrowse': 'Explorar',
    'showcase.mobile.railLibrary': 'Biblioteca',

    // Seção de Plugins
    'plugins.tagline': 'Arquitetura Extensível',
    'plugins.title': 'Zero fontes pré-instaladas. 100% extensível.',
    'plugins.subtitle':
      'O Woyomi é uma plataforma de reprodução aberta. Não inclui fontes ou scrapers de fábrica — você instala e gerencia apenas as fontes em que realmente confia.',
    'plugins.pillar1.title': 'Sandbox Isolada em Web Worker',
    'plugins.pillar1.desc':
      'Cada plugin de fonte roda em uma thread isolada de Web Worker, sem acesso direto ao DOM e com isolamento estrito de memória.',
    'plugins.pillar2.title': 'SourceContext Injetado',
    'plugins.pillar2.desc':
      'Os plugins se comunicam por meio de uma interface injetada com limite de requisições, headers personalizados e parsers nativos de HTML/JSON.',
    'plugins.pillar3.title': 'Verificação de Integridade SHA-256',
    'plugins.pillar3.desc':
      'Pacotes remotos de plugins são verificados criptograficamente com as chaves hash do manifesto antes de serem executados no aplicativo.',
    'plugins.pillar4.title': 'Repositórios Estáticos Descentralizados',
    'plugins.pillar4.desc':
      'Repositórios de plugins podem ficar hospedados em qualquer lugar — GitHub, Cloudflare ou qualquer servidor HTTPS estático.',
    'plugins.sdkBtn': 'Documentação do SDK de Plugins',
    'plugins.footerSandbox': 'Execução isolada em ambiente Web Worker',
    'plugins.footerContracts': '✓ Contratos de API com tipagem estrita',

    // Seção de Download
    'download.tagline': 'Baixar Woyomi',
    'download.title': 'Pronto para a sua biblioteca.',
    'download.subtitle':
      'Baixe as versões de prévia v{version} no GitHub Releases ou compile a partir do código-fonte com a sua toolchain Rust.',
    'download.windows.desc': 'App nativo para desktop com aceleração por hardware para Windows 10 e 11.',
    'download.windows.btn': 'Baixar .exe',
    'download.linux.desc': 'AppImage universal e pacotes nativos para Ubuntu, Debian, Fedora e Arch.',
    'download.linux.btn': 'Baixar Pacote',
    'download.android.desc': 'App mobile otimizado para telas de toque com navegação inferior para Android 10+.',
    'download.android.btn': 'Baixar APK',
    'download.buildTitle': 'Compilar do Código-Fonte',
    'download.buildRequirements': 'Node 22+ · pnpm 11.8 · Rust 1.77+',
    'download.copyCmd': 'Copiar comandos',
    'download.copied': 'Copiado!',

    // Rodapé (Footer)
    'footer.desc':
      'Leitor e reprodutor de mídia multiformato e 100% local. Não inclui fontes de fábrica — instale e gerencie apenas aquelas em que você confia.',
    'footer.status': 'v{version} · Prévia Alpha',
    'footer.colProject': 'Projeto',
    'footer.github': 'Repositório no GitHub',
    'footer.releases': 'Versões & Changelogs',
    'footer.issues': 'Relatar Problemas',
    'footer.colExtensibility': 'Extensibilidade',
    'footer.pluginGuide': 'Guia do SDK de Plugins',
    'footer.selfHosted': 'Servidor Próprio de Sincronização',
    'footer.license': 'Licença Apache 2.0',
    'footer.colLineage': 'Origem & Créditos',
    'footer.heartStatement': 'Feito com <span class="text-manga inline-block">♥</span> porque grandes histórias devem ser livres para todos',
    'footer.copyright': '© {year} JeanRGW · Licenciado sob Apache 2.0'
  },

  es: {
    // Metadata
    'meta.title': 'woyomi — lector de manga, anime, novelas y películas',
    'meta.description':
      'Un lector y reproductor de medios multiorigen para manga, anime, novelas, películas y series. App de Tauri 2 para escritorio y Android con un sistema modular de plugins en TypeScript.',

    // Navigation & Header
    'nav.formats': 'Formatos',
    'nav.showcase': 'Interfaz',
    'nav.plugins': 'Motor de plugins',
    'nav.download': 'Descarga',
    'nav.getApp': 'Obtener la app',
    'nav.versionBadge': 'v{version} · alfa',
    'nav.language': 'Idioma',

    // Hero Section
    'hero.previewBadge': 'Vista previa v{version}',
    'hero.platforms': 'Windows · Linux · Android',
    'hero.titleLine1': 'Un solo lienzo para cada historia.',
    'hero.titleLine2': 'Manga, anime, novelas y cine.',
    'hero.subtitle':
      'Un lector y reproductor unificado para escritorio y Android. Inspirado en Aniyomi y Mihon, reconstruido sobre Tauri 2 con almacenamiento local y plugins de TypeScript aislados.',
    'hero.ctaDownload': 'Obtener v{version}',
    'hero.ctaReleases': 'Versiones',
    'hero.ctaPlugins': 'Motor de plugins',
    'hero.specDesktop': 'Windows y Linux',
    'hero.specAndroid': 'APK de Android',
    'hero.specVault': 'Almacén SQLite 100 % local',

    // Hero Showcase Tabs
    'hero.tab.browse': 'Explorar',
    'hero.tab.manga': 'Lector de manga',
    'hero.tab.detail': 'Detalle del medio',
    'hero.tab.library': 'Biblioteca',
    'hero.tab.mobile': 'App de Android',
    'hero.deck.tauri': 'Núcleo nativo de Tauri 2',
    'hero.deck.model': 'Modelo compartido (Manga · Anime · Novela · Cine)',
    'hero.deck.privacy': 'Cero telemetría · Local primero',
    'hero.mobileBrowse': 'Explorar en Android',
    'hero.mobileLibrary': 'Biblioteca en Android',

    // Features Section
    'features.tagline': 'Motor de medios unificado',
    'features.title': 'Cuatro formatos. Un reproductor enfocado.',
    'features.subtitle':
      'Deja de alternar entre cuatro apps con cuatro bibliotecas distintas. Woyomi unifica cada formato en un único flujo de trabajo coherente.',

    'features.manga.title': 'Manga y webtoons',
    'features.manga.subtitle': 'Diseñado para viñetas y dobles páginas',
    'features.manga.desc':
      'Cambia sin fricción entre el scroll vertical continuo de los webtoons y las dobles páginas de derecha a izquierda al estilo japonés, con un almacenamiento en búfer instantáneo de las páginas.',
    'features.manga.tag1': 'Webtoon continuo',
    'features.manga.tag2': 'Doble página RTL',
    'features.manga.tag3': 'Cero cortes',
    'features.manga.tag4': 'Memoria de página',

    'features.anime.title': 'Anime y streaming',
    'features.anime.subtitle': 'Reproductor acelerado por hardware',
    'features.anime.desc':
      'Reproducción nativa de alto rendimiento de vídeo HLS y MP4. Registra automáticamente el historial de episodios, gestiona las temporadas y recuerda la posición exacta al reiniciar.',
    'features.anime.tag1': 'HLS adaptativo',
    'features.anime.tag2': 'MP4 directo',
    'features.anime.tag3': 'Historial de episodios',
    'features.anime.tag4': 'Recuerdo de posición',

    'features.novel.title': 'Light novels y prosa',
    'features.novel.subtitle': 'Lector tipográfico sin distracciones',
    'features.novel.desc':
      'Controles tipográficos limpios creados para largas sesiones de lectura. Ajusta el tamaño de fuente, el interlineado, los márgenes y los modos OLED negro o sepia cálido.',
    'features.novel.tag1': 'Fuentes personalizadas',
    'features.novel.tag2': 'Ajuste de márgenes',
    'features.novel.tag3': 'OLED / Sepia',
    'features.novel.tag4': 'Salto por índice',

    'features.cinema.title': 'Cine y series',
    'features.cinema.subtitle': 'Archivo de múltiples temporadas',
    'features.cinema.desc':
      'Agrupa películas multiparte y series de varias temporadas en una sola entrada limpia de catálogo, con seguimiento de estado unificado e inspección de metadatos.',
    'features.cinema.tag1': 'Agrupación de temporadas',
    'features.cinema.tag2': 'Partes múltiples',
    'features.cinema.tag3': 'Inspector de metadatos',
    'features.cinema.tag4': 'Sincronización de progreso',

    'features.vault.title': 'Almacén de biblioteca universal',
    'features.vault.subtitle': 'Una sola taxonomía para todo tu contenido',
    'features.vault.desc':
      'Organiza con <strong class="text-fg">Leyendo</strong>, <strong class="text-fg">Viendo</strong>, <strong class="text-fg">Por ver</strong>, <strong class="text-fg">Completado</strong> y <strong class="text-fg">En pausa</strong>. Estados, capítulos leídos y tiempos de episodios quedan unificados en SQLite local.',

    'features.offline.title': 'Descargas nativas sin conexión',
    'features.offline.subtitle': '¿Sin internet? Sin problema.',
    'features.offline.desc':
      'Guarda capítulos de manga, textos de novelas y streams MP4 directos en tu dispositivo para leer sin conexión estés donde estés.',

    // Showcase / Focus Section
    'showcase.tagline': 'Forma y experiencia',
    'showcase.title': 'Diseñado para un enfoque profundo.',
    'showcase.subtitle':
      'Nada de barras laterales intrusivas al leer, sin anuncios en el reproductor y cero ruido. Cada píxel sirve a tu medio.',
    'showcase.card1.num': '01 / Detalle y panel de capítulos',
    'showcase.card1.badge': 'Metadatos y seguimiento',
    'showcase.card1.desc':
      'Inspección completa de metadatos, filtrado por etiquetas, transiciones de estado de lectura con un clic y marcado de episodios como vistos con un solo clic.',
    'showcase.card2.num': '02 / Lienzo de lectura minimalista',
    'showcase.card2.badge': 'Sin distracciones',
    'showcase.card2.desc':
      'Atajos de teclado, pasos de zoom personalizados, ajuste automático de página y un HUD flotante sutil que desaparece cuando lees.',
    'showcase.mobile.badge': 'Acompañante móvil',
    'showcase.mobile.title': 'Hecho para una sola mano.',
    'showcase.mobile.desc':
      'En pantallas táctiles pequeñas, Woyomi traslada la navegación a una barra inferior al alcance del pulgar, con carriles horizontales compactos y gestos de deslizamiento.',
    'showcase.mobile.list1': 'Navegación inferior: Explorar, Biblioteca, Historial, Plugins, Ajustes',
    'showcase.mobile.list2': 'Gestos para pasar al capítulo anterior o siguiente',
    'showcase.mobile.list3': 'Tema oscuro compacto optimizado para OLED',
    'showcase.mobile.railBrowse': 'Carril de exploración',
    'showcase.mobile.railLibrary': 'Vista de biblioteca',

    // Plugins Section
    'plugins.tagline': 'Arquitectura extensible',
    'plugins.title': 'Cero fuentes incluidas. 100 % extensible.',
    'plugins.subtitle':
      'Woyomi es un motor de reproducción abierto. No incluye scrapers preinstalados: tú instalas y gestionas solo las fuentes en las que confías.',
    'plugins.pillar1.title': 'Sandbox aislado de Web Worker',
    'plugins.pillar1.desc':
      'Cada plugin de fuente se ejecuta en su propio hilo de Web Worker aislado, sin acceso directo al DOM y con un estricto aislamiento de memoria.',
    'plugins.pillar2.title': 'SourceContext inyectado',
    'plugins.pillar2.desc':
      'Los plugins hablan con una interfaz de contexto inyectada con límite de peticiones, personalización de cabeceras y analizadores HTML/JSON integrados.',
    'plugins.pillar3.title': 'Verificación de integridad SHA-256',
    'plugins.pillar3.desc':
      'Los paquetes de plugins remotos se validan criptográficamente contra los hash del manifiesto antes de ejecutarse en tu cliente.',
    'plugins.pillar4.title': 'Repositorios estáticos descentralizados',
    'plugins.pillar4.desc':
      'Los repositorios de plugins pueden vivir en cualquier sitio: GitHub Releases, Cloudflare R2 o cualquier endpoint HTTPS estático.',
    'plugins.sdkBtn': 'Leer la documentación del SDK de plugins',
    'plugins.footerSandbox': 'Aislado en el runtime de Web Worker',
    'plugins.footerContracts': '✓ Contratos de API con tipos seguros',

    // Download Section
    'download.tagline': 'Obtén Woyomi',
    'download.title': 'Listo para tu biblioteca.',
    'download.subtitle':
      'Descarga las versiones de vista previa v{version} desde GitHub Releases o compila desde el código fuente con tu propia toolchain de Rust.',
    'download.windows.desc': 'Escritorio nativo con aceleración por hardware para Windows 10 y 11.',
    'download.windows.btn': 'Descargar .exe',
    'download.linux.desc': 'AppImage universal y paquetes nativos para Ubuntu, Debian, Fedora y Arch.',
    'download.linux.btn': 'Descargar paquete',
    'download.android.desc': 'Carcasa móvil optimizada para el tacto con navegación inferior para Android 10+.',
    'download.android.btn': 'Obtener APK',
    'download.buildTitle': 'Compilar desde el código fuente',
    'download.buildRequirements': 'Node 22+ · pnpm 11.8 · Rust 1.77+',
    'download.copyCmd': 'Copiar comandos',
    'download.copied': '¡Copiado!',

    // Footer
    'footer.desc':
      'Un lector y reproductor de medios multiformato y local primero. Incluye cero fuentes incluidas: instala y gestiona solo las fuentes en las que confías.',
    'footer.status': 'vista previa alpha v{version}',
    'footer.colProject': 'Proyecto',
    'footer.github': 'Repositorio en GitHub',
    'footer.releases': 'Versiones y cambios',
    'footer.issues': 'Seguimiento de errores',
    'footer.colExtensibility': 'Extensibilidad',
    'footer.pluginGuide': 'Guía del SDK de plugins',
    'footer.selfHosted': 'Backend de sincronización local',
    'footer.license': 'Licencia Apache 2.0',
    'footer.colLineage': 'Origen y créditos',
    'footer.heartStatement': 'Hecho con <span class="text-manga inline-block">♥</span> porque las grandes historias deberían ser libres para todos',
    'footer.copyright': '© {year} JeanRGW · Publicado bajo la licencia Apache 2.0'
  },

  id: {
    // Metadata
    'meta.title': 'woyomi — pembaca manga, anime, novel & film',
    'meta.description':
      'Pembaca dan pemutar media multisumber untuk manga, anime, novel, film, dan serial. Aplikasi Tauri 2 untuk desktop dan Android dengan sistem plugin TypeScript modular.',

    // Navigation & Header
    'nav.formats': 'Format',
    'nav.showcase': 'Antarmuka',
    'nav.plugins': 'Mesin Plugin',
    'nav.download': 'Unduh',
    'nav.getApp': 'Dapatkan Aplikasi',
    'nav.versionBadge': 'v{version} · alpha',
    'nav.language': 'Bahasa',

    // Hero Section
    'hero.previewBadge': 'Pratinjau v{version}',
    'hero.platforms': 'Windows · Linux · Android',
    'hero.titleLine1': 'Satu kanvas untuk setiap cerita.',
    'hero.titleLine2': 'Manga, anime, novel & sinema.',
    'hero.subtitle':
      'Pembaca dan pemutar terpadu untuk desktop & Android. Terinspirasi dari Aniyomi dan Mihon, dibangun ulang di atas Tauri 2 dengan penyimpanan lokal dan plugin TypeScript yang terisolasi.',
    'hero.ctaDownload': 'Dapatkan v{version}',
    'hero.ctaReleases': 'Rilis',
    'hero.ctaPlugins': 'Mesin Plugin',
    'hero.specDesktop': 'Windows & Linux',
    'hero.specAndroid': 'APK Android',
    'hero.specVault': 'Vault SQLite 100% Lokal',

    // Hero Showcase Tabs
    'hero.tab.browse': 'Jelajahi',
    'hero.tab.manga': 'Pembaca Manga',
    'hero.tab.detail': 'Detail Media',
    'hero.tab.library': 'Perpustakaan',
    'hero.tab.mobile': 'Aplikasi Android',
    'hero.deck.tauri': 'Inti Natif Tauri 2',
    'hero.deck.model': 'Model Bersama (Manga · Anime · Novel · Sinema)',
    'hero.deck.privacy': 'Tanpa telemetri · Utamakan lokal',
    'hero.mobileBrowse': 'Jelajahi di Android',
    'hero.mobileLibrary': 'Perpustakaan di Android',

    // Features Section
    'features.tagline': 'Mesin Media Terpadu',
    'features.title': 'Empat media. Satu pemutar yang fokus.',
    'features.subtitle':
      'Berhenti berpindah-pindah antara empat aplikasi dengan empat perpustakaan berbeda. Woyomi menyatukan semua format dalam satu alur kerja yang kohesif.',

    'features.manga.title': 'Manga & Webtoon',
    'features.manga.subtitle': 'Dirancang untuk panel dan spread',
    'features.manga.desc':
      'Berpindah dengan mulus antara gulir vertikal webtoon berkelanjutan dan spread dua halaman kanan-ke-kiri ala Jepang dengan buffering halaman instan.',
    'features.manga.tag1': 'Webtoon Berkelanjutan',
    'features.manga.tag2': 'Dua Halaman RTL',
    'features.manga.tag3': 'Tanpa Robek',
    'features.manga.tag4': 'Memori Halaman',

    'features.anime.title': 'Anime & Streaming',
    'features.anime.subtitle': 'Pemutar dipercepat perangkat keras',
    'features.anime.desc':
      'Pemutaran video HLS dan MP4 natif berperforma tinggi. Mencatat otomatis riwayat episode, mengelola musim, dan mengingat posisi waktu saat dijalankan ulang.',
    'features.anime.tag1': 'HLS Adaptif',
    'features.anime.tag2': 'MP4 Langsung',
    'features.anime.tag3': 'Riwayat Episode',
    'features.anime.tag4': 'Ingat Waktu',

    'features.novel.title': 'Light Novel & Prosa',
    'features.novel.subtitle': 'Pembaca tipografi tanpa gangguan',
    'features.novel.desc':
      'Kontrol tipografi bersih untuk sesi membaca berjam-jam. Sesuaikan ukuran font, spasi baris, margin, serta mode OLED hitam atau sepia hangat.',
    'features.novel.tag1': 'Font Kustom',
    'features.novel.tag2': 'Atur Margin',
    'features.novel.tag3': 'OLED / Sepia',
    'features.novel.tag4': 'Lompat Daftar Isi',

    'features.cinema.title': 'Film & Serial',
    'features.cinema.subtitle': 'Arsip multi-musim',
    'features.cinema.desc':
      'Kelompokkan film multipart dan serial multi-musim ke dalam satu entri katalog yang rapi dengan pelacakan status terpadu dan inspeksi metadata.',
    'features.cinema.tag1': 'Pengelompokan Musim',
    'features.cinema.tag2': 'Rel Multipart',
    'features.cinema.tag3': 'Inspektur Metadata',
    'features.cinema.tag4': 'Sinkronisasi Progres',

    'features.vault.title': 'Vault Perpustakaan Universal',
    'features.vault.subtitle': 'Satu taksonomi untuk semua kontenmu',
    'features.vault.desc':
      'Atur ke dalam <strong class="text-fg">Sedang Dibaca</strong>, <strong class="text-fg">Sedang Ditonton</strong>, <strong class="text-fg">Rencana Tonton</strong>, <strong class="text-fg">Selesai</strong>, dan <strong class="text-fg">Dijeda</strong>. Status, jumlah bab terbaca, dan waktu episode tetap terpadu di SQLite lokal.',

    'features.offline.title': 'Unduhan Natif Offline',
    'features.offline.subtitle': 'Tanpa internet? Bukan masalah.',
    'features.offline.desc':
      'Simpan bab manga, teks novel, dan stream MP4 langsung ke perangkatmu untuk membaca offline tanpa hambatan di mana pun.',

    // Showcase / Focus Section
    'showcase.tagline': 'Bentuk & Pengalaman',
    'showcase.title': 'Dirancang untuk fokus mendalam.',
    'showcase.subtitle':
      'Tanpa sidebar mengganggu saat membaca, tanpa iklan pemutar video, dan tanpa kekacauan. Setiap piksel melayani media Anda.',
    'showcase.card1.num': '01 / Detail & Deck Bab',
    'showcase.card1.badge': 'Metadata & Pelacakan',
    'showcase.card1.desc':
      'Inspeksi metadata yang kaya, filter multi-tag, transisi status baca sekali klik, dan penandaan episode telah dibaca sekali klik.',
    'showcase.card2.num': '02 / Kanvas Baca Minimalis',
    'showcase.card2.badge': 'Bebas Gangguan',
    'showcase.card2.desc':
      'Pintasan keyboard, langkah zoom kustom, penyesuaian halaman otomatis, dan HUD mengambang halus yang hilang saat Anda membaca.',
    'showcase.mobile.badge': 'Pendamping Seluler',
    'showcase.mobile.title': 'Dirancang untuk satu tangan.',
    'showcase.mobile.desc':
      'Di layar sentuh kecil, Woyomi memindahkan navigasi ke bilah tab bawah yang mudah dijangkau ibu jari, dengan rail horizontal ringkas dan gerakan swipe.',
    'showcase.mobile.list1': 'Navigasi bawah: Jelajahi, Perpustakaan, Riwayat, Plugin, Pengaturan',
    'showcase.mobile.list2': 'Gesture swipe untuk bab berikutnya/sebelumnya',
    'showcase.mobile.list3': 'Tema hitam ringkas ramah OLED',
    'showcase.mobile.railBrowse': 'Jelajah Rail',
    'showcase.mobile.railLibrary': 'Tampilan Perpustakaan',

    // Plugins Section
    'plugins.tagline': 'Arsitektur Dapat Diperluas',
    'plugins.title': 'Nol sumber bawaan. 100% dapat diperluas.',
    'plugins.subtitle':
      'Woyomi adalah mesin pemutar terbuka. Tidak ada scraper bawaan — Anda menginstal dan mengelola hanya sumber yang Anda percaya.',
    'plugins.pillar1.title': 'Sandbox Web Worker Terisolasi',
    'plugins.pillar1.desc':
      'Setiap plugin sumber berjalan di thread Web Worker terisolasi tanpa akses DOM langsung dan isolasi memori ketat.',
    'plugins.pillar2.title': 'SourceContext Disuntikkan',
    'plugins.pillar2.desc':
      'Plugin berbicara ke antarmuka konteks yang disuntikkan dengan pembatasan rate, penyesuaian header, dan parser HTML/JSON bawaan.',
    'plugins.pillar3.title': 'Verifikasi Integritas SHA-256',
    'plugins.pillar3.desc':
      'Paket plugin jarak jauh divalidasi secara kriptografis terhadap hash manifes sebelum dieksekusi di klien Anda.',
    'plugins.pillar4.title': 'Repositori Statis Terdesentralisasi',
    'plugins.pillar4.desc':
      'Repositori plugin dapat berada di mana saja — GitHub Releases, Cloudflare R2, atau endpoint HTTPS statis mana pun.',
    'plugins.sdkBtn': 'Baca Dokumen SDK Plugin',
    'plugins.footerSandbox': 'Terisolasi di runtime Web Worker',
    'plugins.footerContracts': '✓ Kontrak API aman tipe',

    // Download Section
    'download.tagline': 'Dapatkan Woyomi',
    'download.title': 'Siap untuk perpustakaanmu.',
    'download.subtitle':
      'Unduh build pratinjau v{version} dari GitHub Releases atau kompilasi dari sumber dengan toolchain Rust Anda sendiri.',
    'download.windows.desc': 'Shell desktop natif dengan akselerasi perangkat keras untuk Windows 10 dan 11.',
    'download.windows.btn': 'Unduh .exe',
    'download.linux.desc': 'AppImage universal dan paket natif untuk Ubuntu, Debian, Fedora, dan Arch.',
    'download.linux.btn': 'Unduh Paket',
    'download.android.desc': 'Shell seluler dioptimalkan sentuhan dengan navigasi bawah untuk Android 10+.',
    'download.android.btn': 'Dapatkan APK',
    'download.buildTitle': 'Buat dari Sumber',
    'download.buildRequirements': 'Node 22+ · pnpm 11.8 · Rust 1.77+',
    'download.copyCmd': 'Salin perintah',
    'download.copied': 'Tersalin!',

    // Footer
    'footer.desc':
      'Pembaca dan pemutar media multiformat yang mengutamakan lokal. Tanpa sumber bawaan — instal dan kelola hanya sumber yang Anda percaya.',
    'footer.status': 'pratinjau alpha v{version}',
    'footer.colProject': 'Proyek',
    'footer.github': 'Repositori GitHub',
    'footer.releases': 'Rilis & Changelog',
    'footer.issues': 'Pelacak Masalah',
    'footer.colExtensibility': 'Ekstensibilitas',
    'footer.pluginGuide': 'Panduan SDK Plugin',
    'footer.selfHosted': 'Backend Sinkronisasi Mandiri',
    'footer.license': 'Lisensi Apache 2.0',
    'footer.colLineage': 'Asal-usul & Kredit',
    'footer.heartStatement': 'Dibuat dengan <span class="text-manga inline-block">♥</span> karena cerita hebat seharusnya gratis untuk semua orang',
    'footer.copyright': '© {year} JeanRGW · Dirilis di bawah Lisensi Apache 2.0'
  },

  fr: {
    // Metadata
    'meta.title': 'woyomi — lecteur de manga, anime, romans et films',
    'meta.description':
      'Un lecteur et lecteur multimédia multisources pour les mangas, animes, romans, films et séries. Application Tauri 2 pour ordinateur et Android avec un système de plugins TypeScript modulaire.',

    // Navigation & Header
    'nav.formats': 'Formats',
    'nav.showcase': 'Interface',
    'nav.plugins': 'Moteur de plugins',
    'nav.download': 'Téléchargement',
    'nav.getApp': 'Obtenir l’app',
    'nav.versionBadge': 'v{version} · alpha',
    'nav.language': 'Langue',

    // Hero Section
    'hero.previewBadge': 'Aperçu v{version}',
    'hero.platforms': 'Windows · Linux · Android',
    'hero.titleLine1': 'Une seule toile pour chaque histoire.',
    'hero.titleLine2': 'Manga, anime, romans et cinéma.',
    'hero.subtitle':
      'Un lecteur et lecteur unifié pour ordinateur et Android. Inspiré d’Aniyomi et Mihon, reconstruit sur Tauri 2 avec un stockage local et des plugins TypeScript isolés.',
    'hero.ctaDownload': 'Obtenir v{version}',
    'hero.ctaReleases': 'Versions',
    'hero.ctaPlugins': 'Moteur de plugins',
    'hero.specDesktop': 'Windows & Linux',
    'hero.specAndroid': 'APK Android',
    'hero.specVault': 'Coffre SQLite 100 % local',

    // Hero Showcase Tabs
    'hero.tab.browse': 'Parcourir',
    'hero.tab.manga': 'Lecteur manga',
    'hero.tab.detail': 'Détail du média',
    'hero.tab.library': 'Bibliothèque',
    'hero.tab.mobile': 'App Android',
    'hero.deck.tauri': 'Noyau natif Tauri 2',
    'hero.deck.model': 'Modèle partagé (Manga · Anime · Roman · Cinéma)',
    'hero.deck.privacy': 'Zéro télémétrie · Local d’abord',
    'hero.mobileBrowse': 'Parcourir sur Android',
    'hero.mobileLibrary': 'Bibliothèque sur Android',

    // Features Section
    'features.tagline': 'Moteur multimédia unifié',
    'features.title': 'Quatre médiums. Un lecteur concentré.',
    'features.subtitle':
      'Arrêtez de jongler entre quatre applications aux bibliothèques différentes. Woyomi unifie chaque format dans un seul flux de travail cohérent.',

    'features.manga.title': 'Mangas & webtoons',
    'features.manga.subtitle': 'Conçu pour les cases et les planches',
    'features.manga.desc':
      'Basculez en douceur entre le défilement vertical continu des webtoons et les planches doubles de droite à gauche à la japonaise, avec une mise en mémoire tampon instantanée des pages.',
    'features.manga.tag1': 'Webtoon continu',
    'features.manga.tag2': 'Double page RTL',
    'features.manga.tag3': 'Zéro déchirure',
    'features.manga.tag4': 'Mémoire de page',

    'features.anime.title': 'Anime & streaming',
    'features.anime.subtitle': 'Lecteur accéléré par le matériel',
    'features.anime.desc':
      'Lecture native haute performance de vidéos HLS et MP4. Suit automatiquement l’historique des épisodes, gère les saisons et mémorise les positions au redémarrage.',
    'features.anime.tag1': 'HLS adaptatif',
    'features.anime.tag2': 'MP4 direct',
    'features.anime.tag3': 'Historique des épisodes',
    'features.anime.tag4': 'Rappel de position',

    'features.novel.title': 'Light novels & prose',
    'features.novel.subtitle': 'Lecteur typographique sans distraction',
    'features.novel.desc':
      'Des contrôles typographiques soignés conçus pour de longues sessions de lecture. Ajustez taille de police, interligne, marges et modes OLED noir ou sépia chaud.',
    'features.novel.tag1': 'Polices personnalisées',
    'features.novel.tag2': 'Réglage des marges',
    'features.novel.tag3': 'OLED / Sépia',
    'features.novel.tag4': 'Saut de sommaire',

    'features.cinema.title': 'Cinéma & séries',
    'features.cinema.subtitle': 'Archive multisaisons',
    'features.cinema.desc':
      'Regroupez les films en plusieurs parties et les séries à plusieurs saisons dans une seule entrée de catalogue épurée avec suivi d’état unifié et inspection des métadonnées.',
    'features.cinema.tag1': 'Regroupement de saisons',
    'features.cinema.tag2': 'Rails multiparties',
    'features.cinema.tag3': 'Inspecteur de métadonnées',
    'features.cinema.tag4': 'Synchronisation de progression',

    'features.vault.title': 'Coffre de bibliothèque universel',
    'features.vault.subtitle': 'Une seule taxonomie pour tout votre contenu',
    'features.vault.desc':
      'Organisez avec <strong class="text-fg">Lecture</strong>, <strong class="text-fg">Visionnage</strong>, <strong class="text-fg">À regarder</strong>, <strong class="text-fg">Terminé</strong> et <strong class="text-fg">En pause</strong>. Les statuts, chapitres lus et positions des épisodes restent unifiés dans le SQLite local.',

    'features.offline.title': 'Téléchargements natifs hors ligne',
    'features.offline.subtitle': 'Pas d’internet ? Aucun problème.',
    'features.offline.desc':
      'Enregistrez des chapitres de manga, des textes de romans et des flux MP4 directs sur votre appareil pour lire hors ligne où que vous soyez.',

    // Showcase / Focus Section
    'showcase.tagline': 'Forme & expérience',
    'showcase.title': 'Conçu pour la concentration profonde.',
    'showcase.subtitle':
      'Pas de barres latérales intrusives pendant la lecture, pas de publicités dans le lecteur et zéro encombrement. Chaque pixel sert votre contenu.',
    'showcase.card1.num': '01 / Détail et panneau de chapitres',
    'showcase.card1.badge': 'Métadonnées & suivi',
    'showcase.card1.desc':
      'Inspection riche des métadonnées, filtrage multi-étiquettes, transitions d’état de lecture en un clic et marquage des épisodes comme vus en un clic.',
    'showcase.card2.num': '02 / Toile de lecture minimaliste',
    'showcase.card2.badge': 'Sans distraction',
    'showcase.card2.desc':
      'Raccourcis clavier, pas de zoom personnalisés, ajustement automatique des pages et un HUD flottant subtil qui disparaît pendant la lecture.',
    'showcase.mobile.badge': 'Compagnon mobile',
    'showcase.mobile.title': 'Conçu pour une seule main.',
    'showcase.mobile.desc':
      'Sur les petits écrans tactiles, Woyomi déplace naturellement la navigation vers une barre d’onglets en bas à portée du pouce, avec des rails horizontaux compacts et des gestes de balayage.',
    'showcase.mobile.list1': 'Navigation en bas : Parcourir, Bibliothèque, Historique, Plugins, Réglages',
    'showcase.mobile.list2': 'Gestes de balayage pour chapitre suivant/précédent',
    'showcase.mobile.list3': 'Thème noir compact compatible OLED',
    'showcase.mobile.railBrowse': 'Rails de parcours',
    'showcase.mobile.railLibrary': 'Vue bibliothèque',

    // Plugins Section
    'plugins.tagline': 'Architecture extensible',
    'plugins.title': 'Zéro source incluse. 100 % extensible.',
    'plugins.subtitle':
      'Woyomi est un moteur de lecture ouvert. Il n’inclut aucun scraper préchargé — vous n’installez et ne gérez que les sources en qui vous avez confiance.',
    'plugins.pillar1.title': 'Sandbox Web Worker isolé',
    'plugins.pillar1.desc':
      'Chaque plugin de source s’exécute dans son propre thread Web Worker isolé, sans accès direct au DOM et avec une isolation mémoire stricte.',
    'plugins.pillar2.title': 'SourceContext injecté',
    'plugins.pillar2.desc':
      'Les plugins communiquent via une interface de contexte injectée avec limitation de débit, personnalisation des en-têtes et analyseurs HTML/JSON intégrés.',
    'plugins.pillar3.title': 'Vérification d’intégrité SHA-256',
    'plugins.pillar3.desc':
      'Les paquets de plugins distants sont validés cryptographiquement par rapport aux hachages du manifeste avant d’être exécutés sur votre client.',
    'plugins.pillar4.title': 'Dépôts statiques décentralisés',
    'plugins.pillar4.desc':
      'Les dépôts de plugins peuvent vivre n’importe où — GitHub Releases, Cloudflare R2 ou n’importe quel point de terminaison HTTPS statique.',
    'plugins.sdkBtn': 'Lire la doc du SDK de plugins',
    'plugins.footerSandbox': 'Isolé dans le runtime Web Worker',
    'plugins.footerContracts': '✓ Contrats d’API sûrs pour les types',

    // Download Section
    'download.tagline': 'Obtenez Woyomi',
    'download.title': 'Prêt pour votre bibliothèque.',
    'download.subtitle':
      'Téléchargez les builds d’aperçu v{version} depuis GitHub Releases ou compilez depuis le code source avec votre propre toolchain Rust.',
    'download.windows.desc': 'Coquille native pour ordinateur avec accélération matérielle pour Windows 10 et 11.',
    'download.windows.btn': 'Télécharger .exe',
    'download.linux.desc': 'AppImage universel et paquets natifs pour Ubuntu, Debian, Fedora et Arch.',
    'download.linux.btn': 'Télécharger le paquet',
    'download.android.desc': 'Coquille mobile optimisée tactile avec navigation en bas pour Android 10+.',
    'download.android.btn': 'Obtenir l’APK',
    'download.buildTitle': 'Compiler depuis le code source',
    'download.buildRequirements': 'Node 22+ · pnpm 11.8 · Rust 1.77+',
    'download.copyCmd': 'Copier les commandes',
    'download.copied': 'Copié !',

    // Footer
    'footer.desc':
      'Un lecteur et lecteur multimédia multiformat, local d’abord. Zéro source incluse — installez et gérez uniquement les sources en qui vous avez confiance.',
    'footer.status': 'aperçu alpha v{version}',
    'footer.colProject': 'Projet',
    'footer.github': 'Dépôt GitHub',
    'footer.releases': 'Versions & changelogs',
    'footer.issues': 'Suivi des problèmes',
    'footer.colExtensibility': 'Extensibilité',
    'footer.pluginGuide': 'Guide du SDK de plugins',
    'footer.selfHosted': 'Backend de synchronisation auto-hébergé',
    'footer.license': 'Licence Apache 2.0',
    'footer.colLineage': 'Origine & crédits',
    'footer.heartStatement': 'Conçu avec <span class="text-manga inline-block">♥</span> parce que les grandes histoires devraient être gratuites pour tous',
    'footer.copyright': '© {year} JeanRGW · Publié sous licence Apache 2.0'
  },

  ru: {
    // Metadata
    'meta.title': 'woyomi — читалка манги, аниме, новелл и фильмов',
    'meta.description':
      'Мультиисточниковый читатель и плеер для манги, аниме, романов, фильмов и сериалов. Приложение на Tauri 2 для компьютера и Android с модульной системой плагинов на TypeScript.',

    // Navigation & Header
    'nav.formats': 'Форматы',
    'nav.showcase': 'Интерфейс',
    'nav.plugins': 'Движок плагинов',
    'nav.download': 'Скачать',
    'nav.getApp': 'Получить приложение',
    'nav.versionBadge': 'v{version} · альфа',
    'nav.language': 'Язык',

    // Hero Section
    'hero.previewBadge': 'Превью v{version}',
    'hero.platforms': 'Windows · Linux · Android',
    'hero.titleLine1': 'Одно полотно для каждой истории.',
    'hero.titleLine2': 'Манга, аниме, романы и кино.',
    'hero.subtitle':
      'Единый читатель и плеер для компьютера и Android. Вдохновлён Aniyomi и Mihon, перестроен на Tauri 2 с локальным хранилищем и изолированными плагинами на TypeScript.',
    'hero.ctaDownload': 'Получить v{version}',
    'hero.ctaReleases': 'Релизы',
    'hero.ctaPlugins': 'Движок плагинов',
    'hero.specDesktop': 'Windows и Linux',
    'hero.specAndroid': 'APK для Android',
    'hero.specVault': '100% локальное хранилище SQLite',

    // Hero Showcase Tabs
    'hero.tab.browse': 'Обзор',
    'hero.tab.manga': 'Читалка манги',
    'hero.tab.detail': 'Детали медиа',
    'hero.tab.library': 'Библиотека',
    'hero.tab.mobile': 'Приложение Android',
    'hero.deck.tauri': 'Нативное ядро Tauri 2',
    'hero.deck.model': 'Общая модель (Манга · Аниме · Роман · Кино)',
    'hero.deck.privacy': 'Ноль телеметрии · Локально в первую очередь',
    'hero.mobileBrowse': 'Обзор на Android',
    'hero.mobileLibrary': 'Библиотека на Android',

    // Features Section
    'features.tagline': 'Единый медиадвижок',
    'features.title': 'Четыре формата. Один сфокусированный плеер.',
    'features.subtitle':
      'Хватит переключаться между четырьмя приложениями с четырьмя разными библиотеками. Woyomi объединяет все форматы в единый цельный рабочий процесс.',

    'features.manga.title': 'Манга и вебтуны',
    'features.manga.subtitle': 'Создан для панелей и разворотов',
    'features.manga.desc':
      'Плавно переключайтесь между непрерывной вертикальной прокруткой вебтунов и японскими разворотами на две страницы справа налево с мгновенным буферизованием страниц.',
    'features.manga.tag1': 'Непрерывный вебтун',
    'features.manga.tag2': 'Две страницы RTL',
    'features.manga.tag3': 'Без разрывов',
    'features.manga.tag4': 'Память страницы',

    'features.anime.title': 'Аниме и стриминг',
    'features.anime.subtitle': 'Плеер с аппаратным ускорением',
    'features.anime.desc':
      'Высокопроизводительное нативное воспроизведение видео HLS и MP4. Автоматически ведёт историю эпизодов, управляет сезонами и запоминает позицию при перезапуске.',
    'features.anime.tag1': 'Адаптивный HLS',
    'features.anime.tag2': 'Прямой MP4',
    'features.anime.tag3': 'История эпизодов',
    'features.anime.tag4': 'Возврат к позиции',

    'features.novel.title': 'Ранобэ и проза',
    'features.novel.subtitle': 'Читатель типографики без отвлечений',
    'features.novel.desc':
      'Продуманные типографские настройки для многочасовых сеансов чтения. Настраивайте размер шрифта, межстрочный интервал, поля и тёмный OLED-режим или тёплую сепию.',
    'features.novel.tag1': 'Свои шрифты',
    'features.novel.tag2': 'Настройка полей',
    'features.novel.tag3': 'OLED / Сепия',
    'features.novel.tag4': 'Переход по оглавлению',

    'features.cinema.title': 'Кино и сериалы',
    'features.cinema.subtitle': 'Архив из нескольких сезонов',
    'features.cinema.desc':
      'Группируйте многочастные фильмы и многосезонные сериалы в одну аккуратную запись каталога с единым отслеживанием статуса и проверкой метаданных.',
    'features.cinema.tag1': 'Группировка сезонов',
    'features.cinema.tag2': 'Многочастные серии',
    'features.cinema.tag3': 'Инспектор метаданных',
    'features.cinema.tag4': 'Синхронизация прогресса',

    'features.vault.title': 'Универсальное хранилище библиотеки',
    'features.vault.subtitle': 'Единая таксономия для всего вашего контента',
    'features.vault.desc':
      'Организуйте по категориям <strong class="text-fg">Читаю</strong>, <strong class="text-fg">Смотрю</strong>, <strong class="text-fg">В планах</strong>, <strong class="text-fg">Завершено</strong> и <strong class="text-fg">На паузе</strong>. Статусы, число прочитанных глав и таймкоды эпизодов остаются едиными в локальном SQLite.',

    'features.offline.title': 'Нативные офлайн-загрузки',
    'features.offline.subtitle': 'Нет интернета? Не проблема.',
    'features.offline.desc':
      'Сохраняйте главы манги, тексты романов и прямые MP4-потоки прямо на устройство для бесперебойного офлайн-чтения где угодно.',

    // Showcase / Focus Section
    'showcase.tagline': 'Форма и опыт',
    'showcase.title': 'Создан для глубокой сосредоточенности.',
    'showcase.subtitle':
      'Никаких навязчивых боковых панелей при чтении, никакой рекламы в плеере и ноль лишнего. Каждый пиксель служит вашему контенту.',
    'showcase.card1.num': '01 / Детали и панель глав',
    'showcase.card1.badge': 'Метаданные и отслеживание',
    'showcase.card1.desc':
      'Богатая проверка метаданных, фильтрация по тегам, смена статуса чтения в один клик и отметка эпизодов прочитанными в один клик.',
    'showcase.card2.num': '02 / Минималистичное полотно для чтения',
    'showcase.card2.badge': 'Без отвлечений',
    'showcase.card2.desc':
      'Горячие клавиши, настраиваемые шаги масштабирования, автоматическая подгонка страниц и тонкий плавающий интерфейс, исчезающий при чтении.',
    'showcase.mobile.badge': 'Мобильный компаньон',
    'showcase.mobile.title': 'Создан для одной руки.',
    'showcase.mobile.desc':
      'На небольших сенсорных экранах Woyomi естественно переносит навигацию на нижнюю панель, досягаемую большим пальцем, с компактными горизонтальными панелями и жестами свайпа.',
    'showcase.mobile.list1': 'Нижняя навигация: Обзор, Библиотека, История, Плагины, Настройки',
    'showcase.mobile.list2': 'Свайпы для следующей/предыдущей главы',
    'showcase.mobile.list3': 'Компактная чёрная тема, удобная для OLED',
    'showcase.mobile.railBrowse': 'Панели обзора',
    'showcase.mobile.railLibrary': 'Вид библиотеки',

    // Plugins Section
    'plugins.tagline': 'Расширяемая архитектура',
    'plugins.title': 'Ноль встроенных источников. 100% расширяемость.',
    'plugins.subtitle':
      'Woyomi — это открытый игровой движок. В нём нет встроенных скрейперов — вы устанавливаете и управляете только теми источниками, которым доверяете.',
    'plugins.pillar1.title': 'Изолированная песочница Web Worker',
    'plugins.pillar1.desc':
      'Каждый плагин источника работает в собственном изолированном потоке Web Worker без прямого доступа к DOM и со строгой изоляцией памяти.',
    'plugins.pillar2.title': 'Внедряемый SourceContext',
    'plugins.pillar2.desc':
      'Плагины взаимодействуют через внедряемый контекстный интерфейс с ограничением запросов, настройкой заголовков и встроенными парсерами HTML/JSON.',
    'plugins.pillar3.title': 'Проверка целостности SHA-256',
    'plugins.pillar3.desc':
      'Удалённые пакеты плагинов криптографически проверяются по хешам манифеста перед выполнением на вашем клиенте.',
    'plugins.pillar4.title': 'Децентрализованные статические репозитории',
    'plugins.pillar4.desc':
      'Репозитории плагинов могут находиться где угодно — GitHub Releases, Cloudflare R2 или любой статический HTTPS-эндпоинт.',
    'plugins.sdkBtn': 'Прочитать документацию SDK',
    'plugins.footerSandbox': 'Изолировано в среде Web Worker',
    'plugins.footerContracts': '✓ Безопасные по типам контракты API',

    // Download Section
    'download.tagline': 'Скачать Woyomi',
    'download.title': 'Готово для вашей библиотеки.',
    'download.subtitle':
      'Скачайте превью-сборки v{version} с GitHub Releases или соберите из исходников со своим Rust-тулчейном.',
    'download.windows.desc': 'Нативная оболочка для компьютера с аппаратным ускорением для Windows 10 и 11.',
    'download.windows.btn': 'Скачать .exe',
    'download.linux.desc': 'Универсальный AppImage и нативные пакеты для Ubuntu, Debian, Fedora и Arch.',
    'download.linux.btn': 'Скачать пакет',
    'download.android.desc': 'Мобильная оболочка для сенсорного управления с нижней навигацией для Android 10+.',
    'download.android.btn': 'Получить APK',
    'download.buildTitle': 'Сборка из исходников',
    'download.buildRequirements': 'Node 22+ · pnpm 11.8 · Rust 1.77+',
    'download.copyCmd': 'Скопировать команды',
    'download.copied': 'Скопировано!',

    // Footer
    'footer.desc':
      'Мультиформатный медиачитатель и стриминговый плеер, ориентированный на локальные данные. Ноль встроенных источников — устанавливайте и управляйте только теми, которым доверяете.',
    'footer.status': 'альфа-превью v{version}',
    'footer.colProject': 'Проект',
    'footer.github': 'Репозиторий на GitHub',
    'footer.releases': 'Релизы и журналы изменений',
    'footer.issues': 'Трекер ошибок',
    'footer.colExtensibility': 'Расширяемость',
    'footer.pluginGuide': 'Руководство по SDK плагинов',
    'footer.selfHosted': 'Собственный бэкенд синхронизации',
    'footer.license': 'Лицензия Apache 2.0',
    'footer.colLineage': 'Происхождение и благодарности',
    'footer.heartStatement': 'Сделано с <span class="text-manga inline-block">♥</span>, потому что великие истории должны быть свободны для всех',
    'footer.copyright': '© {year} JeanRGW · Выпущено под лицензией Apache 2.0'
  }
} as const

export type TranslationKey = keyof (typeof ui)['en']
