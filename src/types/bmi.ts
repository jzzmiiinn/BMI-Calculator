export type BMIEntry = {
  id: string;
  height: number;
  weight: number;
  bmi: number;
  category: string;
};

export type BMICategory = "Underweight" | "Normal" | "Overweight" | "Obese";
