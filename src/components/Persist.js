import { useState, useEffect, useCallback } from "react";

function persistItem(key, value) {
    localStorage.setItem(key, value);
    return value;
}

// Preference stored in local storage
function usePersistState(key, initialValue = '') {
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? storedValue : initialValue;
    });

    // Updates the state and stores it by local storage
    const setStateAndPersist = useCallback(
        (newState) => {
            setState(newState);
            return persistItem(key, newState);
        },
        [key]
    );

    // The use effect to update the state change (dark/light)
    useEffect(() => {
        document.body.className = state;
    }, [state]);

    return [state, setStateAndPersist];
}

export default usePersistState;

