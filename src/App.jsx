import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Dashboard from "./pages/user/Dashboard";
import CreateSendFlyer from "./pages/user/CreateSendFlyer";
import MySchedule from "./pages/user/MySchedule";
import TargetedAudience from "./pages/user/MyTargetedAudience";
import MyTargetedAudience from "./pages/user/MyTargetedAudience";
import MySavedWork from "./pages/user/MySavedWork";
import ClarisonRESupport from "./pages/user/ClarisonRESupport";
import AccountSetting from "./pages/user/AccountSetting";
import UpdateMySchedule from "./pages/user/UpdateMySchedule";

const App = () => {
  return (
    <>
      <Routes>
        {/* User Routes Start  */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-send-flyer" element={<CreateSendFlyer />} />
          <Route path="my-schedule-flyer" element={<MySchedule />} />
          <Route path="my-targeted-audience" element={<MyTargetedAudience />} />
          <Route path="my-saved-work" element={<MySavedWork />} />
          <Route path="clarison-support" element={<ClarisonRESupport />} />
          <Route path="account-setting" element={<AccountSetting />} />

          {/* UpdateMySchedule Route */}
          <Route
            path="my-schedule-flyer/update"
            element={<UpdateMySchedule />}
          />
        </Route>

        {/* User Routes End  */}
      </Routes>
    </>
  );
};

export default App;
