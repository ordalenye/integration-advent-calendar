import { useState } from "react";
import { MathRenderer } from "./MathRenderer";
import type { IntegrationQuestion } from "@/data/integrationQuestions";

interface AdventCardProps {
  question: IntegrationQuestion;
  index: number;
}

export const AdventCard = ({ question, index }: AdventCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  };

  const handleShowAnswer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      className={`advent-card aspect-[4/5] ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="advent-card-inner">
        {/* Front of card */}
        <div className="advent-card-front">
          <span className="day-number">{question.day}</span>
        </div>

        {/* Back of card */}
        <div className="advent-card-back">
          <div className="flex flex-col items-center justify-center h-full w-full gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Day {question.day}
            </span>
            
            <div className="math-container flex-1 flex items-center justify-center px-1">
              <MathRenderer math={question.integral} />
            </div>

            {!showAnswer ? (
              <button
                onClick={handleShowAnswer}
                className="text-xs px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
              >
                Show Answer
              </button>
            ) : (
              <div className="flex flex-col items-center gap-2 pb-1">
                <div className="math-container animate-fade-in">
                  <MathRenderer math={`= ${question.answer}`} />
                </div>
                <button
                  onClick={handleShowAnswer}
                  className="text-xs px-3 py-1.5 rounded-md bg-muted text-muted-foreground hover:bg-muted/80 transition-colors font-medium"
                >
                  Hide
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
