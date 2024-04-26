import "./App.css";
import "./styles/global.scss";
import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import{userInputs, productInputs} from "./formData";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const SignUpLayout = React.lazy(() => import("./scenes/SignUpPage/Signup"));
const SignUpConfirmation = React.lazy(() =>
  import("./scenes/SignUpPage/SignUpConfirmation")
);
const LoginLayout = React.lazy(() => import("./scenes/LoginPage/Login"));
const ForgotPasswordLayout = React.lazy(() =>
  import("./scenes/ForgotPasswordPage/ForgotPassword")
);
const FrgtPassVerificationLayout = React.lazy(() =>
  import("./scenes/ForgotPasswordPage/ForgotPasswordVerification")
);
const SetNewPasswordLayout = React.lazy(() =>
  import("./scenes/ForgotPasswordPage/SetNewPassword")
);
const SuccessfullySavedPassLayout = React.lazy(() =>
  import("./scenes/ForgotPasswordPage/SuccessfullySavedPassword")
);
const DashBoardPage = React.lazy(() => import("./scenes/Dashboard/Dashboard"));
const List = React.lazy(() => import("./scenes/list/list"));
const Single = React.lazy(() => import("./scenes/single/single"));
const New = React.lazy(() => import("./scenes/new/New"));
class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/">
              <Route index element={<SignUpLayout />} />
              <Route path="login" element={<LoginLayout />} />
              <Route
                path="forgotPassword"
                element={<ForgotPasswordLayout />}
              ></Route>
              <Route
                path="passwordVerification"
                element={<FrgtPassVerificationLayout />}
              ></Route>
              <Route
                path="setNewPassword"
                element={<SetNewPasswordLayout />}
              ></Route>
              <Route
                path="successfullySavedPassword"
                element={<SuccessfullySavedPassLayout />}
              ></Route>
              <Route
                path="SignUpConfirmation"
                element={<SignUpConfirmation />}
              ></Route>
              <Route path="DashBoardPage" element={<DashBoardPage />}></Route>
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New inputs = {productInputs} title="Add New Product"/>} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    );
  }
}

export default App;
