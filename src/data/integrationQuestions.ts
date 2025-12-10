export interface IntegrationQuestion {
  day: number;
  integral: string;
  answer: string;
  hint?: string;
}

export const integrationQuestions: IntegrationQuestion[] = [
  // Days 1-6: Basic powers & constants
  {
    day: 1,
    integral: "\\int 3x^2 \\, dx",
    answer: "x^3 + C",
    hint: "Use the power rule"
  },
  {
    day: 2,
    integral: "\\int (5x^3 - 2) \\, dx",
    answer: "\\frac{5x^4}{4} - 2x + C",
    hint: "Integrate term by term"
  },
  {
    day: 3,
    integral: "\\int x^{1/2} \\, dx",
    answer: "\\frac{2x^{3/2}}{3} + C",
    hint: "Add 1 to the power, then divide"
  },
  {
    day: 4,
    integral: "\\int 4x^{-2} \\, dx",
    answer: "-\\frac{4}{x} + C",
    hint: "Negative powers work the same way"
  },
  {
    day: 5,
    integral: "\\int_0^2 (x + 1) \\, dx",
    answer: "4",
    hint: "Definite integral - evaluate at limits"
  },
  {
    day: 6,
    integral: "\\int (2x + 3)^2 \\, dx",
    answer: "\\frac{(2x+3)^3}{6} + C",
    hint: "Expand or use substitution"
  },

  // Days 7-10: Exponentials & logs
  {
    day: 7,
    integral: "\\int e^x \\, dx",
    answer: "e^x + C",
    hint: "The exponential is its own derivative"
  },
  {
    day: 8,
    integral: "\\int 3e^{2x} \\, dx",
    answer: "\\frac{3e^{2x}}{2} + C",
    hint: "Divide by the coefficient of x"
  },
  {
    day: 9,
    integral: "\\int \\frac{1}{x} \\, dx",
    answer: "\\ln|x| + C",
    hint: "Standard result for 1/x"
  },
  {
    day: 10,
    integral: "\\int_0^1 2e^{3x} \\, dx",
    answer: "\\frac{2(e^3 - 1)}{3}",
    hint: "Evaluate the definite integral"
  },

  // Days 11-14: Trig functions
  {
    day: 11,
    integral: "\\int \\sin x \\, dx",
    answer: "-\\cos x + C",
    hint: "Standard trig integral"
  },
  {
    day: 12,
    integral: "\\int 3\\cos(2x) \\, dx",
    answer: "\\frac{3\\sin(2x)}{2} + C",
    hint: "Divide by the coefficient inside"
  },
  {
    day: 13,
    integral: "\\int \\sec^2 x \\, dx",
    answer: "\\tan x + C",
    hint: "What differentiates to sec²x?"
  },
  {
    day: 14,
    integral: "\\int_0^{\\pi/2} \\sin x \\, dx",
    answer: "1",
    hint: "Evaluate -cos x at the limits"
  },

  // Days 15-18: Substitution
  {
    day: 15,
    integral: "\\int 2x(x^2 + 1)^3 \\, dx",
    answer: "\\frac{(x^2+1)^4}{4} + C",
    hint: "Let u = x² + 1"
  },
  {
    day: 16,
    integral: "\\int \\frac{1}{2x + 3} \\, dx",
    answer: "\\frac{1}{2}\\ln|2x+3| + C",
    hint: "Let u = 2x + 3"
  },
  {
    day: 17,
    integral: "\\int \\cos(3x) \\, dx",
    answer: "\\frac{\\sin(3x)}{3} + C",
    hint: "Reverse chain rule"
  },
  {
    day: 18,
    integral: "\\int_0^1 x\\sqrt{x^2+1} \\, dx",
    answer: "\\frac{2\\sqrt{2}-1}{3}",
    hint: "Substitution with limit change"
  },

  // Days 19-21: Integration by parts
  {
    day: 19,
    integral: "\\int xe^x \\, dx",
    answer: "e^x(x-1) + C",
    hint: "Use integration by parts: u = x"
  },
  {
    day: 20,
    integral: "\\int x\\sin x \\, dx",
    answer: "-x\\cos x + \\sin x + C",
    hint: "Parts with u = x, dv = sin x dx"
  },
  {
    day: 21,
    integral: "\\int \\ln x \\, dx",
    answer: "x\\ln x - x + C",
    hint: "Let u = ln x, dv = dx"
  },

  // Days 22-24: Mixed exam-style
  {
    day: 22,
    integral: "\\int \\frac{x}{(x^2+4)^2} \\, dx",
    answer: "-\\frac{1}{2(x^2+4)} + C",
    hint: "Substitution with u = x² + 4"
  },
  {
    day: 23,
    integral: "\\int \\frac{2x+1}{x^2+x+1} \\, dx",
    answer: "\\ln|x^2+x+1| + C",
    hint: "Notice the numerator is the derivative"
  },
  {
    day: 24,
    integral: "\\int_0^{\\pi/4} x\\sec^2 x \\, dx",
    answer: "\\frac{\\pi}{4} - \\frac{1}{2}\\ln 2",
    hint: "Integration by parts with u = x"
  },
];
