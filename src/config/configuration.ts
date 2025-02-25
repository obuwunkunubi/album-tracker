import { EnvironmentConfig } from './environment-config'

export default (): EnvironmentConfig => ({
  PORT: parseInt(process.env.PORT) || 3000,
  PG_HOST: process.env.PG_HOST || 'localhost',
  PG_PORT: parseInt(process.env.PG_PORT) || 5432,
  PG_USERNAME: process.env.PG_USERNAME || 'album-tracker',
  PG_PASSWORD: process.env.PG_PASSWORD || 'album-tracker',
  PG_DATABASE: process.env.PG_DATABASE || 'album-tracker',
  LAST_FM_API_KEY: process.env.LAST_FM_API_KEY,
  LAST_FM_SEARCH_LIMIT: parseInt(process.env.LAST_FM_SEARCH_LIMIT) || 10,
  JWT_SECRET: process.env.JWT_SECRET || 'secret'
})
