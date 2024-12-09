// src/hooks/useSubmitForm.js

import { useState } from "react";
import axios from "axios";

const useSubmitForm = ()=> {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const submitForm = async (form) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('https://getform.io/f/aqooqwpa', form, {
                headers: {
                    'Content-type' : 'application/json'
                }
            });
            if (response.status === 200) {
                return {success: true};
            } else {
                throw new Error ('Request failed');
            }
        } catch (err) {
            setError(err.message || 'Something went wrong');
            return { success: false, error: err.message};
        } finally {
            setIsLoading(false);
        }
    };

    return {submitForm, isLoading, error};
}

export default useSubmitForm;