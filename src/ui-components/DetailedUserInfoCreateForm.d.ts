/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DetailedUserInfoCreateFormInputValues = {
    location?: string;
    birthdate?: string;
    currentRole?: string;
    industry?: string;
};
export declare type DetailedUserInfoCreateFormValidationValues = {
    location?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    currentRole?: ValidationFunction<string>;
    industry?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetailedUserInfoCreateFormOverridesProps = {
    DetailedUserInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    currentRole?: PrimitiveOverrideProps<TextFieldProps>;
    industry?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DetailedUserInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: DetailedUserInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DetailedUserInfoCreateFormInputValues) => DetailedUserInfoCreateFormInputValues;
    onSuccess?: (fields: DetailedUserInfoCreateFormInputValues) => void;
    onError?: (fields: DetailedUserInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DetailedUserInfoCreateFormInputValues) => DetailedUserInfoCreateFormInputValues;
    onValidate?: DetailedUserInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function DetailedUserInfoCreateForm(props: DetailedUserInfoCreateFormProps): React.ReactElement;
