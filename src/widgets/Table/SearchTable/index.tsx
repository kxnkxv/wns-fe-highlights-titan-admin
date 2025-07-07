import { FC, useState } from 'react';

import { TextField, styled } from '@mui/material';

type Props = {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
  placeholder: string;
};

const StyledTextField = styled(TextField)({
  backgroundColor: '#333333',
  borderRadius: '8px',
  flex: 1,
  height: 'fit-content',
  div: {
    borderRadius: '8px',
  },
  input: {
    padding: '0.5rem 1rem',
    borderRadius: '8px',
  },
});

const SearchTable: FC<Props> = ({ setSearchTerm, searchTerm, placeholder }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setSearchTerm(newValue);
  };

  return <StyledTextField value={inputValue} onChange={handleChange} size={'small'} placeholder={placeholder} />;
};

export default SearchTable;
