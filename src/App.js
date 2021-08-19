import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './commons/theme';
import CountryDetails from './components/CountryDetails';
import SearchInput from './components/SearchInput';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('PL');
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        <SearchInput setSelectedCountry={setSelectedCountry} />
        <CountryDetails selectedCountry={selectedCountry} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div``;
