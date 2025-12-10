import { AdventCard } from "@/components/AdventCard";
import { CalendarHeader } from "@/components/CalendarHeader";
import { Snowflakes } from "@/components/Snowflakes";
import { integrationQuestions } from "@/data/integrationQuestions";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Snowflakes />
      
      <div className="container max-w-6xl mx-auto px-4 pb-12 relative z-10">
        <CalendarHeader />
        
        <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {integrationQuestions.map((question, index) => (
            <div
              key={question.day}
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
            Questions increase in difficulty from Day 1 to Day 24
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
