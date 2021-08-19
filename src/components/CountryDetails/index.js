import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Chart from './Chart';

const CountryDetails = ({ selectedCountry }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.worldbank.org/v2/country/${selectedCountry}/indicator/SP.POP.TOTL?format=json`
      )
      .then((res) => {
        setCountryData(res.data);
      });
  }, [selectedCountry]);

  if (countryData.length < 1) {
    return <p>loading..</p>;
  }

  return (
    <CountryDetailsContainer>
      <Topbar>
        <h1>{countryData[1][0].country.value}</h1>
      </Topbar>
      <Details>
        <Chart countryData={countryData[1]} />
        <InfoWrapper>
          <h4>country</h4>
          <p>kontynent</p>
          <p>stolica</p>
          <p>current population</p>
        </InfoWrapper>
      </Details>
    </CountryDetailsContainer>
  );
};

export default CountryDetails;

const CountryDetailsContainer = styled.section`
  padding: 10em;
  max-width: 100vw;
`;
const Topbar = styled.div``;
const Details = styled.div``;
const InfoWrapper = styled.div``;
