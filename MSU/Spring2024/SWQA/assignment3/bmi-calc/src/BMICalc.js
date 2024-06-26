import React, { useState } from 'react';
import './BMICalc.css';

function calculateBMI(weightLb, heightFt, heightIn) {
    if (weightLb && heightFt) {
        const totalHeightInches = (parseInt(heightFt) * 12) + parseInt(heightIn);
        const height = totalHeightInches / 39.37;
        const weight = weightLb / 2.205;
        const bmiValue = weight / (height * height);
        return bmiValue.toFixed(1);
    }
}

function classifyBMI(bmi) {
    if (typeof bmi !== 'number') {
        throw new TypeError('BMI must be a number');
    }
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}

function BMICalculator() {
    const [weightLb, setWeight] = useState('');
    const [heightFt, setHeightFt] = useState('');
    const [heightIn, setHeightIn] = useState('');

    const [bmi, setBMI] = useState('');
    const [bmiClass, setBMIClass] = useState('');


    const getBMI = () => {
        const bmi = calculateBMI(weightLb, heightFt, heightIn);
        setBMI(bmi);
        setBMIClass(classifyBMI(parseInt(bmi)));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        getBMI();
    };

    return (
        <div className='Calculator'>
            <h1>BMI Calculator</h1>
            <h4>Inputs must be numbers</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Weight (in lb):
                        <input
                            type="number"
                            value={weightLb}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Height (ft, inches):
                        <input
                            type="number"
                            value={heightFt}
                            onChange={(e) => setHeightFt(e.target.value)}
                        />
                        <input
                            type="number"
                            value={heightIn}
                            onChange={(e) => setHeightIn(e.target.value)}
                        />
                    </label>

                </div>
                <div>

                </div>
                <button type="submit">Calculate</button>
            </form>
            {bmi && (
                <div>
                    <h2>Your BMI is: {bmi}</h2>
                    <h3>You are: {bmiClass}</h3>
                </div>
            )}
        </div>
    );
}

export default BMICalculator;

// Export the functions so they can be tested

export { calculateBMI, classifyBMI };
