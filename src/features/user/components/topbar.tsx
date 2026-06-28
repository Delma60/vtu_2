import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Stack,
} from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

export default function Topbar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 3,
      }}
    >
      <Box>
        <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
          Good morning, John Doe!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Manage your VTU services with ease.
        </Typography>
      </Box>

      <Stack direction="row" sx={{ alignItems: "center", spacing: 1 }}>
        <IconButton size="small">
          <Badge variant="dot" color="error">
            <NotificationsNoneRoundedIcon fontSize="small" />
          </Badge>
        </IconButton>
        <IconButton size="small">
          <HelpOutlineRoundedIcon fontSize="small" />
        </IconButton>
        <Stack direction="row" spacing={1} sx={{ ml: 1, alignItems: "center" }}>
          <Avatar
            src="https://i.pravatar.cc/40?img=11"
            sx={{ width: 34, height: 34 }}
          />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            My Profile
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
