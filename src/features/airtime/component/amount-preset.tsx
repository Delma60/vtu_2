import { Stack, Chip } from '@mui/material';

const PRESETS = [100, 200, 500, 1000, 2000, 5000];

interface Props {
  selected: number | null;
  onSelect: (val: number) => void;
}

export default function AmountPresets({ selected, onSelect }: Props) {
  return (
    <Stack direction="row" spacing={1} sx={{flexWrap:"wrap"}} useFlexGap>
      {PRESETS.map((val) => (
        <Chip
          key={val}
          label={`₦${val.toLocaleString()}`}
          onClick={() => onSelect(val)}
          variant={selected === val ? 'filled' : 'outlined'}
          sx={{
            fontWeight: 600,
            fontSize: 13,
            height: 34,
            borderRadius: 5,
            borderColor: selected === val ? 'primary.main' : 'grey.300',
            bgcolor: selected === val ? 'primary.main' : 'transparent',
            color: selected === val ? 'white' : 'text.primary',
            '&:hover': {
              bgcolor: selected === val ? 'primary.dark' : 'secondary.main',
            },
          }}
        />
      ))}
    </Stack>
  );
}