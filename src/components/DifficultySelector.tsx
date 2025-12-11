import type { Difficulty } from "@/data/integrationQuestions";

interface DifficultySelectorProps {
  selected: Difficulty;
  onChange: (difficulty: Difficulty) => void;
}

const difficulties: { value: Difficulty; label: string; description: string }[] = [
  { value: "easy", label: "Easy", description: "Basic techniques" },
  { value: "medium", label: "Medium", description: "Substitution & parts" },
  { value: "hard", label: "Hard", description: "Multi-step challenges" },
];

export const DifficultySelector = ({ selected, onChange }: DifficultySelectorProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
      {difficulties.map(({ value, label, description }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${selected === value
              ? "bg-primary text-primary-foreground shadow-lg scale-105"
              : "bg-card/50 text-card-foreground hover:bg-card/80 border border-border/50"
            }
          `}
        >
          <span className="block">{label}</span>
          <span className={`text-xs ${selected === value ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
            {description}
          </span>
        </button>
      ))}
    </div>
  );
};
