import { FC } from 'react';

import { Paper, Typography, styled } from '@mui/material';
import { LineChart } from '@mui/x-charts';

import { salesData } from '@wns/features/DashBoard/components/LineChatSales/model/sales.mock';

const LineChartCard = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  borderWidth: '1px',
  borderRadius: '.5rem',
}));

const LineChatSales: FC = () => {
  return (
    <LineChartCard elevation={3}>
      <Typography variant="h5" fontWeight={700}>
        Sales Overview
      </Typography>
      <Typography variant="body2" color="gray">
        Monthly revenue for the current year
      </Typography>
      <LineChart
        xAxis={[{ scaleType: 'point', data: salesData.map((d) => d.month) }]}
        yAxis={[
          {
            width: 60,
          },
        ]}
        series={[
          {
            data: salesData.map((d) => d.revenue),
            color: '#00bfa5',
            area: true,
            curve: 'linear',
            valueFormatter: (v) => (v === null ? '' : `${v.toLocaleString()} ₽`),
          },
        ]}
        height={300}
        grid={{ vertical: true, horizontal: true }}
        margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
      />
    </LineChartCard>
  );
};

export default LineChatSales;
