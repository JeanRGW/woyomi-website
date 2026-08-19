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
  }
} as const

export type SupportedLanguage = keyof typeof languages

export const ui = {
  en: {
    // Metadata
    'meta.title': 'woyomi — Your library. Every format. One calm, beautiful home.',
    'meta.description':
      'A multi-source media reader and player for manga, anime, novels, movies, and series. Tauri 2 desktop and Android app with a modular TypeScript plugin system.',

    // Navigation & Header
    'nav.formats': 'Formats',
    'nav.showcase': 'Interface',
    'nav.plugins': 'Plugin Engine',
    'nav.download': 'Download',
    'nav.getApp': 'Get App',
    'nav.versionBadge': 'v0.1.0 · alpha',
    'nav.language': 'Language',

    // Hero Section
    'hero.previewBadge': 'v0.1.0 Preview',
    'hero.platforms': 'Windows · Linux · Android',
    'hero.titleLine1': 'One canvas for every story.',
    'hero.titleLine2': 'Manga, anime, novels & cinema.',
    'hero.subtitle':
      'A unified reader and player for desktop & Android. Inspired by Aniyomi and Mihon, rebuilt on Tauri 2 with local-first storage and sandboxed TypeScript plugins.',
    'hero.ctaDownload': 'Get v0.1.0',
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
      'Download v0.1.0 preview builds from GitHub Releases or compile from source with your own Rust toolchain.',
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
    'footer.status': 'v0.1.0 alpha preview',
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
    'meta.title': 'woyomi — Sua biblioteca. Todos os formatos. Uma experiência única e fluida.',
    'meta.description':
      'Leitor e reprodutor de mídia multifonte para mangás, animes, light novels, filmes e séries. App em Tauri 2 para desktop e Android com sistema modular de plugins em TypeScript.',

    // Navegação & Header
    'nav.formats': 'Formatos',
    'nav.showcase': 'Interface',
    'nav.plugins': 'Plugins',
    'nav.download': 'Download',
    'nav.getApp': 'Baixar App',
    'nav.versionBadge': 'v0.1.0 · alpha',
    'nav.language': 'Idioma',

    // Seção Hero
    'hero.previewBadge': 'v0.1.0 Prévia',
    'hero.platforms': 'Windows · Linux · Android',
    'hero.titleLine1': 'Um só espaço para cada história.',
    'hero.titleLine2': 'Mangás, animes, novels & cinema.',
    'hero.subtitle':
      'Um leitor e reprodutor unificado para desktop e Android. Inspirado no Aniyomi e Mihon, reconstruído em Tauri 2 com armazenamento local e plugins isolados em TypeScript.',
    'hero.ctaDownload': 'Baixar v0.1.0',
    'hero.ctaReleases': 'Versões',
    'hero.ctaPlugins': 'Motor de Plugins',
    'hero.specDesktop': 'Windows & Linux',
    'hero.specAndroid': 'APK para Android',
    'hero.specVault': 'Cofre 100% Local em SQLite',

    // Abas do Hero
    'hero.tab.browse': 'Explorar',
    'hero.tab.manga': 'Leitor de Mangá',
    'hero.tab.detail': 'Detalhes da Mídia',
    'hero.tab.library': 'Biblioteca',
    'hero.tab.mobile': 'App Android',
    'hero.deck.tauri': 'Núcleo Nativo Tauri 2',
    'hero.deck.model': 'Modelo Unificado (Mangá · Anime · Novel · Cinema)',
    'hero.deck.privacy': 'Zero telemetria · 100% local',
    'hero.mobileBrowse': 'Explorar no Android',
    'hero.mobileLibrary': 'Biblioteca no Android',

    // Seção de Recursos (Features)
    'features.tagline': 'Motor Unificado de Mídia',
    'features.title': 'Quatro formatos. Um reprodutor focado.',
    'features.subtitle':
      'Chega de alternar entre quatro aplicativos e quatro bibliotecas diferentes. O Woyomi unifica tudo em um fluxo coeso e direto.',

    'features.manga.title': 'Mangás & Webtoons',
    'features.manga.subtitle': 'Criado para páginas e quadros',
    'features.manga.desc':
      'Alterne facilmente entre rolagem vertical contínua para webtoons e visualização dupla direita-para-esquerda estilo japonês com carregamento instantâneo.',
    'features.manga.tag1': 'Webtoon Contínuo',
    'features.manga.tag2': 'Página Dupla RTL',
    'features.manga.tag3': 'Sem Quebras',
    'features.manga.tag4': 'Memória de Página',

    'features.anime.title': 'Animes & Streaming',
    'features.anime.subtitle': 'Player acelerado por hardware',
    'features.anime.desc':
      'Reprodução de alta performance de vídeos HLS e MP4. Histórico automático de episódios, temporadas e retomada de reprodução precisa.',
    'features.anime.tag1': 'HLS Adaptativo',
    'features.anime.tag2': 'MP4 Direto',
    'features.anime.tag3': 'Histórico de Episódios',
    'features.anime.tag4': 'Retomada de Posição',

    'features.novel.title': 'Light Novels & Textos',
    'features.novel.subtitle': 'Leitor tipográfico sem distrações',
    'features.novel.desc':
      'Controles tipográficos feitos para longas horas de leitura. Ajuste tamanho de fonte, entrelinha, margens e modos Preto OLED ou Sépia.',
    'features.novel.tag1': 'Fontes Personalizadas',
    'features.novel.tag2': 'Ajuste de Margem',
    'features.novel.tag3': 'OLED / Sépia',
    'features.novel.tag4': 'Índice de Capítulos',

    'features.cinema.title': 'Cinema & Séries',
    'features.cinema.subtitle': 'Arquivo de temporadas e filmes',
    'features.cinema.desc':
      'Agrupe filmes em partes e séries completas em um catálogo limpo com progresso e detalhes integrados.',
    'features.cinema.tag1': 'Temporadas Agrupadas',
    'features.cinema.tag2': 'Organização por Partes',
    'features.cinema.tag3': 'Inspetor de Metadados',
    'features.cinema.tag4': 'Sincronização',

    'features.vault.title': 'Cofre Universal da Biblioteca',
    'features.vault.subtitle': 'Uma taxonomia única para todo o seu conteúdo',
    'features.vault.desc':
      'Organize em <strong class="text-fg">Lendo</strong>, <strong class="text-fg">Assistindo</strong>, <strong class="text-fg">Planejo Ver</strong>, <strong class="text-fg">Concluído</strong> e <strong class="text-fg">Pausado</strong>. Status, contagem de capítulos lidos e tempo de episódios unificados no SQLite local.',

    'features.offline.title': 'Downloads Nativos Offline',
    'features.offline.subtitle': 'Sem internet? Sem problemas.',
    'features.offline.desc':
      'Baixe capítulos de mangá, textos de novels e vídeos MP4 direto no seu dispositivo para curtir offline onde estiver.',

    // Seção de Interface (Showcase)
    'showcase.tagline': 'Design & Experiência',
    'showcase.title': 'Criado para foco total.',
    'showcase.subtitle':
      'Sem barras laterais intrusivas, sem anúncios no reprodutor de vídeo e sem poluição visual. Cada detalhe pensado para a sua mídia.',
    'showcase.card1.num': '01 / Detalhes & Capítulos',
    'showcase.card1.badge': 'Metadados & Progresso',
    'showcase.card1.desc':
      'Inspeção completa de metadados, filtros por tags, alteração rápida de status de leitura e marcação de episódios com um clique.',
    'showcase.card2.num': '02 / Tela de Leitura Minimalista',
    'showcase.card2.badge': 'Sem Distrações',
    'showcase.card2.desc':
      'Atalhos de teclado, zoom personalizado, ajuste automático de página e interface flutuante discreta que some enquanto você lê.',
    'showcase.mobile.badge': 'Versão Mobile',
    'showcase.mobile.title': 'Pensado para usar com uma mão.',
    'showcase.mobile.desc':
      'Em telas de toque, o Woyomi adapta a navegação para uma barra inferior ao alcance do polegar, com trilhas horizontais compactas e gestos de arrasto.',
    'showcase.mobile.list1': 'Navegação inferior: Explorar, Biblioteca, Histórico, Plugins, Ajustes',
    'showcase.mobile.list2': 'Gestos de deslizar para avançar e voltar capítulos',
    'showcase.mobile.list3': 'Tema escuro otimizado para telas OLED',
    'showcase.mobile.railBrowse': 'Explorar',
    'showcase.mobile.railLibrary': 'Biblioteca',

    // Seção de Plugins
    'plugins.tagline': 'Arquitetura Extensível',
    'plugins.title': 'Zero fontes pré-instaladas. 100% extensível.',
    'plugins.subtitle':
      'O Woyomi é um motor de reprodução livre. Não inclui fontes ou scrapers de fábrica — você instala e gerencia apenas as fontes em que confia.',
    'plugins.pillar1.title': 'Isolamento em Web Worker Sandbox',
    'plugins.pillar1.desc':
      'Cada plugin de fonte roda em uma thread isolada de Web Worker, sem acesso direto ao DOM e com controle rigoroso de memória.',
    'plugins.pillar2.title': 'SourceContext Injetado',
    'plugins.pillar2.desc':
      'Plugins se comunicam através de uma interface injetada com limite de requisições, headers customizados e parsers nativos de HTML/JSON.',
    'plugins.pillar3.title': 'Validação de Integridade SHA-256',
    'plugins.pillar3.desc':
      'Pacotes remotos de plugins são verificados criptograficamente com hashes do manifesto antes de serem executados.',
    'plugins.pillar4.title': 'Repositórios Estáticos Descentralizados',
    'plugins.pillar4.desc':
      'Repositórios de plugins podem ficar em qualquer lugar — GitHub Releases, Cloudflare R2 ou qualquer servidor HTTPS estático.',
    'plugins.sdkBtn': 'Documentação do SDK de Plugins',
    'plugins.footerSandbox': 'Executado em ambiente Web Worker isolado',
    'plugins.footerContracts': '✓ Contratos de API com tipagem estrita',

    // Seção de Download
    'download.tagline': 'Baixar Woyomi',
    'download.title': 'Pronto para a sua biblioteca.',
    'download.subtitle':
      'Baixe as versões de prévia v0.1.0 no GitHub Releases ou compile a partir do código-fonte com a sua toolchain Rust.',
    'download.windows.desc': 'App nativo para desktop com aceleração de hardware para Windows 10 e 11.',
    'download.windows.btn': 'Baixar .exe',
    'download.linux.desc': 'AppImage universal e pacotes nativos para Ubuntu, Debian, Fedora e Arch.',
    'download.linux.btn': 'Baixar Pacote',
    'download.android.desc': 'App mobile otimizado para toque com navegação inferior para Android 10+.',
    'download.android.btn': 'Baixar APK',
    'download.buildTitle': 'Compilar do Código-Fonte',
    'download.buildRequirements': 'Node 22+ · pnpm 11.8 · Rust 1.77+',
    'download.copyCmd': 'Copiar comandos',
    'download.copied': 'Copiado!',

    // Rodapé (Footer)
    'footer.desc':
      'Leitor e reprodutor de mídia multiformato, 100% local. Não inclui fontes de fábrica — instale e gerencie apenas o que você confia.',
    'footer.status': 'v0.1.0 prévia alpha',
    'footer.colProject': 'Projeto',
    'footer.github': 'Repositório no GitHub',
    'footer.releases': 'Versões & Changelogs',
    'footer.issues': 'Relatar Problemas',
    'footer.colExtensibility': 'Extensibilidade',
    'footer.pluginGuide': 'Guia do SDK de Plugins',
    'footer.selfHosted': 'Servidor de Sincronização Próprio',
    'footer.license': 'Licença Apache 2.0',
    'footer.colLineage': 'Origem & Créditos',
    'footer.heartStatement': 'Feito com <span class="text-manga inline-block">♥</span> porque grandes histórias devem ser livres para todos',
    'footer.copyright': '© {year} JeanRGW · Licenciado sob Apache 2.0'
  }
} as const

export type TranslationKey = keyof (typeof ui)['en']
