import Link from 'next/link';
import React, { useState } from 'react';

import { materialsGraphData, materialsPropertyData } from './model/mock';
import {
  Box,
  Button,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
  styled,
} from '@mui/material';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

const StyledHeader = styled(Typography)(() => ({
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '2rem',
  marginBottom: '20px',
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  padding: '1rem',
  '& .MuiTab-root': {
    color: '#fff',
    textTransform: 'none',
    fontWeight: 'bold',
    maxWidth: '50%',
    '&.Mui-selected': {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: '#222',
  overflowX: 'auto',
  maxWidth: '100%',
  border: `1px solid ${theme.palette.background.default}`,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
  border: 'none',
  '&:nth-child(2)': {
    color: theme.palette.primary.main,
  },
}));

const StyledTableBodyRow = styled(TableRow)(({ theme }) => ({
  border: 'none',
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.grey[600],
  },
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
  marginTop: '20px',
  marginBottom: '20px',
  fontSize: '1rem',
  textAlign: 'center',
  color: theme.palette.grey[300],
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#000',
  maxWidth: '300px',
  alignSelf: 'center',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const StyledGraphContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
}));

const StyledGraphItem = styled(Box)(() => ({
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const StyledGraphScore = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const StyledGraphType = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.grey[300],
}));

const CompairMaterial = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <WrapperContainer>
      <StyledHeader variant="h2">СРАВНЕНИЕ МАТЕРИАЛОВ</StyledHeader>
      <StyledTabs value={value} onChange={handleChange}>
        <Tab label="Сравнение характеристик" />
        <Tab label="Графическое сравнение" />
      </StyledTabs>
      {value === 0 && (
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Характеристика</StyledTableCell>
                {materialsPropertyData.columns.map((column, index) => (
                  <StyledTableCell key={index}>{column}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {materialsPropertyData.rows.map((row, rowIndex) => (
                <StyledTableBodyRow key={rowIndex}>
                  <StyledTableCell>{row.characteristic}</StyledTableCell>
                  {row.values.map((value, colIndex) => (
                    <StyledTableCell key={colIndex}>{value}</StyledTableCell>
                  ))}
                </StyledTableBodyRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      )}
      {value === 1 && (
        <StyledGraphContainer>
          {materialsGraphData.map((item) => (
            <StyledGraphItem key={item.type}>
              <StyledGraphScore>{item.score}/100</StyledGraphScore>
              <StyledGraphType>{item.type}</StyledGraphType>
            </StyledGraphItem>
          ))}
        </StyledGraphContainer>
      )}
      <StyledFooterText>
        Титан превосходит традиционные ювелирные материалы по многим параметрам, сочетая в себе прочность, легкость и
        гипоаллергенность.
      </StyledFooterText>
      <Link href="/catalog" style={{ alignSelf: 'center' }}>
        <StyledButton variant="contained">СМОТРЕТЬ КОЛЛЕКЦИЮ</StyledButton>
      </Link>
    </WrapperContainer>
  );
};

export default CompairMaterial;
