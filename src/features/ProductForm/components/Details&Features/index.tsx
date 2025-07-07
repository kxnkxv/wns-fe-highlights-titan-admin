import { FC, useState } from 'react';
import { IoMdAdd, IoMdClose } from 'react-icons/io';

import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

type Props = {
  details: {
    sizes: string[];
    features: string[];
    careInstructions: string[];
  };
};

const FormWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem 0',
  marginTop: '.5rem',
});

const Label = styled(Typography)({
  color: 'white',
  fontSize: '.875rem',
  lineHeight: '1rem',
  fontWeight: 600,
});

const StyledSizeTextField = styled(TextField)({
  backgroundColor: '#333333',
  borderRadius: '8px',
  flex: 1,
  height: 'fit-content',
  width: '60px',
  div: {
    borderRadius: '8px',
    fontSize: '.875rem',
  },
  input: {
    padding: '0.6rem 1rem',
    borderRadius: '8px',
  },
});

const StyledTextField = styled(TextField)({
  backgroundColor: '#333333',
  borderRadius: '8px',
  flex: 1,
  height: 'fit-content',
  width: '60px',
  div: {
    borderRadius: '8px',
    fontSize: '.875rem',
  },
  input: {
    padding: '0.6rem 1rem',
    borderRadius: '8px',
  },
});

const StylesIconButton = styled(IconButton)({
  borderRadius: '4px',
  padding: '.5rem',
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  borderRadius: 6,
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  textTransform: 'none',
  boxShadow: 'none',
  gap: '.5rem',
  width: 'fit-content',

  transition: theme.palette.transitions?.create(['background-color', 'color'], {
    duration: theme.palette.transitions.duration.short,
    easing: theme.palette.transitions.easing.easeIn,
  }),
}));

const StyledOutlinedButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[500]}`,
  color: theme.palette.grey[500],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[400],
  },
}));

const DetailsFeatures: FC<Props> = ({ details }) => {
  const [sizes, setSizes] = useState<string[]>(details.sizes || ['16', '17', '18', '19', '20']);
  const [features, setFeatures] = useState<string[]>(details.features || []);

  const [careInstructions, setCareInstructions] = useState<string[]>(details.careInstructions || []);

  const updateSize = (value: string, index: number) => {
    const updated = [...sizes];
    updated[index] = value;
    setSizes(updated);
  };

  const removeSize = (index: number) => {
    const updated = sizes.filter((_, idx) => idx !== index);
    setSizes(updated);
  };

  const addSize = () => {
    const newSizes = [...sizes, ''];
    setSizes(newSizes);
  };

  const updateFeatures = (value: string, index: number) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const addFeature = () => {
    const updated = [...features, ''];
    setFeatures(updated);
  };

  const removeFeature = (index: number) => {
    const updated = features.filter((_, i) => i !== index);
    setFeatures(updated);
  };

  const updateCareInstruction = (value: string, index: number) => {
    const updated = [...careInstructions];
    updated[index] = value;
    setCareInstructions(updated);
  };

  const addCareInstruction = () => {
    const updated = [...careInstructions, ''];
    setCareInstructions(updated);
  };

  const removeCareInstruction = (index: number) => {
    const updated = careInstructions.filter((_, i) => i !== index);
    setCareInstructions(updated);
  };

  return (
    <FormWrapper>
      <Box display={'flex'} flexDirection={'column'} gap={1} flex={1}>
        <Label>Available Sizes</Label>
        <Box display="flex" gap={2} flexWrap="wrap">
          {sizes.map((size, index) => (
            <Box key={index} display="flex" alignItems="center" gap={1}>
              <StyledSizeTextField value={size} onChange={(e) => updateSize(e.target.value, index)} />
              <StylesIconButton size="small" onClick={() => removeSize(index)}>
                <IoMdClose fontSize="medium" />
              </StylesIconButton>
            </Box>
          ))}
          <StylesIconButton size="small" onClick={addSize}>
            <IoMdAdd fontSize="medium" />
          </StylesIconButton>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={2} flex={1}>
        <Label>Features</Label>
        {features.map((feature, index) => (
          <Box key={index} display="flex" alignItems="center" gap={1} flex={1}>
            <StyledTextField
              placeholder={`Feature ${index + 1}`}
              value={feature}
              onChange={(e) => updateFeatures(e.target.value, index)}
            />
            <StylesIconButton size="small" onClick={() => removeFeature(index)}>
              <IoMdClose fontSize="medium" />
            </StylesIconButton>
          </Box>
        ))}
        <StyledOutlinedButton onClick={addFeature}>
          <IoMdAdd fontSize="medium" />
          Add Feature
        </StyledOutlinedButton>
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={2} flex={1}>
        <Label>Care Instructions</Label>
        {careInstructions.map((care, index) => (
          <Box key={index} display="flex" alignItems="center" gap={1} flex={1}>
            <StyledTextField
              placeholder={`Instruction ${index + 1}`}
              value={care}
              onChange={(e) => updateCareInstruction(e.target.value, index)}
            />
            <StylesIconButton size="small" onClick={() => removeCareInstruction(index)}>
              <IoMdClose fontSize="medium" />
            </StylesIconButton>
          </Box>
        ))}
        <StyledOutlinedButton onClick={addCareInstruction}>
          <IoMdAdd fontSize="medium" />
          Add Care Instruction
        </StyledOutlinedButton>
      </Box>
    </FormWrapper>
  );
};

export default DetailsFeatures;
