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
    <>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight: </label>
        <input
          type="number"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </div>
      <button onClick={onCalculate}>Calculate BMI</button>
    </>
  );
};
