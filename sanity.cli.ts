import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'jecq646j',
    dataset: 'production'
  },
  typegen: {
    enabled: true,
    path: '../client/{app,sanity}/**/*.{ts,tsx,js,jsx}',
    schema: 'schema.json',
    generates: '../client/sanity.types.ts',
    overloadClientMethods: false,
  },
  studioHost: 'rez-in-focus',
  deployment: {
    appId: 'u3ev3jwh3hkffxrfa8fzswyt',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
