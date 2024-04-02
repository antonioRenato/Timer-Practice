import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>nice</h1>
      <GlobalStyle />
    </ThemeProvider> 

  )
}
