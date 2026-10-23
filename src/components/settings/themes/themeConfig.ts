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
  // buttons
  signupText: string;
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

  // footer text
  footerText: string;

  //dashboard laeel +stat
  dashboardLabel: string;
  dashboardStat: string;

  // graph
  graphGrid: string;
  graphAxis: string;
  graphLine: string;
  graphDot: string;
  graphError: string;
  graphTooltipBackground: string;
  graphTooltipText: string;

  // settings title + description
  settingsRowTitle: string;
  settingsRowDescription: string;
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
    //buttons

    signupText: "#46362b",
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

    //footer text
    footerText: "#644c42",

    // dashboard label+stat
    dashboardLabel: "#72645d",
    dashboardStat: "#46362b",

    // graph
    graphGrid: "#6f5548",
    graphAxis: "#6f5548",
    graphLine: "#4b3025",
    graphDot: "#c7afa5",
    graphError: "#d11c1c",
    graphTooltipBackground: "#c7afa5",
    graphTooltipText: "#4b3025",

    // settings title+description

    settingsRowTitle: "#49372a",
    settingsRowDescription: "#664f45",
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
    // buttons
    signupText: "#46362b",
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

    //footer text
    footerText: "#948174",

    // dashboard lebel+stat
    dashboardLabel: "#a99585",
    dashboardStat: "#c2aa96",

    // graph
    graphGrid: "#594339",
    graphAxis: "#897064",
    graphLine: "#a99585",
    graphDot: "#bda393",
    graphError: "#c04d45",
    graphTooltipBackground: "#38271f",
    graphTooltipText: "#d2bba7",

    // settings title + description
    // Coffee Night
    settingsRowTitle: "#c2aa96",
    settingsRowDescription: "#948174",
  },

  // theme-three and theme-four are placeholders for now

  "theme-three": {
    background: "#323437",
    surface: "#2c2e31",
    text: "#d1d0c5",
    mutedText: "#646669",
    typedText: "#d1d0c5",
    correct: "#d1d0c5",
    incorrect: "#ca4754",
    caret: "#e2b714",
    border: "#46484b",

    // buttons
    signupText: "#46362b",
    buttonBackground: "#f7e7d6",
    buttonHover: "#f0e0cd",
    buttonShadow: "#b09f8c",

    optionBarBackground: "#2c2e31",
    optionBarText: "#646669",
    optionActiveBackground: "#e2b714",
    optionActiveText: "#323437",

    dropdownBackground: "#2c2e31",
    dropdownActiveText: "#e2b714",
    dropdownText: "#646669",
    dropdownHoverText: "#d1d0c5",

    footerText: "#646669",

    dashboardLabel: "#646669",
    dashboardStat: "#e2b714",

    graphGrid: "#46484b",
    graphAxis: "#646669",
    graphLine: "#e2b714",
    graphDot: "#d1d0c5",
    graphError: "#ca4754",
    graphTooltipBackground: "#2c2e31",
    graphTooltipText: "#d1d0c5",

    settingsRowTitle: "#d1d0c5",
    settingsRowDescription: "#9b9c98",
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
    signupText: "#46362b",
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
    //footer text
    footerText: "#644c42",
    dashboardLabel: "#a99585",
    dashboardStat: "#d2bba7",
    graphGrid: "#594339",
    graphAxis: "#897064",
    graphLine: "#a99585",
    graphDot: "#bda393",
    graphError: "#c04d45",
    graphTooltipBackground: "#38271f",
    graphTooltipText: "#d2bba7",
    // Coffee Night
    settingsRowTitle: "#c2aa96",
    settingsRowDescription: "#948174",
  },
};
