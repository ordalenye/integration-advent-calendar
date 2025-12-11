import { useState } from "react";
import { AdventCard } from "@/components/AdventCard";
import { CalendarHeader } from "@/components/CalendarHeader";
import { DifficultySelector } from "@/components/DifficultySelector";
import { Snowflakes } from "@/components/Snowflakes";
import { questionsByDifficulty, type Difficulty } from "@/data/integrationQuestions";

const Index = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const questions = questionsByDifficulty[difficulty];

  return (
    <div className="min-h-screen relative">
      <Snowflakes />
      
      <div className="container max-w-6xl mx-auto px-4 pb-12 relative z-10">
        <CalendarHeader />
        
        <DifficultySelector selected={difficulty} onChange={setDifficulty} />
        
        <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {questions.map((question, index) => (
            <div
              key={`${difficulty}-${question.day}`}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AdventCard question={question} index={index} />
            </div>
          ))}
        </main>

        <footer className="text-center mt-12 text-muted-foreground text-xs sm:text-sm">
          <p>OCR A-Level Mathematics Integration Practice</p>
          <p className="mt-1 text-muted-foreground/60">
            {difficulty === "easy" && "Basic integration techniques - great for beginners"}
            {difficulty === "medium" && "Substitution and integration by parts"}
            {difficulty === "hard" && "Complex multi-step problems for exam preparation"}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
