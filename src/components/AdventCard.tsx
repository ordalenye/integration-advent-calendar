import { useState } from "react";
import { MathRenderer } from "./MathRenderer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { IntegrationQuestion } from "@/data/integrationQuestions";

interface AdventCardProps {
  question: IntegrationQuestion;
  index: number;
}

export const AdventCard = ({ question, index }: AdventCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAnswer(!showAnswer);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowAnswer(false);
  };

  return (
    <>
      <div
        className="advent-card aspect-[4/5] cursor-pointer"
        onClick={() => setIsOpen(true)}
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="advent-card-front">
          <span className="day-number">{question.day}</span>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="advent-card-modal sm:max-w-md">
          <DialogTitle className="sr-only">Day {question.day} Integration</DialogTitle>
          <div className="flex flex-col items-center justify-center gap-6 py-4">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Day {question.day}
            </span>
            
            <div className="math-container text-2xl">
              <MathRenderer math={question.integral} />
            </div>

            {!showAnswer ? (
              <button
                onClick={handleShowAnswer}
                className="text-sm px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
              >
                Show Answer
              </button>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="math-container text-2xl animate-fade-in">
                  <MathRenderer math={`= ${question.answer}`} />
                </div>
                <button
                  onClick={handleShowAnswer}
                  className="text-sm px-4 py-2 rounded-md bg-muted text-muted-foreground hover:bg-muted/80 transition-colors font-medium"
                >
                  Hide
                </button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
