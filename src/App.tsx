import { useState } from "react";
import { BMIForm } from "./components/BMICalculator";
import { GoalTracker } from "./components/GoalTracker";
import { EntryList } from "./components/PastEntries";
import type { BMIEntry } from "./types/bmi";
import { BMIResult } from "./components/BMIResult";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  const [currentBMI, setCurrentBMI] = useState<number | null>(null);

  const [entries, setEntries] = useState<BMIEntry[]>([]);

  const calculateBMI = (): number => {
    const heightInMeters = Number(height) / 100;
    const weightInKg = Number(weight);
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    return bmi;
  };

  const determineCategory = (bmi: number): string => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 25) {
      return "Normal";
    } else if (bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const addEntry = () => {
    const bmi = calculateBMI();
    const category = determineCategory(bmi);

    // create entry here
  };

  const deleteEntry = (id: string) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  return (
    <>
      <BMIForm onCalculate={calculateBMI} />
      <BMIResult />
      <GoalTracker />
      <EntryList />
    </>
  );
}

export default App;
