import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const SearchInput = ({ setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef();
  useEffect(() => {
    axios
      .get('https://api.worldbank.org/v2/country?per_page=299&format=json')
      .then((res) => {
        setCountries(res.data[1]);
        setSelectedCountry(res.data[1][50]);
      });
  }, [setSelectedCountry]);

  const handleInputChange = () => {
    const term = searchInputRef.current.value.toLowerCase();
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

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    searchInputRef.current.value = '';
    setSearchResults([]);
  };

  return (
    <SearchContainer>
      <label htmlFor='search-country'>Search:</label>
      <InputContainer>
        <StyledInput
          id='search-country'
          ref={searchInputRef}
          onChange={handleInputChange}
          type='text'
          autoComplete='new-password'
          placeholder='start typing'
        />
        <ResultsList>
          {searchResults.map((result) => (
            <ResultItem
              key={result.id}
              onClick={() => handleCountryChange(result)}
            >
              {result.name}
            </ResultItem>
          ))}
        </ResultsList>
      </InputContainer>
    </SearchContainer>
  );
};

export default SearchInput;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
  position: relative;
  > label {
    margin-right: 1rem;
    font-weight: 700;
  }
`;
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  background-color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  padding-left: 0.5em;
  height: 3rem;
  width: 100%;
`;
const ResultsList = styled.ul`
  position: absolute;
  max-width: 30rem;
  top: 3rem;
  list-style: none;
  width: inherit;
  z-index: 2;
`;
const ResultItem = styled.li`
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  cursor: pointer;
  height: 3em;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border: 1px solid #00000020;
  :hover {
    background-color: ${({ theme }) => theme.dark};
    opacity: 1;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 30rem;
`;
