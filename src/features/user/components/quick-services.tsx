import { Box, Typography, Card, CardActionArea, Grid } from '@mui/material';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';

const SERVICES = [
  { label: 'Buy Airtime', icon: <PhoneAndroidRoundedIcon />, color: '#1A3FE8', bg: '#EEF1FD' },
  { label: 'Buy Data', icon: <WifiRoundedIcon />, color: '#1A3FE8', bg: '#EEF1FD' },
  { label: 'Electricity', icon: <FlashOnRoundedIcon />, color: '#F79009', bg: '#FFFAEB' },
  { label: 'Cable TV', icon: <TvRoundedIcon />, color: '#1A3FE8', bg: '#EEF1FD' },
];

export default function QuickServices() {
  return (
    <Card sx={{ height: '100%' }}>
      <Box sx={{ p: 2.5 }}>
        <Grid container spacing={1.5}>
          {SERVICES.map(({ label, icon, color, bg }) => (
            <Grid xs={6} key={label}>
              <Card
                variant="outlined"
                sx={{ borderColor: 'grey.100', borderRadius: 2 }}
              >
                <CardActionArea sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      bgcolor: bg,
                      color,
                      borderRadius: '50%',
                      width: 44,
                      height: 44,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography variant="caption" SX={{ fontWeight:600 }} color="text.primary">
                    {label}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
}