import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",

    password: "",
    role: "",
  });
  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res.data.SUCCESS);
      if (res.data.SUCCESS) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center flex-1 px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md border border-gray-200 rounded-md p-6 sm:p-8 my-10 bg-white shadow-md"
        >
          <h1 className="font-bold text-2xl sm:text-3xl mb-6 text-center">
            Log In
          </h1>

          <div className="my-2">
            <Label className="my-2">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter Email adress"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>

          <div className="my-2">
            <Label className="my-2">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role == "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                ></Input>
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role == "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                ></Input>
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait.....
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
          )}

          <span className="text-sm text-center">
            Don't have an account?
            <Link to="/signup" className="text-blue-600">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
