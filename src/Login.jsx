import "./loginStyle.css";
import { useGlobalContext } from "./contex";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { data } = useGlobalContext();
  const { check, Page, setPage, setCurrentUser } = useGlobalContext();
  // const [ShowError, SetShowError] = useState(false);

  // console.log(check(["name 1", "1"], data));

  const handleSubmit = (event) => {
    // Prevent the form from submitting normally
    event.preventDefault();
    // Create a FormData instance from the form
    const formData = new FormData(event.currentTarget);

    const userName = formData.get("name"); // Assuming the name input has the name attribute set to "name"
    const userPassword = formData.get("password"); // Assuming the password input has the name attribute set to "password"
    const result = check([userName, userPassword], data);
    if (result.length === 0) {
      toast.error("your login failed!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setCurrentUser(result);
      setPage(1);
      if (result[0].previllage) {
        setPage(2);
      }
    }

    // Log the retrieved values
    //    console.log(`Username: ${userName}, Password: ${userPassword}`);
  };

  return (
    <>
      <ToastContainer />
      <article className="loginScreen">
        <div className="corner"></div>
        <h1 className="animate__heartBeat">Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" id="id" name="name" placeholder="name" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <input type="submit" value="Submit" />{" "}
          {/* Added value attribute for clarity */}
        </form>
      </article>
    </>
  );
};

export default Login;
