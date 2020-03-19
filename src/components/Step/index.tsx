import React, { useContext, useEffect, useRef } from 'react';
import { StepsContext } from '../Steps/StepsContext';

import './styles.css';

const Step: React.FC = ({ children }) => {
    const stepRef = useRef<HTMLDivElement>(null);
    const { registerStep } = useContext(StepsContext);

    useEffect(() => {
        if (stepRef.current)
            registerStep('teste', stepRef);
    }, [registerStep]);

    return (
        <div className="step-container" ref={stepRef}>
            <div>
                <h4>Step</h4>
                {children}
            </div>
        </div>
    );
}

export default Step;