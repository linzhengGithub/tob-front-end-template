import { LOCAL_CONFIG, LOCAL_THEME_COLOR, LOCAL_THEME_CONFIG } from '@/enums/cacheEnum'

interface BasicStore {
  [LOCAL_CONFIG]?: AppLocalConfig
  [LOCAL_THEME_CONFIG]?: Theme.Config
  [LOCAL_THEME_COLOR]?: String
}

type LocalStore = BasicStore
type LocalKeys = keyof LocalStore

/**
 * siderCollapse 侧边栏折叠状态
 */
export interface AppLocalConfig {
  siderCollapse: boolean
}

export const setLocalkey = (key: LocalKeys, value: LocalStore[LocalKeys]) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalKey = (key: LocalKeys) => {
  try {
    return JSON.parse(window.localStorage?.getItem(key) as any)
  } catch {
    console.error('JSON.parse fail')
  }
}

export const clearLocalKey = (key: LocalKeys) => {
  window.localStorage.removeItem(key)
}

export const clearLocal = () => {
  window.localStorage.clear()
}
