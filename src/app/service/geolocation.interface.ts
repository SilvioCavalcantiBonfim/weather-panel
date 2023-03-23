export interface Coordinate{
    latitude: number | null,
    longitude: number | null
}

export interface Temperature{
    current: number[],
    min: number[],
    max: number[]
}

export interface SunTime{
    sunrise: Date | null,
    sunset: Date | null
}