import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from './features/users'
import useTheme from './features/theme';
import ColorChange from "./components/ColorChange";

const store = configureStore({
  reducer: {
    user2:userReducer,
    theme: useTheme
  },
});
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Profile />
        <Login />
        <ColorChange/>
      </Provider>
    </div>
  );
}

export default App;
