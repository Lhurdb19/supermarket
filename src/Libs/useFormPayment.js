import { useState, useEffect } from "react";

const usePaymentForm = (key) => {
    const [paymentForm, setPaymentForm] = useState(()=> {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : {
            bankName: '',
            creditCard: '',
            cvv: '',
            expireDate: '',
        };
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(paymentForm));
    }, [paymentForm, key]);

    const handlePaymentChange = (e)=> {
        const {name, value} = e.target;
        setPaymentForm({
            ...paymentForm,
            [name] : value,
        });
    };

    return [paymentForm, handlePaymentChange];
};

export default usePaymentForm;