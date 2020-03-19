import React, { useState, useCallback, useEffect } from 'react';

import './styles.css';

import { StepsContext } from './StepsContext';

interface Step {
    name: string,
    ref: React.RefObject<HTMLDivElement>,
}

const Steps: React.FC = ({ children }) => {
    const [steps, setSteps] = useState<Step[]>([]);
    const [currentStep, setCurrentStep] = useState<number>(1);

    const registerStep = useCallback((name: string, ref: React.RefObject<HTMLDivElement>) => {
        setSteps(oldSteps => [...oldSteps, { name, ref }]);
    }, []);

    function nextStep() {
        setSteps(oldSteps => {
            oldSteps.forEach((step, index) => {
                if (step.ref.current) {
                    if (index === currentStep)
                        step.ref.current.style.display = 'none';
                    if (index === currentStep + 1) {
                        step.ref.current.style.display = 'block';
                        setCurrentStep(index);
                    }
                    if (currentStep + 1 === oldSteps.length && index === 0) {
                        step.ref.current.style.display = 'block';
                        setCurrentStep(index);
                    }
                }
            });

            return oldSteps;
        });
    }

    useEffect(() => {
        setSteps(oldSteps => {
            oldSteps.forEach((step, index) => {
                if (step.ref.current) {
                    if (index > 0)
                        step.ref.current.style.display = 'none';
                    else
                        setCurrentStep(0);
                }
            });

            return oldSteps;
        });
    }, []);

    return (
        <div className="steps-container">
            <div className="steps-indicator">
                {
                    steps.map((step, index) => (
                        <span key={index} className={index === currentStep ? 'current' : 'not-current'}>{index + 1}</span>
                    ))
                }
            </div>
            <StepsContext.Provider value={{ registerStep }}>
                {children}
            </StepsContext.Provider>

            <button type="button" onClick={nextStep}>Next</button>
        </div>
    )
}

export default Steps;