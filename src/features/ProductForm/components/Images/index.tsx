import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineFileUpload } from 'react-icons/md';

import { Box, IconButton, Typography, styled } from '@mui/material';

type Props = {
  image: string[];
};

const FormWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
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

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '100%', // square
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  aspectRatio: '1 / 1',
  border: '1px solid',
  borderColor: theme.palette.grey[600],
}));

const RemoveButton = styled(IconButton)({
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: '#7f1d1d',
  color: 'white',
  '&:hover': {
    backgroundColor: '#991b1b',
  },
});

const UploadDropArea = styled(Box)(({ theme }) => ({
  border: '1px dashed',
  borderColor: theme.palette.grey[600],
  borderRadius: '8px',
  height: '100%',
  paddingTop: '100%',
  backgroundColor: theme.palette.grey[600],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.grey[400],
  cursor: 'pointer',
  position: 'relative',
}));

const UploadInner = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
});

const Images: FC<Props> = ({ image }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<string[]>(image || []);

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;
    const newImages: string[] = [];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        newImages.push(result);
        const combined = [...images, ...newImages];
        setImages(combined);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleImageUpload(e.dataTransfer.files);
  };

  const handleDelete = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  return (
    <FormWrapper>
      <Box display={'flex'} flexDirection={'column'} gap={1} flex={1}>
        <Label>Product Images</Label>
        <Box display={'flex'} flexDirection={'row'} gap={2} flex={1} flexWrap={'wrap'}>
          {images.map((img, index) => (
            <Box key={index} flex="1 1 calc(33.333% - 16px)" maxWidth="calc(33.333% - 16px)" position="relative">
              <ImageContainer>
                <Image
                  fill
                  src={img || '/mockImage/placeholderBanner.png'}
                  alt={`product-${index}`}
                  style={{
                    position: 'absolute',
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
                <RemoveButton size="small" onClick={() => handleDelete(index)}>
                  <IoMdClose />
                </RemoveButton>
              </ImageContainer>
            </Box>
          ))}

          <Box
            flex="1 1 calc(33.333% - 16px)"
            maxWidth="calc(33.333% - 16px)"
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <UploadDropArea>
              <UploadInner>
                <MdOutlineFileUpload size={36} />
                <Typography variant="body1">Click to upload or drag and drop</Typography>
              </UploadInner>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={(e) => handleImageUpload(e.target.files)}
              />
            </UploadDropArea>
          </Box>
        </Box>
      </Box>
    </FormWrapper>
  );
};

export default Images;
