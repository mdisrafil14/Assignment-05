import type { Technology } from "../types/technology";

interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const YourStack = ({ stack, onRemove, onClear }: Props) => {
  return (
    <aside className="h-fit self-start rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Your Stack</h2>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-500">
          {stack.length}
        </span>
      </div>

      {stack.length === 0 ? (
        <p className="mt-5 text-center text-sm text-slate-400">
          Your stack is empty.
        </p>
      ) : (
        <div className="mt-5 space-y-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
            >
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt="" className="h-8 w-8" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>

              <button
                onClick={() => onRemove(tech.id)}
                className="text-xs text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={onClear}
            className="w-full rounded-md border py-2 text-sm text-red-500"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default YourStack;