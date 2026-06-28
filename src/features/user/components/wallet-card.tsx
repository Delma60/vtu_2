import { Box, Typography, Button, Stack } from '@mui/material';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';

export default function WalletCard() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1A3FE8 0%, #0A20A0 100%)',
        borderRadius: 3,
        p: 3,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        // minHeight: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Decorative circle */}
      <Box
        sx={{
          position: 'absolute',
          top: -30,
          right: -30,
          width: 180,
          height: 180,
          borderRadius: '50%',
          border: '40px solid rgba(255,255,255,0.06)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          right: 60,
          width: 140,
          height: 140,
          borderRadius: '50%',
          border: '30px solid rgba(255,255,255,0.04)',
        }}
      />

      <Box sx={{ position: 'relative' }}>
        <Typography variant="caption" sx={{ opacity: 0.75, letterSpacing: 0.5 }}>
          Main Balance
        </Typography>
        <Stack direction="row" sx={{  justifyContent: "space-between", alignItems: "flex-start" }}>
          <Typography variant="h4" sx={{ mt: 0.5, letterSpacing: '-1px', fontWeight:800 }}>
            ₦45,250.00
          </Typography>
          <Box
            sx={{
              bgcolor: 'rgba(255,255,255,0.12)',
              borderRadius: 2,
              p: 1,
              mt: 0.5,
            }}
          >
            <CropFreeRoundedIcon sx={{ fontSize: 32, opacity: 0.7 }} />
          </Box>
        </Stack>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Typography variant="caption" sx={{ opacity: 0.65 }}>
          Commission Balance
        </Typography>
        <Typography variant="h6"  sx={{ mb: 2, fontWeight:700 }}>
          ₦1,200.50
        </Typography>
        <Stack direction="row" spacing={1.5}>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              fontWeight: 700,
              '&:hover': { bgcolor: 'grey.100' },
              px: 2.5,
            }}
          >
            Fund Wallet
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: 'rgba(255,255,255,0.5)',
              color: 'white',
              fontWeight: 700,
              '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.08)' },
              px: 2.5,
            }}
          >
            Withdraw
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}