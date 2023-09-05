interface ThemeVariables {
  bg_element: string;
  bg_element2: string;
  bg_element3: string;
  bg_element4: string;
  text1: string;
  text2: string;
  text3: string;
  border: string;
  borderRadius: string;
}

type Theme = "light" | "dark";
type VariableKey = keyof ThemeVariables;
type ThemedPalette = Record<VariableKey, string>;

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bg_element: "#FFFFFF",
    bg_element2: "#EEEEEE",
    bg_element3: "#f8f9fa",
    bg_element4: "#1877FF", // (버튼)
    text1: "#000000",
    text2: "#FFFFFF", // (버튼)
    text3: "#1877FF",
    border: "#EEEEEE",
    borderRadius: "7px",
  },
  dark: {
    bg_element: "#121212",
    bg_element2: "#1E1E1E",
    bg_element3: "#1B1B1B",
    bg_element4: "#BB86FC",
    text1: "#E1E1E1",
    text2: "#000000",
    text3: "#BB86FC",
    border: "#555555",
    borderRadius: "7px",
  },
};

const buildCssVariables = (variables: ThemeVariables) => {
  const keys = Object.keys(variables) as (keyof ThemeVariables)[];
  return keys.reduce(
    (acc, key) =>
      acc.concat(`--${key.replace(/_/g, "-")}: ${variables[key]};`, "\n"),
    ""
  );
};

export const themes = {
  light: buildCssVariables(themeVariableSets.light),
  dark: buildCssVariables(themeVariableSets.dark),
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, "-")})`;

const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[];

export const themedPalette: Record<VariableKey, string> = variableKeys.reduce(
  (acc, current) => {
    acc[current] = cssVar(current);
    return acc;
  },
  {} as ThemedPalette
);
