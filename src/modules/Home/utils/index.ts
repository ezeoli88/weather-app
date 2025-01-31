import { BarilocheWeatherData, BuenosAiresWeatherData } from '../Mock';

export async function getWeatherData(city: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Convertimos a minúsculas para hacer la comparación case-insensitive
    const cityLower = city.toLowerCase();

    if (cityLower.includes('buenos aires')) {
        return BuenosAiresWeatherData;
    }
    return BarilocheWeatherData;
}
