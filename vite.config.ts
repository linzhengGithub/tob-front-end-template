import { defineConfig, loadEnv } from 'vite'
import { getSrcPath } from './build/utils'
import { createProxy, setupVitePlugins } from './build'
import { getServiceEnvConfig } from './.env-config'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const viteEnv = loadEnv(mode, root) as unknown as ImportMetaEnv

  const { VITE_BASE_URL, VITE_PORT } = viteEnv

  const isBuild = command === 'build'

  const envConfig = getServiceEnvConfig(viteEnv)

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': getSrcPath(),
      },
    },
    plugins: setupVitePlugins(viteEnv, isBuild),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/variable.scss" as *;`,
        },
      },
    },
    optimizeDeps: {
      include: [
        'echarts',
        'lodash-es'
      ]
    },
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(envConfig),
    },
  }
})
