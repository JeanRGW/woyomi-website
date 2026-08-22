import { ui, defaultLang, showDefaultLang, languages, type SupportedLanguage, type TranslationKey } from './ui'
import { RELEASE } from '../config'

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/')
  if (lang && lang in languages) {
    return lang as SupportedLanguage
  }
  return defaultLang
}

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: TranslationKey, params?: Record<string, string | number>): string {
    const dict = ui[lang] || ui[defaultLang]
    let str = (dict as any)[key] || (ui[defaultLang] as any)[key] || key

    const merged = { version: RELEASE.version, ...params }
    Object.entries(merged).forEach(([paramKey, paramVal]) => {
      str = str.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramVal))
    })

    return str
  }
}

export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, l: SupportedLanguage = lang): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    if (!showDefaultLang && l === defaultLang) {
      return cleanPath
    }
    return `/${l}${cleanPath === '/' ? '' : cleanPath}`
  }
}
