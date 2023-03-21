export interface Coordinate{
    latitude: number | null,
    longitude: number | null
}

export interface Temperature{
    current: number[] | null,
    min: number | null,
    max: number | null
}

export interface SunTime{
    sunrise: Date | null,
    sunset: Date | null
}