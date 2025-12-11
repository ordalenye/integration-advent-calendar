export interface IntegrationQuestion {
  day: number;
  integral: string;
  answer: string;
  hint?: string;
}

export type Difficulty = "easy" | "medium" | "hard";

// Easy: Basic integration techniques
const easyQuestions: IntegrationQuestion[] = [
  { day: 1, integral: "\\int 3x^2 \\, dx", answer: "x^3 + C" },
  { day: 2, integral: "\\int (5x^3 - 2) \\, dx", answer: "\\frac{5x^4}{4} - 2x + C" },
  { day: 3, integral: "\\int x^{1/2} \\, dx", answer: "\\frac{2x^{3/2}}{3} + C" },
  { day: 4, integral: "\\int 4x^{-2} \\, dx", answer: "-\\frac{4}{x} + C" },
  { day: 5, integral: "\\int_0^2 (x + 1) \\, dx", answer: "4" },
  { day: 6, integral: "\\int (2x + 3)^2 \\, dx", answer: "\\frac{(2x+3)^3}{6} + C" },
  { day: 7, integral: "\\int e^x \\, dx", answer: "e^x + C" },
  { day: 8, integral: "\\int 3e^{2x} \\, dx", answer: "\\frac{3e^{2x}}{2} + C" },
  { day: 9, integral: "\\int \\frac{1}{x} \\, dx", answer: "\\ln|x| + C" },
  { day: 10, integral: "\\int_0^1 2e^{3x} \\, dx", answer: "\\frac{2(e^3 - 1)}{3}" },
  { day: 11, integral: "\\int \\sin x \\, dx", answer: "-\\cos x + C" },
  { day: 12, integral: "\\int 3\\cos(2x) \\, dx", answer: "\\frac{3\\sin(2x)}{2} + C" },
  { day: 13, integral: "\\int \\sec^2 x \\, dx", answer: "\\tan x + C" },
  { day: 14, integral: "\\int_0^{\\pi/2} \\sin x \\, dx", answer: "1" },
  { day: 15, integral: "\\int 2x(x^2 + 1)^3 \\, dx", answer: "\\frac{(x^2+1)^4}{4} + C" },
  { day: 16, integral: "\\int \\frac{1}{2x + 3} \\, dx", answer: "\\frac{1}{2}\\ln|2x+3| + C" },
  { day: 17, integral: "\\int \\cos(3x) \\, dx", answer: "\\frac{\\sin(3x)}{3} + C" },
  { day: 18, integral: "\\int_0^1 x\\sqrt{x^2+1} \\, dx", answer: "\\frac{2\\sqrt{2}-1}{3}" },
  { day: 19, integral: "\\int xe^x \\, dx", answer: "e^x(x-1) + C" },
  { day: 20, integral: "\\int x\\sin x \\, dx", answer: "-x\\cos x + \\sin x + C" },
  { day: 21, integral: "\\int \\ln x \\, dx", answer: "x\\ln x - x + C" },
  { day: 22, integral: "\\int \\frac{x}{(x^2+4)^2} \\, dx", answer: "-\\frac{1}{2(x^2+4)} + C" },
  { day: 23, integral: "\\int \\frac{2x+1}{x^2+x+1} \\, dx", answer: "\\ln|x^2+x+1| + C" },
  { day: 24, integral: "\\int_0^{\\pi/4} x\\sec^2 x \\, dx", answer: "\\frac{\\pi}{4} - \\frac{1}{2}\\ln 2" },
];

// Medium: Substitution and basic integration by parts
const mediumQuestions: IntegrationQuestion[] = [
  { day: 1, integral: "\\int x\\sqrt{x+1} \\, dx", answer: "\\frac{2(x+1)^{5/2}}{5} - \\frac{2(x+1)^{3/2}}{3} + C" },
  { day: 2, integral: "\\int \\frac{x}{\\sqrt{1-x^2}} \\, dx", answer: "-\\sqrt{1-x^2} + C" },
  { day: 3, integral: "\\int x^2 e^x \\, dx", answer: "e^x(x^2 - 2x + 2) + C" },
  { day: 4, integral: "\\int \\sin^2 x \\, dx", answer: "\\frac{x}{2} - \\frac{\\sin(2x)}{4} + C" },
  { day: 5, integral: "\\int x\\ln x \\, dx", answer: "\\frac{x^2\\ln x}{2} - \\frac{x^2}{4} + C" },
  { day: 6, integral: "\\int \\frac{e^x}{1+e^x} \\, dx", answer: "\\ln(1+e^x) + C" },
  { day: 7, integral: "\\int \\tan x \\, dx", answer: "-\\ln|\\cos x| + C" },
  { day: 8, integral: "\\int x\\cos(x^2) \\, dx", answer: "\\frac{\\sin(x^2)}{2} + C" },
  { day: 9, integral: "\\int \\frac{\\ln x}{x} \\, dx", answer: "\\frac{(\\ln x)^2}{2} + C" },
  { day: 10, integral: "\\int_0^1 x^2\\sqrt{1-x} \\, dx", answer: "\\frac{16}{105}" },
  { day: 11, integral: "\\int e^x\\sin x \\, dx", answer: "\\frac{e^x(\\sin x - \\cos x)}{2} + C" },
  { day: 12, integral: "\\int \\frac{x^3}{x^2+1} \\, dx", answer: "\\frac{x^2}{2} - \\frac{1}{2}\\ln(x^2+1) + C" },
  { day: 13, integral: "\\int \\cos^3 x \\, dx", answer: "\\sin x - \\frac{\\sin^3 x}{3} + C" },
  { day: 14, integral: "\\int x^2\\sin x \\, dx", answer: "-x^2\\cos x + 2x\\sin x + 2\\cos x + C" },
  { day: 15, integral: "\\int \\frac{1}{x^2-4} \\, dx", answer: "\\frac{1}{4}\\ln|\\frac{x-2}{x+2}| + C" },
  { day: 16, integral: "\\int \\arctan x \\, dx", answer: "x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C" },
  { day: 17, integral: "\\int \\frac{x}{(x+1)^2} \\, dx", answer: "\\ln|x+1| + \\frac{1}{x+1} + C" },
  { day: 18, integral: "\\int_0^{\\pi} x\\sin x \\, dx", answer: "\\pi" },
  { day: 19, integral: "\\int \\sqrt{x}\\ln x \\, dx", answer: "\\frac{2x^{3/2}\\ln x}{3} - \\frac{4x^{3/2}}{9} + C" },
  { day: 20, integral: "\\int \\frac{\\sin x}{\\cos^2 x} \\, dx", answer: "\\sec x + C" },
  { day: 21, integral: "\\int x^3 e^{x^2} \\, dx", answer: "\\frac{e^{x^2}(x^2-1)}{2} + C" },
  { day: 22, integral: "\\int \\frac{1}{x\\ln x} \\, dx", answer: "\\ln|\\ln x| + C" },
  { day: 23, integral: "\\int_0^1 \\frac{x}{(1+x^2)^2} \\, dx", answer: "\\frac{1}{4}" },
  { day: 24, integral: "\\int e^x\\cos x \\, dx", answer: "\\frac{e^x(\\sin x + \\cos x)}{2} + C" },
];

// Hard: Complex multi-step with parts and substitution combined
const hardQuestions: IntegrationQuestion[] = [
  { day: 1, integral: "\\int x^2 e^{2x} \\, dx", answer: "\\frac{e^{2x}(2x^2-2x+1)}{4} + C" },
  { day: 2, integral: "\\int \\frac{x^2}{\\sqrt{1-x^2}} \\, dx", answer: "\\frac{\\arcsin x - x\\sqrt{1-x^2}}{2} + C" },
  { day: 3, integral: "\\int x^2\\arctan x \\, dx", answer: "\\frac{x^3\\arctan x}{3} - \\frac{x^2}{6} + \\frac{\\ln(1+x^2)}{6} + C" },
  { day: 4, integral: "\\int \\ln^2 x \\, dx", answer: "x\\ln^2 x - 2x\\ln x + 2x + C" },
  { day: 5, integral: "\\int e^{2x}\\sin(3x) \\, dx", answer: "\\frac{e^{2x}(2\\sin(3x)-3\\cos(3x))}{13} + C" },
  { day: 6, integral: "\\int \\frac{x^3}{(x^2+1)^2} \\, dx", answer: "\\frac{1}{2}\\ln(x^2+1) + \\frac{1}{2(x^2+1)} + C" },
  { day: 7, integral: "\\int x\\arcsin x \\, dx", answer: "\\frac{(2x^2-1)\\arcsin x + x\\sqrt{1-x^2}}{4} + C" },
  { day: 8, integral: "\\int \\frac{x^2+1}{(x-1)^2(x+1)} \\, dx", answer: "\\ln|x+1| - \\frac{1}{x-1} + C" },
  { day: 9, integral: "\\int x^3\\cos(x^2) \\, dx", answer: "\\frac{x^2\\sin(x^2) + \\cos(x^2)}{2} + C" },
  { day: 10, integral: "\\int_0^1 x^2 e^{-x} \\, dx", answer: "2 - 5e^{-1}" },
  { day: 11, integral: "\\int \\sin^3 x \\cos^2 x \\, dx", answer: "-\\frac{\\cos^3 x}{3} + \\frac{\\cos^5 x}{5} + C" },
  { day: 12, integral: "\\int x^2\\ln^2 x \\, dx", answer: "\\frac{x^3(9\\ln^2 x - 6\\ln x + 2)}{27} + C" },
  { day: 13, integral: "\\int \\frac{e^{\\arctan x}}{1+x^2} \\, dx", answer: "e^{\\arctan x} + C" },
  { day: 14, integral: "\\int x\\tan^2 x \\, dx", answer: "x\\tan x + \\ln|\\cos x| - \\frac{x^2}{2} + C" },
  { day: 15, integral: "\\int \\frac{x^2}{(x\\sin x + \\cos x)^2} \\, dx", answer: "\\frac{-x}{x\\sin x + \\cos x} + C" },
  { day: 16, integral: "\\int_0^{\\pi/2} \\sin^2 x \\cos^3 x \\, dx", answer: "\\frac{2}{15}" },
  { day: 17, integral: "\\int \\frac{\\arcsin x}{\\sqrt{1-x^2}} \\, dx", answer: "\\frac{(\\arcsin x)^2}{2} + C" },
  { day: 18, integral: "\\int x^2\\sqrt{1+x} \\, dx", answer: "\\frac{2(1+x)^{7/2}}{7} - \\frac{4(1+x)^{5/2}}{5} + \\frac{2(1+x)^{3/2}}{3} + C" },
  { day: 19, integral: "\\int e^x(x^2+2x+1) \\, dx", answer: "e^x(x^2+1) + C" },
  { day: 20, integral: "\\int \\frac{x^2-1}{(x^2+1)^2} \\, dx", answer: "\\frac{-x}{x^2+1} + C" },
  { day: 21, integral: "\\int x^3 e^{-x^2} \\, dx", answer: "\\frac{-e^{-x^2}(x^2+1)}{2} + C" },
  { day: 22, integral: "\\int_0^{\\pi/4} x^2\\sec^2 x \\, dx", answer: "\\frac{\\pi^2}{16} - \\frac{\\pi}{4} + \\frac{1}{2}\\ln 2" },
  { day: 23, integral: "\\int \\frac{x}{\\sqrt{x^4+1}} \\, dx", answer: "\\frac{1}{2}\\ln(x^2 + \\sqrt{x^4+1}) + C" },
  { day: 24, integral: "\\int_0^1 x^2\\arctan x \\, dx", answer: "\\frac{\\pi - 2 + \\ln 2}{12}" },
];

export const questionsByDifficulty: Record<Difficulty, IntegrationQuestion[]> = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
};

// Default export for backwards compatibility
export const integrationQuestions = easyQuestions;
