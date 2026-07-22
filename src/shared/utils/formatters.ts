


export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  }
): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { ...options, timeZone: 'UTC' });
  } catch {
    return dateString;
  }
}


export function formatDateRange(
  startDate: string,
  endDate?: string,
  isCurrent?: boolean
): string {
  const start = formatDate(startDate);
  if (isCurrent) return `${start} — Present`;
  if (!endDate) return start;
  const end = formatDate(endDate);
  return `${start} — ${end}`;
}


export function calculateDuration(
  startDate: string,
  endDate?: string
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
  if (remainingMonths === 0) return `${years} yr${years !== 1 ? 's' : ''}`;
  return `${years} yr${years !== 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
}


export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}


export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength).trim()}...`;
}


export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}


export function formatEmploymentType(type: string): string {
  const map: Record<string, string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    contract: 'Contract',
    freelance: 'Freelance',
    internship: 'Internship',
  };
  return map[type] || titleCase(type);
}
