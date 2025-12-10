export const CalendarHeader = () => {
  return (
    <header className="text-center py-8 md:py-12 relative z-10">
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold title-gradient mb-4">
        Integration Advent Calendar
      </h1>
      <p className="text-foreground/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
        24 days of A-Level OCR integration practice. Click a card to reveal your challenge!
      </p>
    </header>
  );
};
