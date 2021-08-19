import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './commons/theme';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        <SearchInput />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div``;
