import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

export default function AutoFundCard() {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ p: 2.5 }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Auto-Funding Account
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Instantly fund your wallet via bank transfer.
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "secondary.main",
              borderRadius: 2,
              p: 1,
            }}
          >
            <AccountBalanceRoundedIcon color="primary" fontSize="small" />
          </Box>
        </Stack>

        <Box
          sx={{
            border: "1px solid",
            borderColor: "grey.200",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              letterSpacing: 1,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Monnify Bank
          </Typography>
          <Stack
            direction="row"
            sx={{
              mt: 0.5,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, letterSpacing: "-0.5px" }}
            >
              1234567890
            </Typography>
            <IconButton
              size="small"
              sx={{ bgcolor: "grey.100", borderRadius: 1.5 }}
            >
              <ContentCopyRoundedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 1.5, display: "block", fontStyle: "italic" }}
        >
          Note: Transfers are processed instantly. ₦50 charge applies.
        </Typography>
      </CardContent>
    </Card>
  );
}
