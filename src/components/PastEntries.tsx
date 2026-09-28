import type { BMIEntry } from "../types/bmi";

type EntryListProps = {
  entries: BMIEntry[];
  onDelete: (id: string) => void;
};

export const EntryList = ({ entries, onDelete }: EntryListProps) => {
  if (entries.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 py-10 text-center">
        <p className="text-slate-500">No BMI entries yet.</p>

        <p className="mt-1 text-sm text-slate-400">
          Calculate your BMI to see your history here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="grid gap-4 rounded-xl border border-slate-200 p-4 sm:grid-cols-[1fr_1fr_1fr_1fr_auto] sm:items-center"
        >
          <div>
            <p className="text-xs font-medium text-slate-400">BMI</p>

            <p className="mt-1 font-semibold text-slate-900">{entry.bmi}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Category</p>

            <p className="mt-1 font-medium text-slate-700">{entry.category}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Height</p>

            <p className="mt-1 font-medium text-slate-700">{entry.height} cm</p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Weight</p>

            <p className="mt-1 font-medium text-slate-700">{entry.weight} kg</p>
          </div>

          <button
            type="button"
            onClick={() => onDelete(entry.id)}
            className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 sm:justify-self-end"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
