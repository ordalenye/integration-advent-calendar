import React from "react";

interface MathRendererProps {
  math: string;
  className?: string;
}

export const MathRenderer = ({ math, className = "" }: MathRendererProps) => {
  const renderMath = (input: string): React.ReactNode[] => {
    const result: React.ReactNode[] = [];
    let i = 0;
    let key = 0;

    while (i < input.length) {
      // Handle \int with limits
      if (input.slice(i).startsWith("\\int_")) {
        const afterInt = i + 5;
        const { content: lower, endIndex: lowerEnd } = extractBraceContent(input, afterInt);
        let upper = "";
        let upperEnd = lowerEnd;
        if (input[lowerEnd] === "^") {
          const extracted = extractBraceContent(input, lowerEnd + 1);
          upper = extracted.content;
          upperEnd = extracted.endIndex;
        }
        result.push(
          <span key={key++} className="integral-with-limits">
            <span className="integral-limits">
              <span className="integral-upper">{renderMath(upper)}</span>
              <span className="integral-symbol">∫</span>
              <span className="integral-lower">{renderMath(lower)}</span>
            </span>
          </span>
        );
        i = upperEnd;
        continue;
      }

      // Handle \int without limits
      if (input.slice(i).startsWith("\\int")) {
        result.push(<span key={key++} className="integral-symbol">∫</span>);
        i += 4;
        continue;
      }

      // Handle \frac{num}{denom}
      if (input.slice(i).startsWith("\\frac")) {
        const afterFrac = i + 5;
        const { content: num, endIndex: numEnd } = extractBraceContent(input, afterFrac);
        const { content: denom, endIndex: denomEnd } = extractBraceContent(input, numEnd);
        result.push(
          <span key={key++} className="fraction">
            <span className="fraction-num">{renderMath(num)}</span>
            <span className="fraction-line"></span>
            <span className="fraction-denom">{renderMath(denom)}</span>
          </span>
        );
        i = denomEnd;
        continue;
      }

      // Handle \sqrt{content}
      if (input.slice(i).startsWith("\\sqrt")) {
        const afterSqrt = i + 5;
        const { content, endIndex } = extractBraceContent(input, afterSqrt);
        result.push(
          <span key={key++} className="sqrt">
            <span className="sqrt-symbol">√</span>
            <span className="sqrt-content">{renderMath(content)}</span>
          </span>
        );
        i = endIndex;
        continue;
      }

      // Handle superscript ^{...} or ^x
      if (input[i] === "^") {
        const { content, endIndex } = extractBraceOrChar(input, i + 1);
        result.push(<sup key={key++}>{renderMath(content)}</sup>);
        i = endIndex;
        continue;
      }

      // Handle subscript _{...} or _x
      if (input[i] === "_") {
        const { content, endIndex } = extractBraceOrChar(input, i + 1);
        result.push(<sub key={key++}>{renderMath(content)}</sub>);
        i = endIndex;
        continue;
      }

      // Handle special commands
      const commands: Record<string, string> = {
        "\\sin": "sin",
        "\\cos": "cos",
        "\\tan": "tan",
        "\\sec": "sec",
        "\\csc": "csc",
        "\\cot": "cot",
        "\\ln": "ln",
        "\\log": "log",
        "\\pi": "π",
        "\\infty": "∞",
        "\\,": " ",
        "\\;": " ",
        "\\ ": " ",
        "\\dx": "dx",
        "\\left": "",
        "\\right": "",
      };

      let matched = false;
      for (const [cmd, replacement] of Object.entries(commands)) {
        if (input.slice(i).startsWith(cmd)) {
          if (replacement) {
            result.push(<span key={key++}>{replacement}</span>);
          }
          i += cmd.length;
          matched = true;
          break;
        }
      }
      if (matched) continue;

      // Handle |x| for absolute value
      if (input[i] === "|") {
        result.push(<span key={key++}>|</span>);
        i++;
        continue;
      }

      // Handle parentheses with proper sizing
      if (input[i] === "(" || input[i] === ")") {
        result.push(<span key={key++} className="paren">{input[i]}</span>);
        i++;
        continue;
      }

      // Handle 'e' for exponential (style it)
      if (input[i] === "e" && (i === 0 || !isLetter(input[i - 1])) && (i + 1 >= input.length || input[i + 1] === "^" || !isLetter(input[i + 1]))) {
        result.push(<span key={key++} className="math-e">e</span>);
        i++;
        continue;
      }

      // Handle 'x' variable
      if (input[i] === "x") {
        result.push(<span key={key++} className="math-var">x</span>);
        i++;
        continue;
      }

      // Handle 'C' constant
      if (input[i] === "C" && (i === 0 || input[i - 1] === " " || input[i - 1] === "+")) {
        result.push(<span key={key++} className="math-const">C</span>);
        i++;
        continue;
      }

      // Regular character
      result.push(<span key={key++}>{input[i]}</span>);
      i++;
    }

    return result;
  };

  const extractBraceContent = (str: string, start: number): { content: string; endIndex: number } => {
    if (str[start] !== "{") {
      // Single character
      return { content: str[start] || "", endIndex: start + 1 };
    }
    let depth = 1;
    let i = start + 1;
    let content = "";
    while (i < str.length && depth > 0) {
      if (str[i] === "{") depth++;
      else if (str[i] === "}") depth--;
      if (depth > 0) content += str[i];
      i++;
    }
    return { content, endIndex: i };
  };

  const extractBraceOrChar = (str: string, start: number): { content: string; endIndex: number } => {
    if (str[start] === "{") {
      return extractBraceContent(str, start);
    }
    // Handle multi-char like numbers: x^23 should be x^{23}? No, typically just one char
    // But handle things like x^{1/2} which uses braces
    return { content: str[start] || "", endIndex: start + 1 };
  };

  const isLetter = (char: string): boolean => {
    return /[a-zA-Z]/.test(char);
  };

  return (
    <span className={`math-render ${className}`}>
      {renderMath(math)}
    </span>
  );
};
