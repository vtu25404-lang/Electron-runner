
import { Material, MaterialType } from './types';

// Gameplay Constants
export const INITIAL_ENERGY = 100;
export const MAX_ENERGY = 100;
export const LANES = 3;
export const PLAYER_WIDTH = 10; // in vw
export const OBSTACLE_WIDTH = 8; // in vw
export const OBSTACLE_HEIGHT = 8; // in vh
export const GAME_SPEED_INITIAL = 0.5; // vh per frame
export const GAME_SPEED_BOOSTED = 1.5;
export const ENERGY_DRAIN_RATE = 0.03; // energy per frame
export const POWERUP_DURATION = 15000; // 15 seconds in ms
export const LEVEL_DISTANCE = 5000; // Total distance to the power station

// Material and Power-up Definitions
export const MATERIALS: Material[] = [
    // Conductors
    { id: 'Ag', name: 'Silver', symbol: 'Ag', type: MaterialType.Conductor, points: 100, energy: 20, color: 'bg-slate-300', textColor: 'text-black' },
    { id: 'Cu', name: 'Copper', symbol: 'Cu', type: MaterialType.Conductor, points: 90, energy: 18, color: 'bg-orange-400', textColor: 'text-black' },
    { id: 'Au', name: 'Gold', symbol: 'Au', type: MaterialType.Conductor, points: 80, energy: 16, color: 'bg-yellow-400', textColor: 'text-black' },
    { id: 'Al', name: 'Aluminium', symbol: 'Al', type: MaterialType.Conductor, points: 70, energy: 14, color: 'bg-slate-400' },
    { id: 'Fe', name: 'Iron', symbol: 'Fe', type: MaterialType.Conductor, points: 60, energy: 12, color: 'bg-gray-500' },
    { id: 'Steel', name: 'Steel', symbol: 'Steel', type: MaterialType.Conductor, points: 50, energy: 10, color: 'bg-gray-400', textColor: 'text-black' },
    { id: 'Brass', name: 'Brass', symbol: 'Brass', type: MaterialType.Conductor, points: 40, energy: 8, color: 'bg-yellow-600' },
    
    // Semiconductors
    { id: 'Si', name: 'Silicon', symbol: 'Si', type: MaterialType.Semiconductor, points: 30, energy: 5, color: 'bg-purple-600' },
    { id: 'Ge', name: 'Germanium', symbol: 'Ge', type: MaterialType.Semiconductor, points: 20, energy: 4, color: 'bg-indigo-600' },
    { id: 'Se', name: 'Selenium', symbol: 'Se', type: MaterialType.Semiconductor, points: 10, energy: 3, color: 'bg-gray-700' },
    
    // Insulators
    { id: 'Rubber', name: 'Rubber', symbol: 'RUB', type: MaterialType.Insulator, points: -60, energy: -30, color: 'bg-stone-800', insulatorHitMessage: 'Rubber is an insulator and blocks electron flow.' },
    { id: 'Plastic', name: 'Plastic', symbol: 'PLA', type: MaterialType.Insulator, points: -50, energy: -25, color: 'bg-pink-800', insulatorHitMessage: 'Plastic is an insulator and blocks electron flow.' },
    { id: 'Glass', name: 'Glass', symbol: 'GLS', type: MaterialType.Insulator, points: -40, energy: -20, color: 'bg-cyan-900', insulatorHitMessage: 'Glass is an insulator and blocks electron flow.' },
    { id: 'Wood', name: 'Dry Wood', symbol: 'WOOD', type: MaterialType.Insulator, points: -30, energy: -15, color: 'bg-yellow-900', insulatorHitMessage: 'Dry wood is an insulator and blocks electron flow.' },
    { id: 'Ceramic', name: 'Ceramic', symbol: 'CER', type: MaterialType.Insulator, points: -20, energy: -10, color: 'bg-orange-800', insulatorHitMessage: 'Ceramic is an insulator and blocks electron flow.' },
    { id: 'Paper', name: 'Paper', symbol: 'PPR', type: MaterialType.Insulator, points: -10, energy: -5, color: 'bg-stone-400', textColor: 'text-black', insulatorHitMessage: 'Paper is an insulator and blocks electron flow.' },

    // Doping Power-ups (n-type)
    { id: 'P', name: 'Phosphorus', symbol: 'P', type: MaterialType.NTypeDoping, points: 50, energy: 0, color: 'bg-blue-500', isPowerUp: true },
    { id: 'As', name: 'Arsenic', symbol: 'As', type: MaterialType.NTypeDoping, points: 50, energy: 0, color: 'bg-blue-600', isPowerUp: true },
    { id: 'Sb', name: 'Antimony', symbol: 'Sb', type: MaterialType.NTypeDoping, points: 50, energy: 0, color: 'bg-blue-700', isPowerUp: true },
    
    // Doping Power-ups (p-type)
    { id: 'B', name: 'Boron', symbol: 'B', type: MaterialType.PTypeDoping, points: 50, energy: 0, color: 'bg-red-500', isPowerUp: true },
    { id: 'Ga', name: 'Gallium', symbol: 'Ga', type: MaterialType.PTypeDoping, points: 50, energy: 0, color: 'bg-red-600', isPowerUp: true },
    { id: 'Al_p', name: 'Aluminium (p-type)', symbol: 'Al', type: MaterialType.PTypeDoping, points: 50, energy: 0, color: 'bg-red-700', isPowerUp: true },

    // Other Power-ups
    { id: 'VoltageBoost', name: 'Voltage Boost', symbol: '⚡', type: MaterialType.VoltageBoost, points: 0, energy: 0, color: 'bg-yellow-500', isPowerUp: true },
    { id: 'Shield', name: 'Dielectric Shield', symbol: '🛡️', type: MaterialType.Shield, points: 0, energy: 0, color: 'bg-cyan-500', isPowerUp: true },
    { id: 'Magnet', name: 'Material Magnet', symbol: '🧲', type: MaterialType.Magnet, points: 0, energy: 0, color: 'bg-pink-500', isPowerUp: true },
];

export const ALL_MATERIALS = [...MATERIALS];

// Notice Definitions
export const CONDUCTOR_NOTICES = [
    { message: "Good conductor! Energy flow is high.", color: "text-green-400" },
    { message: "Excellent choice! Conductors have free electrons that carry charge easily.", color: "text-green-300" },
    { message: "Low resistivity! This material allows for maximum current flow.", color: "text-green-300" },
    { message: "Conductivity high! Metals like this are the backbone of electrical wiring.", color: "text-green-400" },
    { message: "Electron superhighway! This is a great path for the current.", color: "text-green-300" },
    { message: "Charge is flowing freely through the metallic lattice!", color: "text-green-400" },
];

export const SEMICONDUCTOR_NOTICES = [
    { message: "Semiconductor detected: Controlled conduction.", color: "text-blue-300" },
    { message: "This material's band gap is key to modern electronics!", color: "text-blue-400" },
    { message: "With a little energy, this semiconductor's electrons can jump the gap.", color: "text-blue-300" },
    { message: "The foundation of transistors and diodes!", color: "text-blue-400" },
    { message: "Doping could turn this into a powerful conductor!", color: "text-purple-400" },
];

export const INSULATOR_NOTICES = [
    { message: "High resistance material detected.", color: "text-red-500" },
    { message: "Insulator hit! Its electrons are tightly bound, blocking current.", color: "text-red-400" },
    { message: "This material is used to prevent electric shock.", color: "text-red-400" },
    { message: "Dead end! The large energy gap in insulators stops electron flow.", color: "text-red-500" },
    { message: "Charge flow halted! Insulators protect circuits by stopping current.", color: "text-red-400" },
];


export const NOTICES: { [key: string]: { message: string, color: string } } = {
    // Energy
    ENERGY_REQUIRED: { message: "Energy is required for electron motion.", color: "text-yellow-300" },
    ENERGY_DECREASING: { message: "Energy decreasing… collect conductors to continue.", color: "text-yellow-400" },
    NO_ENERGY: { message: "No energy → No current flow.", color: "text-red-500" },
    VOLTAGE_NEEDED: { message: "Voltage source needed to restart motion.", color: "text-red-400" },
    POTENTIAL_DRIVES: { message: "Electric potential drives the electron forward.", color: "text-cyan-300" },
    // Doping
    N_TYPE_ACTIVE: { message: "n-type doping activated: Extra electrons added.", color: "text-blue-300" },
    P_TYPE_ACTIVE: { message: "p-type doping activated: Holes created.", color: "text-red-300" },
    DOPING_BOOST: { message: "Semiconductor behaving like a conductor.", color: "text-purple-400" },
    // Power-ups
    VOLTAGE_BOOST: { message: "Voltage increased! Speed boosted.", color: "text-yellow-300" },
    SHIELD_ACTIVE: { message: "Dielectric shield active.", color: "text-cyan-300" },
    MAGNET_ON: { message: "Material magnet ON.", color: "text-pink-300" },
    // Goal
    GOAL_PROGRESS: { message: "Electricity moving safely toward the power station.", color: "text-green-200" },
    // Concept
    VOLTAGE_CURRENT_CONCEPT: { message: "Higher voltage and lower resistance give greater current.", color: "text-cyan-200" },
};