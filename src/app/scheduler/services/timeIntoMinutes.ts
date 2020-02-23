export function timeIntoMinutes(time: string): number {
  return new Date(time).getHours() * 60 + new Date(time).getMinutes();
}
