import Header5 from "@/components/headings/Header5";
import SmallParagraph from "@/components/headings/SmallParagraph";
import { QuizQuestion } from "@/lib/types";

export default function QuestionCard({
  question,
  selected,
  onSelect,
}: {
  readonly question: QuizQuestion;
  readonly selected: number | null;
  readonly onSelect: (optionIndex: number) => void;
}) {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-8">
        <SmallParagraph className="uppercase" text={question.flavor ?? ""} />
        <Header5 text={question.prompt} />
      </div>
      <div className="flex flex-col gap-3">
        {question.options.map((option, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={option.label}
              type="button"
              onClick={() => onSelect(i)}
              className={`text-left px-5 py-4 rounded-xl border transition-colors duration-150 text-base leading-relaxed
                ${
                  isSelected
                    ? "bg-accent/70 border-transparent"
                    : "bg-transparent border-foreground/20 hover:bg-accent/5"
                }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
