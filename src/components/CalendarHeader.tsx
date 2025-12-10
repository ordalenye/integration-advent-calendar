export const CalendarHeader = () => {
  return (
    <header className="text-center py-8 md:py-12 relative z-10">
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold title-gradient mb-4">
        Integration Advent Calendar
      </h1>
      <p className="text-foreground/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
        24 days of A-Level OCR integration practice. Click a card to reveal your challenge!
      </p>
      <div className="flex items-center justify-center gap-2 mt-4 text-xs sm:text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Easy
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border">
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          Medium
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          Hard
        </span>
      </div>
    </header>
  );
};
