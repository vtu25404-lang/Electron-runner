
export enum GameState {
    Start = 'start',
    Instructions = 'instructions',
    Playing = 'playing',
    GameOver = 'gameOver',
    Won = 'won',
}

export type Avatar = 'boy' | 'girl';

export interface PlayerProfile {
    name: string;
    avatar: Avatar;
}

export enum MaterialType {
    Conductor = 'conductor',
    Semiconductor = 'semiconductor',
    Insulator = 'insulator',
    NTypeDoping = 'n-type',
    PTypeDoping = 'p-type',
    VoltageBoost = 'voltage-boost',
    Shield = 'shield',
    Magnet = 'magnet',
}

export interface Material {
    id: string;
    name: string;
    symbol?: string;
    type: MaterialType;
    points: number;
    energy: number;
    color: string;
    textColor?: string;
    isPowerUp?: boolean;
    insulatorHitMessage?: string;
}

export interface ObstacleInstance {
    id: number;
    material: Material;
    lane: number;
    top: number; // position from top in vh
}

export type ActivePowerUps = {
    [key in MaterialType]?: number;
};