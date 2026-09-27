type BMIResultProps = {
  bmi: number | null;
  category: string | null;
};

export const BMIResult = ({ bmi, category }: BMIResultProps) => {
  return (
    <div>
      <p>
        Your BMI is: <span>{bmi ?? "-"}</span>
      </p>

      <p>{category ?? "Calculate your BMI"}</p>
    </div>
  );
};
