import { useState, useEffect } from "react";

import { BMIForm } from "./components/BMICalculator";
import { GoalTracker } from "./components/GoalTracker";
import { EntryList } from "./components/PastEntries";
import { BMIResult } from "./components/BMIResult";

import type { BMIEntry } from "./types/bmi";

const ENTRIES_KEY = "bmi-entries";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  const [currentBMI, setCurrentBMI] = useState<number | null>(null);

  const [entries, setEntries] = useState<BMIEntry[]>(() => {
    const savedEntries = localStorage.getItem(ENTRIES_KEY);

    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  useEffect(() => {
    localStorage.setItem(ENTRIES_KEY, JSON.stringify(entries));
  }, [entries]);

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
    if (!height || !weight) {
      return;
    }

    const bmi = calculateBMI();
    const category = determineCategory(bmi);

    const newEntry: BMIEntry = {
      id: crypto.randomUUID(),
      height: Number(height),
      weight: Number(weight),
      bmi: Number(bmi.toFixed(1)),
      category,
    };

    setCurrentBMI(newEntry.bmi);

    setEntries((prevEntries) => [newEntry, ...prevEntries]);
  };

  const deleteEntry = (id: string) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  const currentCategory =
    currentBMI !== null ? determineCategory(currentBMI) : null;

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            BMI Calculator
          </h1>

          <p className="mt-2 text-slate-500">
            Calculate your BMI and track your progress over time.
          </p>
        </header>

        {/* Main cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Calculator */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-5 text-xl font-semibold">Calculate your BMI</h2>

            <BMIForm
              height={height}
              weight={weight}
              setHeight={setHeight}
              setWeight={setWeight}
              onCalculate={addEntry}
            />
          </section>

          {/* Result */}
          <section className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">Your Result</h2>

            <BMIResult bmi={currentBMI} category={currentCategory} />
          </section>
        </div>

        {/* Goal */}
        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-5 text-xl font-semibold">Goal Tracker</h2>
          <GoalTracker
            currentWeight={weight}
            goalWeight={goalWeight}
            setGoalWeight={setGoalWeight}
          />
        </section>

        {/* Entries */}
        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-5 text-xl font-semibold">Past Entries</h2>

          <EntryList entries={entries} onDelete={deleteEntry} />
        </section>
      </div>
    </main>
  );
}

export default App;
