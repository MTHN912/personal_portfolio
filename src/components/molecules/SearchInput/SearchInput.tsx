// SearchInput molecule
'use client';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import styles from './SearchInput.module.css';

interface SearchInputProps { value: string; onChange: (value: string) => void; placeholder?: string; }

export default function SearchInput({ value, onChange, placeholder = 'Search...' }: SearchInputProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}><DynamicIcon name="FaSearch" size={14} /></span>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={styles.input} aria-label="Search" />
      {value && (
        <button className={styles.clear} onClick={() => onChange('')} aria-label="Clear search">
          <DynamicIcon name="FaTimes" size={12} />
        </button>
      )}
    </div>
  );
}
