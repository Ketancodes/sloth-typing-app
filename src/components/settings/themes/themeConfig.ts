import type { ThemeOption } from "../types/Settingstypes";

type ThemeColors = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  typedText: string;
  correct: string;
  incorrect: string;
  caret: string;
  border: string;
  buttonBackground: string;
  buttonShadow: string;
};

export const themes: Record<ThemeOption, ThemeColors> = {
  coffee: {
    background: "#c7afa5",
    surface: "#d8c5bb",
    text: "#46362b",
    mutedText: "#72645d",
    typedText: "#46362b",
    correct: "#46362b",
    incorrect: "#C72121",
    caret: "#6d564d",
    border: "#bda69a",
    buttonBackground: "#f7e7d6",
    buttonShadow: "#b09f8c",
  },

  "coffee-night": {
    background: "#211a17",
    surface: "#302520",
    text: "#ead8c5",
    mutedText: "#a99585",
    typedText: "#ead8c5",
    correct: "#ead8c5",
    incorrect: "#ed7770",
    caret: "#d2ad87",
    border: "#514037",
    buttonBackground: "#5c4a43",
    buttonShadow: "#17110f",
  },

  // theme-three and theme-four are placeholders for now

  "theme-three": {
    background: "#c7afa5",
    surface: "#d8c5bb",
    text: "#46362b",
    mutedText: "#72645d",
    typedText: "#46362b",
    correct: "#46362b",
    incorrect: "#C72121",
    caret: "#6d564d",
    border: "#bda69a",
    buttonBackground: "#3a2b25",
    buttonShadow: "#17110f",
  },

  "theme-four": {
    background: "#c7afa5",
    surface: "#d8c5bb",
    text: "#46362b",
    mutedText: "#72645d",
    typedText: "#46362b",
    correct: "#46362b",
    incorrect: "#C72121",
    caret: "#6d564d",
    border: "#bda69a",
    buttonBackground: "#3a2b25",
    buttonShadow: "#17110f",
  },
};
