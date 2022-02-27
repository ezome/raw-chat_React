import { useSelector, useDispatch } from "react-redux";
import { ProfileForm } from "../components/profile-form";
import { toggleVisibleProfile } from "../store/profile";

export const ProfilePage = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log(state);

  return (
    <div>
      <h1>Profile Page</h1>
      <hr />

      {state.isVisibleProfile && (
        <>
          <h2>firstName: {state.firstName}</h2>
          <h2>lastName: {state.lastName}</h2>
          <h2>phone: {state.phone}</h2>
        </>
      )}

      <button onClick={() => dispatch(toggleVisibleProfile())}>
        toggleVisibleProfile
      </button>

      <ProfileForm {...state} />
    </div>
  );
};
