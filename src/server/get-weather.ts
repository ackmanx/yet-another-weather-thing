import { ForecastAPI, OpenMeteo, type Providers } from '$server/weather-api-adapters'

export interface CurrentConditions {
  temp: number
  apparentTemp: number
  observationDate: string
  dewPoint: number
  humidity: number
  windSpeed: number
  windGust: number
  weatherCode: number
}

export async function getCurrentConditions(
  provider: Providers
): Promise<CurrentConditions | undefined> {
  if (provider === 'forecast-api') {
    return await ForecastAPI.currentConditions()
  }

  if (provider === 'open-meteo') {
    return await OpenMeteo.currentConditions()
  }

  return undefined
}
