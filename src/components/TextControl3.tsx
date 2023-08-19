import React,{useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite';
import countryStore from '../store/CountryStore'; // Подключите CountryStore
import { CountryInfo } from '../api/apiService';
interface CountryAutoCompleteViewProps {
  maxOptions: number;
}

const TextControl3: React.FC<CountryAutoCompleteViewProps> = ({
  maxOptions,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    countryStore.setInputValue(event.target.value);
    setLocalInputValue(event.target.value);
    console.log(countryStore.inputValue)
    // console.log(event.target.value)
  };
  const [localInputValue, setLocalInputValue] = useState('');
  const handleOptionClick = (country: CountryInfo) => {
    countryStore.setInputValue(country.fullName);
    countryStore.options=[]
    setLocalInputValue(country.fullName);
  };
  useEffect(() => {
    setLocalInputValue(countryStore.inputValue);
  }, [countryStore.inputValue]);

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={countryStore.inputValue}
        onChange={handleInputChange}
        placeholder="Type a country name..."
      />
      {countryStore.areOptionsAvailable && (
        <ul className="options">
          {countryStore.options.slice(0, maxOptions).map((country, index) => (
            <li key={index} onClick={() => handleOptionClick(country)}>
            <img src={country.flag}/>{country.fullName}, {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default observer(TextControl3);
