import { useState, useEffect } from "react";

const useFormLocation = (key)=> {
    const [locationForm, setLocationForm] = useState( ()=> {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : {
            full_name: '',
            email_address: '',
            phone_number: '',
            location: '',
            itemsWeight: '',
            quantity: '',
        };
    });

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(locationForm));
    }, [locationForm, key]);

    const handleLocationChange = (e) => {
        const {name, value} = e.target;
        setLocationForm({
            ...locationForm,
            [name] : value,
        });
    };

    return [locationForm, handleLocationChange];
}

export default useFormLocation;