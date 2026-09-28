type BMIResultProps = {
  bmi: number | null;
  category: string | null;
};

export const BMIResult = ({ bmi, category }: BMIResultProps) => {
  return (
    <div className="flex min-h-[230px] flex-col items-center justify-center text-center">
      <p className="text-sm text-slate-400">Your BMI</p>

      <p className="mt-2 text-6xl font-bold tracking-tight">{bmi ?? "--"}</p>

      <div className="mt-4 rounded-full bg-white/10 px-4 py-2">
        <p className="text-sm font-medium">
          {category ?? "Calculate your BMI"}
        </p>
      </div>
    </div>
  );
};
