import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'jecq646j',
    dataset: 'production'
  },
  typegen: {
    enabled: true,
    path: '../static-exercise/{app,sanity}/**/*.{ts,tsx,js,jsx}',
    schema: 'schema.json',
    generates: '../static-exercise/sanity.types.ts',
    overloadClientMethods: true,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
