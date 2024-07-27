import SignUpFormProvider from '@/components/forms/sign-up/form-provider';
import React, {Children, useState} from 'react';

type InitialValuesProps = {
    currentStep: number
    setCurrentStep: React.Dispatch<React.SetStateAction<nuber>>

}

const InitialValues: InitialValuesProps ={
    currentStep:1,
    setCurrentStep: () => undefined,

}

const authContext = React.createContext(InitialValues)

const {provider} = authContext

export const AuthContextProvider = ({
    Children,
}:{
    children: React.ReactNode
}) => {
    const [currentStep, setCurrentstep] = useState<number>(
        InitialValues.currentStep
    )
    const values = {
        currentStep,setCurrentstep,
    }
    return <provider value={values} > {Children} </provider>

}

export const useAuthContextHook = () => {
    const state = React.useContext(authContext)
    return state
}

export default SignUpFormProvider