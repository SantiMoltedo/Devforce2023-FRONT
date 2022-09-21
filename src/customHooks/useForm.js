import {
    useState
} from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setfromState] = useState(initialForm)

    const {
        username,
        password
    } = formState;
    const onInputChange = ({
        target
    }) => {
        const {
            name,
            value
        } = target;

        setfromState({
            ...formState,
            [name]: value
        })
    }
    return {
        ...formState,
        formState,
        onInputChange,
    }

}