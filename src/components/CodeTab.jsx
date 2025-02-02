import { useDispatch } from 'react-redux';
import { updateCode } from '../features/tabs';

export default function CodeTab({ id, code }) {
  const dispatch = useDispatch();

  return (
    <textarea
      value={code}
      onChange={(e) => dispatch(updateCode({ id, value: e.target.value }))}
      spellCheck="false"
      className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none"
    ></textarea>
  );
}
