// ContactCard molecule
import { Card, Typography } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import styles from './ContactCard.module.css';

interface ContactCardProps { icon: string; label: string; value: string; href?: string; }

export default function ContactCard({ icon, label, value, href }: ContactCardProps) {
  const content = (
    <Card variant="glass" padding="md" className={styles.card}>
      <div className={styles.iconWrapper}>
        <DynamicIcon name={icon} size={22} />
      </div>
      <div className={styles.info}>
        <Typography variant="caption" color="muted">{label}</Typography>
        <Typography variant="body-sm">{value}</Typography>
      </div>
    </Card>
  );

  if (href) {
    return <a href={href} className={styles.link} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{content}</a>;
  }
  return content;
}
