import {
  Box,
  Typography,
  Grid,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

export default function PromoCards() {
  return (
    <Grid container spacing={2}>
      {/* Upgrade to Reseller */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #0D1B3E 0%, #162966 100%)",
            borderRadius: 3,
            p: 3,
            color: "white",
            position: "relative",
            overflow: "hidden",
            minHeight: 150,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: -10,
              bottom: -20,
              opacity: 0.08,
            }}
          >
            <LayersRoundedIcon sx={{ fontSize: 120 }} />
          </Box>
          <LayersRoundedIcon sx={{ mb: 1.5, opacity: 0.9 }} />
          <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
            Upgrade to Reseller
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
            Unlock massive discounts on all services.
          </Typography>
          <Button
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              color: "#4D6EFF",
              fontWeight: 700,
              p: 0,
              "&:hover": { bgcolor: "transparent", opacity: 0.8 },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Grid>

      {/* Refer & Earn */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #1A3FE8 0%, #4D6EFF 100%)",
            borderRadius: 3,
            p: 3,
            color: "white",
            position: "relative",
            overflow: "hidden",
            // minHeight: 150,
            height: '100%',
          }}
        >
          <Box
            sx={{ position: "absolute", right: -20, bottom: -20, opacity: 0.1 }}
          >
            <PeopleAltRoundedIcon sx={{ fontSize: 130 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
            Refer &amp; Earn
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
            Earn commission on your friends' first purchase.
          </Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.15)",
                borderRadius: 2,
                px: 2,
                
                py: 0.8,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, letterSpacing: 0.5 }}
              >
                SWIFT-7829-VTU
              </Typography>
            </Box>
            <IconButton
              size="small"
              sx={{
                bgcolor: "rgba(255,255,255,0.15)",
                borderRadius: 1.5,
                "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
              }}
            >
              <ContentCopyRoundedIcon
                fontSize="small"
                sx={{ color: "white" }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
