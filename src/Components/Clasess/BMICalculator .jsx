import { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      determineStatus(bmiValue);
    }
  };

  const determineStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus('Overweight');
    } else {
      setStatus('Obese');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">BMI Tracker: Know Your Health</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="w-full bg-gradient-to-r from-[#ec4554] to-[#f36a39] text-white font-bold py-2 px-4 rounded-lg "
      >
        Calculate BMI
      </button>
      {bmi && (
        <div className="mt-6 text-center">
          <p className="text-lg">Your BMI: <span className="font-bold">{bmi}</span></p>
          <p className="text-lg">Status: <span className="font-bold">{status}</span></p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
