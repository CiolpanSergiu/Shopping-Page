import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormButton from "../Miscellaneous/AccountPage/FormButton";
import CenteredSmallSpan from "../Miscellaneous/AccountPage/CenteredSmallSpan";
import ObligatoryStar from "../Miscellaneous/AccountPage/ObligatoryStar";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
  padding: 2rem 4rem;
  color: ${(props) => props.theme.color};
  border-radius: 9px;
  margin: 3rem 0;
`;

const Header = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0 2rem 0;
`;

const StyledErrorMessage = styled.div`
  color: #e36f75;
  padding: 0.25rem 0 0.5rem 0;
  font-size: 0.8rem;
  max-width: 15rem;
`;

const StyledField = styled(Field)`
  padding: 0.5rem;
  font-size: 1.1rem;
  border-radius: 5px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const darkTheme = {
  bgColor: "#3d4552",
  color: "white",
};

const lightTheme = {
  bgColor: "white",
  color: "#3d4552",
};

type ValuesObj = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues: ValuesObj = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = () => {};

const validationSchema = Yup.object({
  fullName: Yup.string().required("This field is required !"),
  email: Yup.string()
    .email("Invalid email formal")
    .required("This field is required !"),
  password: Yup.string()
    .required("This field is required !")
    .min(6, "Password is too short !")
    .max(20, "Password is too long !"),
});

export default function LoginForm() {
  const { isDark }: any = useContext(ThemeContext);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <Header>Login</Header>

          <Label htmlFor="email">
            Email
            <ObligatoryStar />
          </Label>
          <StyledField
            type="email"
            id="email"
            name="email"
            placeholder="your.email@gmail.com"
          />
          <StyledErrorMessage>
            <ErrorMessage name="email" />
          </StyledErrorMessage>

          <Label htmlFor="password">
            Password
            <ObligatoryStar />
          </Label>
          <StyledField
            type="password"
            id="password"
            name="password"
            placeholder="SupeRstrOngPass4763"
          />
          <StyledErrorMessage>
            <ErrorMessage name="password" />
          </StyledErrorMessage>

          <FormButton buttonOrder="first" buttonText="Login" />

          <CenteredSmallSpan text="Don't have an account?" />
          <Link to="/singin">
            <FormButton buttonOrder="second" buttonText="Singin" />
          </Link>
        </StyledForm>
      </Formik>
    </ThemeProvider>
  );
}
