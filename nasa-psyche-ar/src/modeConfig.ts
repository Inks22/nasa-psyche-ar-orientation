export type Difficulty = 'easy' | 'normal' | 'hard';

export interface ModeFeatures {
  spawnSamples: number;
  spawnObstacles: number;
  energyEnabled: boolean;
  energyDrainPerSec: number; // if energyEnabled
}

export const MODE_CONFIG: Record<Difficulty, ModeFeatures> = {
  easy: { spawnSamples: 20, spawnObstacles: 1, energyEnabled: false, energyDrainPerSec: 0 },
  normal: { spawnSamples: 20, spawnObstacles: 2, energyEnabled: true, energyDrainPerSec: 0.833 },
  hard: { spawnSamples: 20, spawnObstacles: 4, energyEnabled: true, energyDrainPerSec: 0.833 },
};

export default MODE_CONFIG;
