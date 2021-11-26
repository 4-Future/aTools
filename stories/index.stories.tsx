import { useState } from 'react';
import { COLORS } from './colors';
import { upperCase } from '@/string';

const UpperCaseComponent = () => {
  const [val, setVal] = useState<string>('');

  return (
    <div>
      <input value={val} onChange={e => setVal(e.target.value)} />
      <div style={{ color: COLORS.b1b }}>result: {upperCase(val)}</div>
    </div>
  );
};

export const UpperCase = () => <UpperCaseComponent />;

export default {
  title: 'String Tools',
};
