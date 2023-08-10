export default function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const timeParts = [];

  if (hours > 0) {
    timeParts.push(hours.toString());
  }

  timeParts.push(minutes.toString().padStart(hours > 0 ? 2 : 1, '0'));
  timeParts.push(remainingSeconds.toString().padStart(2, '0'));

  return timeParts.join(':');
}
