type GoalTrackerProps = {
  currentWeight: string;
  goalWeight: string;
  setGoalWeight: (value: string) => void;
};

export const GoalTracker = ({
  currentWeight,
  goalWeight,
  setGoalWeight,
}: GoalTrackerProps) => {
  const current = Number(currentWeight);
  const goal = Number(goalWeight);

  const weightDifference = Math.abs(current - goal);

  const goalReached =
    currentWeight !== "" && goalWeight !== "" && current === goal;

  return (
    <div>
      {/* Goal input */}
      <div className="max-w-md">
        <label
          htmlFor="goalWeight"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Goal weight
        </label>

        <div className="relative">
          <input
            id="goalWeight"
            type="number"
            min="1"
            placeholder="Enter your goal weight"
            value={goalWeight}
            onChange={(event) => setGoalWeight(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-14 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            kg
          </span>
        </div>
      </div>

      {/* Goal result */}
      {currentWeight && goalWeight && (
        <div className="mt-6 rounded-xl bg-slate-50 p-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-500">Current weight</p>

              <p className="mt-1 text-xl font-semibold">{current} kg</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Goal weight</p>

              <p className="mt-1 text-xl font-semibold">{goal} kg</p>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-200 pt-4">
            {goalReached ? (
              <p className="font-semibold text-green-600">🎯 Goal reached!</p>
            ) : (
              <p className="font-semibold text-slate-800">
                {weightDifference.toFixed(1)} kg to go
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
