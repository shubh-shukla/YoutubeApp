export default function formatNumber(input: number) {
  if (input < 1000) {
    return input.toString();
  } else if (input < 1000000) {
    return (input / 1000).toFixed(0) + 'K';
  } else if (input < 1000000000) {
    return (input / 1000000).toFixed(0) + 'M';
  } else {
    return (input / 1000000000).toFixed(0) + 'B';
  }
}
