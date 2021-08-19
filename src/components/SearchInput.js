import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchInput = () => {
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.worldbank.org/v2/country?per_page=299&format=json')
      .then((res) => setCountries(res.data[1]));
  }, []);

  const handleInputChange = (e) => {
    const term = e.target.value;
    let results = [];
    if (term.length > 1) {
      results = countries.filter((country) =>
        country.name.toLowerCase().startsWith(term)
      );
    }
    if (term.length > 3) {
      results = countries.filter((country) =>
        country.name.toLowerCase().includes(term)
      );
    }
    setSearchResults(results);
  };

  return (
    <SearchContainer>
      <StyledInput onChange={(e) => handleInputChange(e)} type='text' />
      <ResultsList>
        {searchResults.map((result) => (
          <ResultItem key={result.id}>{result.name}</ResultItem>
        ))}
      </ResultsList>
    </SearchContainer>
  );
};

export default SearchInput;

const SearchContainer = styled.div``;
const StyledInput = styled.input``;
const ResultsList = styled.ul`
  list-style: none;
`;
const ResultItem = styled.li`
  border: 1px solid #00000020;
`;
