/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { DetailedUserInfo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProfileUpdate(props) {
  const {
    id: idProp,
    detailedUserInfo,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    birthdate: "",
    location: "",
    industry: "",
    currentRole: "",
  };
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [location, setLocation] = React.useState(initialValues.location);
  const [industry, setIndustry] = React.useState(initialValues.industry);
  const [currentRole, setCurrentRole] = React.useState(
    initialValues.currentRole
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = detailedUserInfoRecord
      ? { ...initialValues, ...detailedUserInfoRecord }
      : initialValues;
    setBirthdate(cleanValues.birthdate);
    setLocation(cleanValues.location);
    setIndustry(cleanValues.industry);
    setCurrentRole(cleanValues.currentRole);
    setErrors({});
  };
  const [detailedUserInfoRecord, setDetailedUserInfoRecord] =
    React.useState(detailedUserInfo);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(DetailedUserInfo, idProp)
        : detailedUserInfo;
      setDetailedUserInfoRecord(record);
    };
    queryData();
  }, [idProp, detailedUserInfo]);
  React.useEffect(resetStateValues, [detailedUserInfoRecord]);
  const validations = {
    birthdate: [],
    location: [],
    industry: [],
    currentRole: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          birthdate,
          location,
          industry,
          currentRole,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            DetailedUserInfo.copyOf(detailedUserInfoRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProfileUpdate")}
      {...rest}
    >
      <TextField
        label="Birthdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birthdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              birthdate: value,
              location,
              industry,
              currentRole,
            };
            const result = onChange(modelFields);
            value = result?.birthdate ?? value;
          }
          if (errors.birthdate?.hasError) {
            runValidationTasks("birthdate", value);
          }
          setBirthdate(value);
        }}
        onBlur={() => runValidationTasks("birthdate", birthdate)}
        errorMessage={errors.birthdate?.errorMessage}
        hasError={errors.birthdate?.hasError}
        {...getOverrideProps(overrides, "birthdate")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              birthdate,
              location: value,
              industry,
              currentRole,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Industry"
        isRequired={false}
        isReadOnly={false}
        value={industry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              birthdate,
              location,
              industry: value,
              currentRole,
            };
            const result = onChange(modelFields);
            value = result?.industry ?? value;
          }
          if (errors.industry?.hasError) {
            runValidationTasks("industry", value);
          }
          setIndustry(value);
        }}
        onBlur={() => runValidationTasks("industry", industry)}
        errorMessage={errors.industry?.errorMessage}
        hasError={errors.industry?.hasError}
        {...getOverrideProps(overrides, "industry")}
      ></TextField>
      <TextField
        label="Current role"
        isRequired={false}
        isReadOnly={false}
        value={currentRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              birthdate,
              location,
              industry,
              currentRole: value,
            };
            const result = onChange(modelFields);
            value = result?.currentRole ?? value;
          }
          if (errors.currentRole?.hasError) {
            runValidationTasks("currentRole", value);
          }
          setCurrentRole(value);
        }}
        onBlur={() => runValidationTasks("currentRole", currentRole)}
        errorMessage={errors.currentRole?.errorMessage}
        hasError={errors.currentRole?.hasError}
        {...getOverrideProps(overrides, "currentRole")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || detailedUserInfo)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || detailedUserInfo) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
