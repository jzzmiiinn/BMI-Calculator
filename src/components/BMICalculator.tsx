type BMIFormProps = {
  height: string;
  weight: string;
  setHeight: (value: string) => void;
  setWeight: (value: string) => void;
  onCalculate: () => void;
};

export const BMIForm = ({
  height,
  weight,
  setHeight,
  setWeight,
  onCalculate,
}: BMIFormProps) => {
  return (
    <div className="space-y-5">
      {/* Height */}
      <div>
        <label
          htmlFor="height"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Height
        </label>

        <div className="relative">
          <input
            id="height"
            type="number"
            placeholder="Enter your height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-14 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            cm
          </span>
        </div>
      </div>

      {/* Weight */}
      <div>
        <label
          htmlFor="weight"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Weight
        </label>

        <div className="relative">
          <input
            id="weight"
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-14 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            kg
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={onCalculate}
        className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-700 active:scale-[0.98]"
      >
        Calculate BMI
      </button>
    </div>
  );
};
