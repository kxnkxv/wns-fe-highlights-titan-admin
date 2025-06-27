import { FC, useState } from 'react';

import { Box, Tab, Tabs, Typography, styled } from '@mui/material';

import { ProductType } from '@wns/features/CatalogPage/components/CatalogList/model/ProductTypes';

const TabSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  padding: '.2rem',
  minHeight: '24px',
  borderRadius: '4px',
  '& .MuiTab-root': {
    color: theme.palette.text.secondary,
    width: 'calc(100% /3)',
    textTransform: 'none',
    padding: '8px 16px',
    minHeight: '24px',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#333333',
      borderRadius: '4px',
    },
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  lineHeight: '1.5rem',
}));

type Props = {
  product: ProductType;
};

const ProductTabs: FC<Props> = ({ product }) => {
  const [tab, setTab] = useState<number>(0);
  return (
    <TabSection>
      <StyledTabs value={tab} onChange={(e, v) => setTab(v)}>
        <Tab label="Характеристики" />
        <Tab label="Материал" />
        <Tab label="Уход" />
      </StyledTabs>
      <Box sx={{ mt: 2 }}>
        {tab === 0 && (
          <StyledText variant="body2">
            Материал: титан Grade 5<br />
            Вес: 4.2 г<br />
            Ширина: 6 мм
            <br />
            Матовая отделка
            <br />
            Возможность гравировки
          </StyledText>
        )}
        {tab === 1 && (
          <StyledText variant="body2">
            Титан Grade 5 (Ti-6Al-4V) — самый прочный из титановых сплавов. Он на 45% легче стали, но при этом обладает
            исключительной прочностью. Титан биосовместим с человеческим организмом, не вызывает аллергических реакций и
            устойчив к коррозии.
          </StyledText>
        )}
        {tab === 2 && (
          <StyledText variant="body2">
            Избегайте контакта с агрессивными химическими веществами
            <br /> Протирайте мягкой тканью
            <br /> Храните в отдельном футляре
          </StyledText>
        )}
      </Box>
    </TabSection>
  );
};

export default ProductTabs;
