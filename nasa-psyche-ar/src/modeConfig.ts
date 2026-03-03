export type Difficulty = 'easy' | 'normal' | 'hard';

export interface ModeFeatures {
  spawnSamples: number;
  spawnObstacles: number;
  energyEnabled: boolean;
  energyDrainPerSec: number; // if energyEnabled
}

export const MODE_CONFIG: Record<Difficulty, ModeFeatures> = {
  easy: { spawnSamples: 3, spawnObstacles: 1, energyEnabled: false, energyDrainPerSec: 0 },
  normal: { spawnSamples: 5, spawnObstacles: 2, energyEnabled: true, energyDrainPerSec: 1 },
  hard: { spawnSamples: 8, spawnObstacles: 4, energyEnabled: true, energyDrainPerSec: 2 },
};

export default MODE_CONFIG;
