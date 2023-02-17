/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserInfoCreateFormInputValues = {
    name?: string;
    email?: string;
    gender?: string;
};
export declare type UserInfoCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserInfoCreateFormOverridesProps = {
    UserInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type UserInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: UserInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserInfoCreateFormInputValues) => UserInfoCreateFormInputValues;
    onSuccess?: (fields: UserInfoCreateFormInputValues) => void;
    onError?: (fields: UserInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserInfoCreateFormInputValues) => UserInfoCreateFormInputValues;
    onValidate?: UserInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserInfoCreateForm(props: UserInfoCreateFormProps): React.ReactElement;
