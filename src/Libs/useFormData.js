import { useState, useEffect } from "react";

const useFormData = (key)=> {
    const [formData, setFormData] = useState(() => {
        const storedData = localStorage.getItem(key);

        return storedData ? JSON.parse(storedData) : {
            fullName: '',
            email: '',
            phone: '',
            age: '',
            city: '',
            state: '',
            address: ''
        };
    });

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(formData));
    }, [formData, key]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value,
        });
    };

    return [formData, handleChange]
}

export default useFormData;