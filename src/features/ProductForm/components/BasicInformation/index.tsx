import { FC, useState } from 'react';

import {
  Box,
  FormControlLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { Switch } from '@wns/shared/ui/Switch';

type Props = {
  initialValues: {
    name: string;
    category: string;
    description: string;
    price: string;
    stock: string;
    isNew: boolean;
    isLimited: boolean;
  };
};

const FormWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem 0',
  marginTop: '.5rem',
});

const FieldWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

const Label = styled(Typography)({
  color: 'white',
  fontSize: '.875rem',
  lineHeight: '1rem',
  fontWeight: 600,
});

const StyledTextField = styled(TextField)({
  backgroundColor: '#333333',
  borderRadius: '8px',
  flex: 1,
  height: 'fit-content',
  div: {
    borderRadius: '8px',
    fontSize: '.875rem',
  },
  input: {
    padding: '0.6rem 1rem',
    borderRadius: '8px',
  },
});

const StyledSelect = styled(Select)({
  backgroundColor: '#333333',
  borderRadius: '8px',
  flex: 1,
  height: 'fit-content',
  div: {
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '.875rem',
  },
  input: {
    padding: '0.5rem 1rem',
    borderRadius: '8px',
  },
});

const BasicInformation: FC<Props> = ({ initialValues }) => {
  const [formData, setFormData] = useState(initialValues);

  const updateForm = (field: string, value: string | boolean) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <FormWrapper>
      <FieldWrapper>
        <Box display={'flex'} flexDirection={'column'} gap={1} flex={1}>
          <Label>Product Name</Label>
          <StyledTextField value={formData.name} onChange={(e) => updateForm('name', e.target.value)} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={1} flex={1}>
          <Label>Category</Label>
          <StyledSelect
            value={formData.category}
            onChange={(e: SelectChangeEvent<unknown>) => {
              const value = e.target.value as string;
              updateForm('category', value);
            }}
            fullWidth
          >
            <MenuItem value="Кольца">Кольца</MenuItem>
            <MenuItem value="Серьги">Серьги</MenuItem>
            <MenuItem value="Браслеты">Браслеты</MenuItem>
            <MenuItem value="Кулоны">Кулоны</MenuItem>
            <MenuItem value="Запонки">Запонки</MenuItem>
          </StyledSelect>
        </Box>
      </FieldWrapper>
      <FieldWrapper>
        <Box display={'flex'} flexDirection={'column'} gap={1} flex={1}>
          <Label>Description</Label>
          <StyledTextField
            value={formData.description}
            onChange={(e) => updateForm('description', e.target.value)}
            multiline
            minRows={4}
          />
        </Box>
      </FieldWrapper>
      <FieldWrapper sx={{ width: '70%' }}>
        <Box display={'flex'} flexDirection={'column'} gap={1} flex={1}>
          <Label>Price (₽)</Label>
          <StyledTextField value={formData.price} onChange={(e) => updateForm('price', e.target.value)} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={1} flex={1}>
          <Label>Stock</Label>
          <StyledTextField value={formData.stock} onChange={(e) => updateForm('stock', e.target.value)} />
        </Box>
      </FieldWrapper>
      <FieldWrapper>
        <Box display={'flex'} flexDirection={'column'} gap={1} flex={1}>
          <FormControlLabel
            sx={{ margin: 0 }}
            control={<Switch checked={formData.isNew} onChange={(e) => updateForm('isNew', e.target.checked)} />}
            label={'Mark as New'}
          />
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={1} flex={1}>
          <FormControlLabel
            sx={{ margin: 0 }}
            control={
              <Switch checked={formData.isLimited} onChange={(e) => updateForm('isLimited', e.target.checked)} />
            }
            label={'Limited Edition'}
          />
        </Box>
      </FieldWrapper>
    </FormWrapper>
  );
};

export default BasicInformation;
