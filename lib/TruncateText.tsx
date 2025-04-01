export default function truncateText(text: string, limit: number) {
  if (text.length <= limit) return text;
  const trimmedText = text.substring(0, limit);
  return trimmedText.substring(0, trimmedText.lastIndexOf(" ")) + "...";
}
