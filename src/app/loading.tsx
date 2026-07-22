
import { Spinner } from '@/components/atoms';

export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--color-bg)',
    }}>
      <Spinner size="lg" />
    </div>
  );
}
