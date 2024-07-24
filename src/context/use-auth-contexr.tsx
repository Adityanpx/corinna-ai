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
    
}