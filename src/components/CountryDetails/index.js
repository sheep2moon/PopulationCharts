import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchInput from '../SearchInput';
import Chart from './Chart';

const CountryDetails = () => {
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    if (selectedCountry) {
      axios
        .get(
          `https://api.worldbank.org/v2/country/${selectedCountry.id}/indicator/SP.POP.TOTL?format=json`
        )
        .then((res) => {
          setCountryData(res.data[1]);
        });
    }
  }, [selectedCountry]);

  return (
    <CountryDetailsContainer>
      <Topbar>
        <SearchInput setSelectedCountry={setSelectedCountry} />
        <h2>{selectedCountry && selectedCountry.name}</h2>
      </Topbar>
      <ChartContainer>
        {countryData && <Chart countryData={countryData} />}
      </ChartContainer>
    </CountryDetailsContainer>
  );
};

export default CountryDetails;

const CountryDetailsContainer = styled.section`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 1em;
  margin: 0 auto;
  padding: 1em;
  width: 100vw;
  max-width: 1200px;
`;
const Topbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  > h2 {
    font-size: 2em;
    margin-right: 2rem;
    text-align: center;
  }
`;
const ChartContainer = styled.div``;
