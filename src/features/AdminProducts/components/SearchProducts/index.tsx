import { FC } from 'react';

import { TextField, styled } from '@mui/material';

type Props = {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
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

const SearchProducts: FC<Props> = ({ setSearchTerm, searchTerm }) => {
  return (
    <StyledTextField
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      size={'small'}
      placeholder={'Search Products...'}
    />
  );
};

export default SearchProducts;
