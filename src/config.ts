const CURRENT_VERSION = '0.2.1'

export const RELEASE = {
  version: CURRENT_VERSION,
  tag: `v${CURRENT_VERSION}`,
  channel: 'alpha',
  repoUrl: 'https://github.com/JeanRGW/woyomi',
  releasesUrl: 'https://github.com/JeanRGW/woyomi/releases',
  releaseTagUrl(version: string = CURRENT_VERSION) {
    return `https://github.com/JeanRGW/woyomi/releases/tag/v${version}`
  },
  getDownloadUrl(platform: 'windows' | 'linux' | 'android', version: string = CURRENT_VERSION) {
    const base = `https://github.com/JeanRGW/woyomi/releases/download/v${version}`
    switch (platform) {
      case 'windows':
        return `${base}/woyomi_${version}_x64-setup.exe`
      case 'linux':
        return `${base}/woyomi_${version}_amd64.AppImage`
      case 'android':
        return `${base}/woyomi_${version}_universal.apk`
    }
  }
} as const
