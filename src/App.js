import styled, { ThemeProvider } from 'styled-components';
import { theme } from './commons/theme';
import CountryDetails from './components/CountryDetails';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <CountryDetails />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.dark};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
