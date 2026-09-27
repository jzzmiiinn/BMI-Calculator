type GoalTrackerProps = {
  goalWeight: string;
  setGoalWeight: (value: string) => void;
};

export const GoalTracker = ({
  goalWeight,
  setGoalWeight,
}: GoalTrackerProps) => {
  <div>
    <label htmlFor="goalWeight">Goal Weight: </label>
    <input
      type="number"
      value={goalWeight}
      onChange={(event) => setGoalWeight(event.target.value)}
    />
  </div>;
};
