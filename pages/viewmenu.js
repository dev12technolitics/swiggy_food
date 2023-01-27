import { ErrorMessage } from "@hookform/error-message";
import { Button, Grid, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { postContactEnquiry } from "../../redux/slices/contact";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { FormProvider } from "../components/hook-form";

export default function ViewMenuform() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [contactNo, setContactNo] = useState("");
  //   const { isLoading } = useSelector((state) => state.contact);

  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const defaultValues = {
    your_name: "",
    contect_no: "",
    dob: "",
  };

  const methods = useForm({
    defaultValues,
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const payload = {
        your_name: data?.your_name,
        contect_no: data?.contect_no,
        dob: data?.dob,
      };
      //   dispatch(postContactEnquiry(payload, toast, reset));
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="container pt-[50px]">
          <FormProvider onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <TextField
                  fullWidth
                  label="Name"
                  id="outlined-size-normal"
                  name="your_name"
                  placeholder="Name"
                  {...register("your_name", {
                    required: "Name is required*",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="your_name"
                  render={({ message }) => (
                    <p className="text-[red] mt-2 text-sm">{message}</p>
                  )}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={12} sm={12}>
                <TextField
                  fullWidth
                  label="Contact No."
                  type="text"
                  id="outlined-size-normal"
                  name="contect_no"
                  placeholder="Contact No."
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) {
                      return;
                    } else {
                      setContactNo(e.target.value);
                    }
                  }}
                  {...register("contect_no", {
                    required: "Contact is required*",
                    minLength: {
                      value: 10,
                      message: "Minimum length 10 digits",
                    },
                    maxLength: {
                      value: 10,
                      message: "Maximum length 10 digits",
                    },
                    pattern: {
                      value: /^[0-9]{10}$/i,
                      message: "Invalid phone number",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="contect_no"
                  render={({ message }) => (
                    <p className="text-[red] mt-2 text-sm">{message}</p>
                  )}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={12} sm={12} className="boeder-2">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Date mobile"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    className="border-2"
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ mt: 5 }}
                  justifyContent="center"
                >
                  <Button
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    className="bg-[#0e2025]"
                  >
                    {/* {isLoading ? 'button' : 'submit'} */} View Menu
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
