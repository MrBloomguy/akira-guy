// Generate a random seed for consistent but random avatars
export const generateRandomSeed = (): string => {
  return Math.random().toString(36).substring(7);
};

// Get Dicebear URL with specific style
export const getDicebearUrl = (seed: string): string => {
  return `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&size=64`;
};