import { useState, useEffect } from "react";
import { AdventCard } from "@/components/AdventCard";
import { CalendarHeader } from "@/components/CalendarHeader";
import { DifficultySelector } from "@/components/DifficultySelector";
import { Snowflakes } from "@/components/Snowflakes";
import { questionsByDifficulty, type Difficulty } from "@/data/integrationQuestions";

const OPENED_CARDS_KEY = "advent-opened-cards";

const Index = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [unlockAll, setUnlockAll] = useState(false);
  const [openedCards, setOpenedCards] = useState<Set<string>>(new Set());
  const questions = questionsByDifficulty[difficulty];

  // Load opened cards from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(OPENED_CARDS_KEY);
    if (stored) {
      setOpenedCards(new Set(JSON.parse(stored)));
    }
  }, []);

  const markCardOpened = (difficulty: Difficulty, day: number) => {
    const key = `${difficulty}-${day}`;
    setOpenedCards(prev => {
      const newSet = new Set(prev);
      newSet.add(key);
      localStorage.setItem(OPENED_CARDS_KEY, JSON.stringify([...newSet]));
      return newSet;
    });
  };

  // Get current day of December (1-24)
  const today = new Date();
  const currentDay = today.getMonth() === 11 ? today.getDate() : 0; // Only unlock if December

  const isCardLocked = (day: number) => {
    if (unlockAll) return false;
    return day > currentDay;
  };

  const isCardOpened = (day: number) => {
    return openedCards.has(`${difficulty}-${day}`);
  };

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
              <AdventCard 
                question={question} 
                index={index} 
                locked={isCardLocked(question.day)}
                opened={isCardOpened(question.day)}
                onOpen={() => markCardOpened(difficulty, question.day)}
              />
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
          
          {/* Debug button */}
          <button
            onClick={() => setUnlockAll(!unlockAll)}
            className="mt-6 text-xs px-3 py-1.5 rounded-md bg-muted/50 text-muted-foreground hover:bg-muted transition-colors"
          >
            {unlockAll ? "Lock Future Days" : "Unlock All Days (Debug)"}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Index;
