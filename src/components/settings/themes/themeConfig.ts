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
  buttonHover: string;

  // for optionbar
  optionBarBackground: string;
  optionBarText: string;
  optionActiveBackground: string;
  optionActiveText: string;

  //optionbar dropdowns
  dropdownBackground: string;
  dropdownActiveText: string;
  dropdownText: string;
  dropdownHoverText: string;
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
    caret: "#6d4931",
    border: "#bda69a",
    buttonBackground: "#f7e7d6",
    buttonHover: "#f0e0cd",
    buttonShadow: "#b09f8c",

    // for optionbar
    optionBarBackground: "#bda298",
    optionBarText: "#634e46",
    optionActiveBackground: "#a98b80",
    optionActiveText: "#33241e",

    //optionbar dropdowns
    dropdownBackground: "#b89c91",
    dropdownActiveText: "#473329",
    dropdownText: "#81675a",
    dropdownHoverText: "#ffffff",
  },

  "coffee-night": {
    background: "#2c1d17",
    surface: "#302520",
    text: "#ead8c5",
    mutedText: "#705b50",
    typedText: "#ead8c5",
    correct: "#ead8c5",
    incorrect: "#ed7770",
    caret: "#d2ad87",
    border: "#514037",
    buttonBackground: "#5c4a43",
    buttonHover: "#6b574f",
    buttonShadow: "#40312c",

    // for optionbar
    optionBarBackground: "#3a2b25",
    optionBarText: "#b49a8c",
    optionActiveBackground: "#a98b80",
    optionActiveText: "#33241e",

    // optionbar dropdowns
    dropdownBackground: "#b89c91",
    dropdownActiveText: "#473329",
    dropdownText: "#81675a",
    dropdownHoverText: "#ffffff",
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
    buttonHover: "#6b574f",
    buttonShadow: "#17110f",
    optionBarBackground: "#3a2b25",
    optionBarText: "#b49a8c",
    optionActiveBackground: "#5c4439",
    optionActiveText: "#f0dfd0",
    dropdownBackground: "#b89c91",
    dropdownActiveText: "#473329",
    dropdownText: "#81675a",
    dropdownHoverText: "#ffffff",
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
    buttonHover: "#6b574f",
    buttonShadow: "#17110f",
    optionBarBackground: "#3a2b25",
    optionBarText: "#b49a8c",
    optionActiveBackground: "#5c4439",
    optionActiveText: "#f0dfd0",
    dropdownBackground: "#b89c91",
    dropdownActiveText: "#473329",
    dropdownText: "#81675a",
    dropdownHoverText: "#ffffff",
  },
};
