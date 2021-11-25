import { useState } from 'react';
import { toRound } from '@/number';

const ToRoundComponent = () => {
  const [val, setVal] = useState<string>('0');

  return (
    <div>
      <input value={val} onChange={e => setVal(e.target.value)} />
      <div>result: {toRound(Number(val) || 0)}</div>
    </div>
  );
};

export const ToRound = () => <ToRoundComponent />;

export default {
  title: 'Number Tools',
};
