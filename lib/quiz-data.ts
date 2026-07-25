import { QuizQuestion } from "./types";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "door",
    prompt: "A door you've never noticed appears in the back wall of your favorite café. It's unlocked.",
    flavor: "01 — The Door",
    options: [
      { label: "Push it open. Now.", deltas: { novelty: 2, planning: -1 } },
      { label: "Peek through the keyhole first.", deltas: { novelty: 1, planning: 1 } },
      { label: "Ask the barista if she's seen it before.", deltas: { social: 2 } },
      { label: "Pretend you didn't see it and go back to your book.", deltas: { novelty: -2, social: -1 } },
    ],
  },
  {
    id: "tuesday",
    prompt: "Your ideal Tuesday night, no obligations, involves:",
    flavor: "02 — The Off Night",
    options: [
      { label: "Hosting people at your place, no real agenda.", deltas: { social: 2, pace: 1 } },
      { label: "A long walk with headphones in, nowhere in particular.", deltas: { social: -2, pace: -1 } },
      { label: "Trying the new tasting menu across town.", deltas: { novelty: 2 } },
      { label: "Rewatching your comfort movie, again.", deltas: { novelty: -2, pace: -1 } },
    ],
  },
  {
    id: "early",
    prompt: "You show up to a party an hour early by mistake.",
    flavor: "03 — Early Arrival",
    options: [
      { label: "Help the host set up, chat while you work.", deltas: { social: 2 } },
      { label: "Wait in the car and scroll your phone.", deltas: { social: -2 } },
      { label: "Take a walk and see what's around the block.", deltas: { novelty: 2, planning: -1 } },
      { label: "Drive somewhere, come back at exactly the right time.", deltas: { planning: 2 } },
    ],
  },
  {
    id: "sunday",
    prompt: "Pick a soundtrack for a Sunday morning.",
    flavor: "04 — The Soundtrack",
    options: [
      { label: "A quiet jazz record, alone.", deltas: { social: -2, pace: -2 } },
      { label: "A podcast while power-walking somewhere.", deltas: { pace: 2 } },
      { label: "Whatever's playing wherever you end up.", deltas: { planning: -2, novelty: 1 } },
      { label: "A playlist you built specifically for this exact mood.", deltas: { planning: 2, aesthetic: 2 } },
    ],
  },
  {
    id: "cancel",
    prompt: "A friend cancels plans forty minutes before you're supposed to meet.",
    flavor: "05 — The Cancellation",
    options: [
      { label: "Relief. Now you can do your own thing.", deltas: { social: -2 } },
      { label: "You text someone else to see if they're free.", deltas: { social: 2 } },
      { label: "You go wander somewhere new, solo.", deltas: { novelty: 2, social: -1 } },
      { label: "No stress, you already had a backup plan.", deltas: { planning: 2 } },
    ],
  },
  {
    id: "souvenir",
    prompt: "Your favorite kind of souvenir from any trip is:",
    flavor: "06 — The Souvenir",
    options: [
      { label: "A photo essay of things nobody else stopped for.", deltas: { aesthetic: 2, novelty: 1 } },
      { label: "A bracelet from someone you met for twenty minutes.", deltas: { social: 2 } },
      { label: "A well-worn map, annotated the whole way through.", deltas: { planning: 2 } },
      { label: "Nothing. The memory's the whole point.", deltas: { aesthetic: -1, planning: -2 } },
    ],
  },
  {
    id: "seat",
    prompt: "You walk into a restaurant you've never been to. Your ideal seat is:",
    flavor: "07 — The Seat",
    options: [
      { label: "At the bar, chatting with whoever's pouring.", deltas: { social: 2 } },
      { label: "The corner booth, back to the wall.", deltas: { social: -2, aesthetic: 1 } },
      { label: "Wherever has the best view of the whole room.", deltas: { aesthetic: 2, novelty: 1 } },
      { label: "Wherever's fastest. You're just hungry.", deltas: { pace: 2 } },
    ],
  },
  {
    id: "rain",
    prompt: "It's raining and you have the entire day free.",
    flavor: "08 — The Rainy Day",
    options: [
      { label: "Invite people over for something loud and unserious.", deltas: { social: 2, pace: 1 } },
      { label: "Read in a window seat for hours. Full stop.", deltas: { pace: -2, social: -1 } },
      { label: "Finally check out that indoor market you've been eyeing.", deltas: { novelty: 2 } },
      { label: "Catch up on the errands you've been meaning to plan.", deltas: { planning: 2, pace: 1 } },
    ],
  },
];
