import { useState } from "react";


export const useForm = (initialForm = {}) => {



    const [fromState, setfromState] = useState(initialForm)

    const { username, email, password } = fromState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setfromState({
            ...fromState,
            [name]: value
        })

    }

    const onResetForm = () => {

        setfromState(initialForm)


    }


    return {...fromState,
        fromState,
        onInputChange,
        onResetForm,
    }

}