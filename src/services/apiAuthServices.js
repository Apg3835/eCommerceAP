import { toast } from "react-toastify";

class apiAuthServices {
  static getInstance() {
    return new apiAuthServices();
  }
  signup = async (credentials) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDo5wRtMz9nhTyZg0arChf2zPpLVhtOiAs",
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      toast.success("Account Created. Go to Log in Page To continue");
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      let errorMessage = "Sign Up Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };
  login = async (credentials) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDo5wRtMz9nhTyZg0arChf2zPpLVhtOiAs",
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      toast.success("Log in Success");
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      let errorMessage = "Authentication Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };
  getUserProfile = async () => {
    // console.log("Heelo world");
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDo5wRtMz9nhTyZg0arChf2zPpLVhtOiAs",
      {
        method: "POST",
        body: JSON.stringify({ idToken }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      // console.log(response);
      //   toast.success("Got data Successfully");
      const data = await response.json();
      return data;
    } else return;
  };

  updateProfile = async (credentials) => {
    // console.log("3,inServices", credentials);
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDo5wRtMz9nhTyZg0arChf2zPpLVhtOiAs",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          displayName: credentials.name,
          photoUrl: credentials.photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success("Your profile is Updated");
      // console.log("4", data);
      return data;
    }
    {
      const data = await response.json();
      let errorMessage = "Authentication Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };

  forgotPassword = async (credentials) => {
    // console.log("3,inServices", credentials);
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDo5wRtMz9nhTyZg0arChf2zPpLVhtOiAs",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: credentials.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success("Password reset link is sent to your mail.");
      // console.log("4", data);
      return data;
    }
    {
      const data = await response.json();
      let errorMessage = "Authentication Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };
}

export const apiAuthService = apiAuthServices.getInstance();
