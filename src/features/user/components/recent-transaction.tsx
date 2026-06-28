import {
  Box, Typography, Card, CardContent, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Chip, Stack, Link,
  Avatar,
} from '@mui/material';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';

const TRANSACTIONS = [
  {
    service: 'MTN Data - 5GB',
    txId: '#TXN-902834-01',
    amount: '₦1,250.00',
    date: 'May 24, 2024',
    status: 'Success',
    icon: <WifiRoundedIcon fontSize="small" />,
    iconColor: '#ECFDF3',
    iconFg: '#12B76A',
  },
  {
    service: 'Airtel Airtime',
    txId: '#TXN-902835-02',
    amount: '₦500.00',
    date: 'May 24, 2024',
    status: 'Success',
    icon: <PhoneAndroidRoundedIcon fontSize="small" />,
    iconColor: '#EEF1FD',
    iconFg: '#1A3FE8',
  },
  {
    service: 'IKEDC Prepaid',
    txId: '#TXN-902836-03',
    amount: '₦5,000.00',
    date: 'May 23, 2024',
    status: 'Pending',
    icon: <FlashOnRoundedIcon fontSize="small" />,
    iconColor: '#FFFAEB',
    iconFg: '#F79009',
  },
  {
    service: 'DStv Compact',
    txId: '#TXN-902837-04',
    amount: '₦12,500.00',
    date: 'May 22, 2024',
    status: 'Failed',
    icon: <TvRoundedIcon fontSize="small" />,
    iconColor: '#FEF3F2',
    iconFg: '#F04438',
  },
  {
    service: 'Glo Data - 2GB',
    txId: '#TXN-902838-05',
    amount: '₦600.00',
    date: 'May 21, 2024',
    status: 'Success',
    icon: <WifiRoundedIcon fontSize="small" />,
    iconColor: '#ECFDF3',
    iconFg: '#12B76A',
  },
];

const STATUS_MAP: Record<string, { color: 'success' | 'warning' | 'error'; bg: string }> = {
  Success: { color: 'success', bg: '#ECFDF3' },
  Pending: { color: 'warning', bg: '#FFFAEB' },
  Failed: { color: 'error', bg: '#FEF3F2' },
};

export default function RecentTransactions() {
  return (
    <Card>
      <CardContent sx={{ p: 2.5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1" fontWeight={700}>
            Recent Transactions
          </Typography>
          <Link href="#" underline="hover" sx={{ fontSize: 13, fontWeight: 600, color: 'primary.main' }}>
            View All History
          </Link>
        </Stack>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ '& th': { color: 'text.secondary', fontWeight: 600, fontSize: 12, borderBottom: '1px solid', borderColor: 'grey.100', pb: 1.5 } }}>
                <TableCell>Service</TableCell>
                <TableCell>Transaction ID</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TRANSACTIONS.map((tx) => {
                const st = STATUS_MAP[tx.status];
                return (
                  <TableRow
                    key={tx.txId}
                    sx={{ '&:last-child td': { border: 0 }, '& td': { py: 1.8, borderColor: 'grey.50' } }}
                  >
                    <TableCell>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar sx={{ width: 32, height: 32, bgcolor: tx.iconColor, color: tx.iconFg }}>
                          {tx.icon}
                        </Avatar>
                        <Typography variant="body2" fontWeight={600} color="text.primary">
                          {tx.service}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary" fontFamily="monospace">
                        {tx.txId}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight={700}>
                        {tx.amount}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {tx.date}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={tx.status}
                        size="small"
                        color={st.color}
                        sx={{ bgcolor: st.bg, fontSize: 11, height: 24 }}
                        variant="filled"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}