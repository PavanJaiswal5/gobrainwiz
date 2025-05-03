import { Routes, Route, Navigate } from "react-router"
import UserLayout from "./layouts/UserLayout"
import Home from "./ui/Home"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./ui/Login"
import Register from "./ui/Register"
import ForgotPassword from "./ui/ForgotPassword"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./ui/Dashboard"
import Attendance from "./ui/Attendance"
import Certifications from "./ui/Certifications"
import UploadQuestion from "./ui/UploadQuestion"
import Profile from "./ui/Profile"
import LiveSessions from "./ui/LiveSessions"
import Courses from "./ui/Courses"
import DownloadPdfs from "./ui/DownloadPdfs"
import DailyPuzzles from "./ui/DailyPuzzles"
import PracticeAssignedTests from "./ui/PracticeAssignedTests"
import PracticeCompletedTests from "./ui/PracticeCompletedTests"
import SeriesAssignedTests from "./ui/SeriesAssignedTests"
import SeriesCompletedTests from "./ui/SeriesCompletedTests"
import ChangePassword from "./ui/ChangePassword"
import About from "./ui/About"
import Signup from "./ui/Signup"

function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="account" element={<DashboardLayout />}>
      <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="upload-question" element={<UploadQuestion />} />
        <Route path="profile" element={<Profile />} />
        <Route path="live-sessions" element={<LiveSessions />} />
        <Route path="courses" element={<Courses />} />
        <Route path="download-pdfs" element={<DownloadPdfs />} />
        <Route path="daily-puzzles" element={<DailyPuzzles />} />
        <Route path="practice-assigned-tests" element={<PracticeAssignedTests />} />
        <Route path="practice-completed-tests" element={<PracticeCompletedTests />} />
        <Route path="series-assigned-tests" element={<SeriesAssignedTests />} />
        <Route path="series-completed-tests" element={<SeriesCompletedTests />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
    </Routes>
  )
}
export default App
