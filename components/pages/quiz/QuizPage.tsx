"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUIZ_QUESTIONS } from "@/lib/quiz-data";
import { computeVibeVector } from "@/lib/scoring";
import { matchArchetype } from "@/lib/archetypes";
import { Progress } from "@/components/ui/progress";
import QuestionCard from "@/components/pages/quiz/QuestionCard";
import LocationStep from "@/components/pages/quiz/LocationStep";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ArrowLeft } from "lucide-react";

const TOTAL_STEPS = QUIZ_QUESTIONS.length + 1; // +1 for the location step

export default function QuizPage() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(
    new Array(QUIZ_QUESTIONS.length).fill(null),
  );
  const [location, setLocation] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isLocationStep = step === QUIZ_QUESTIONS.length;
  const currentQuestion = isLocationStep ? null : QUIZ_QUESTIONS[step];

  const canAdvance = isLocationStep
    ? location.trim().length > 1
    : answers[step] !== null;

  const isLastStep = step === TOTAL_STEPS - 1;

  async function handleNext() {
    if (!canAdvance) return;
    if (!isLastStep) {
      setStep((s) => s + 1);
      return;
    }
    await submit();
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const finalAnswers = answers.map((a) => a ?? 0);
      const vector = computeVibeVector(finalAnswers);
      const archetype = matchArchetype(vector);

      const res = await fetch("/api/spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vector,
          archetypeName: archetype.name,
          location,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          data.error || "Something went wrong generating your spots.",
        );
      }

      sessionStorage.setItem(
        "vana-results",
        JSON.stringify({ vector, archetype, spots: data.spots, location }),
      );
      router.push("/results");
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Something went wrong. Please try again.",
      );
      setSubmitting(false);
    }
  }

  const loadingText = () => {
    if (submitting) {
      return <Spinner />;
    } else if (isLastStep) {
      return "Reveal my spots";
    } else {
      return "Next";
    }
  };

  return (
    <main className="min-h-screen bg-paper">
      <div className="max-w-xl mx-auto px-6 py-16 sm:py-24">
        <div className="mb-10">
          <Progress value={((step + 1) / TOTAL_STEPS)  * 100} />
        </div>

        {currentQuestion ? (
          <QuestionCard
            question={currentQuestion}
            selected={answers[step]}
            onSelect={(optionIndex) => {
              const next = [...answers];
              next[step] = optionIndex;
              setAnswers(next);
            }}
          />
        ) : (
          <LocationStep value={location} onChange={setLocation} />
        )}

        {error ? (
          <p className="mt-6 bg-destructive border border-destructive text-destructive-foreground rounded-md px-4 py-3">
            {error}
          </p>
        ) : null}

        <div className="flex items-center justify-end gap-4 mt-10">
          
          <Button
            type="button"
            onClick={handleBack}
            disabled={step === 0 || submitting}
            variant={"outline"}
          >
            <ArrowLeft/> Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canAdvance || submitting}
            type="button"
          >
            {loadingText()}
          </Button>
        </div>
      </div>
    </main>
  );
}
