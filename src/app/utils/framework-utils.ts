export const frameworks = [
    "react",
    "chrome",
    "qwik",
    "mobile",
    "tailwind",
    "desktop",
    "vue",
    "safari",
    "svelte",
] as const;

export type Framwork = (typeof frameworks) [number]; 

