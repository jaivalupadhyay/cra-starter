/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DetailedUserInfo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfileUpdateInputValues = {
    birthdate?: string;
    location?: string;
    industry?: string;
    currentRole?: string;
};
export declare type ProfileUpdateValidationValues = {
    birthdate?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    industry?: ValidationFunction<string>;
    currentRole?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileUpdateOverridesProps = {
    ProfileUpdateGrid?: PrimitiveOverrideProps<GridProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    industry?: PrimitiveOverrideProps<TextFieldProps>;
    currentRole?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileUpdateProps = React.PropsWithChildren<{
    overrides?: ProfileUpdateOverridesProps | undefined | null;
} & {
    id?: string;
    detailedUserInfo?: DetailedUserInfo;
    onSubmit?: (fields: ProfileUpdateInputValues) => ProfileUpdateInputValues;
    onSuccess?: (fields: ProfileUpdateInputValues) => void;
    onError?: (fields: ProfileUpdateInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileUpdateInputValues) => ProfileUpdateInputValues;
    onValidate?: ProfileUpdateValidationValues;
} & React.CSSProperties>;
export default function ProfileUpdate(props: ProfileUpdateProps): React.ReactElement;
