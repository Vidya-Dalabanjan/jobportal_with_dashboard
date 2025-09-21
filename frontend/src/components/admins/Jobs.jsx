import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useNavigate } from "react-router-dom";
import AdminJobsTable from "./AdminJobsTable";
import { useDispatch } from "react-redux";

import useGetAllAdminJobs from "@/hooks/UseGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";

const JobAdmin = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl  mx-auto my-10 ">
        <div className="items-center justify-between flex my-5">
          <Input
            className="w-fit"
            placeholder="Filter by Name,role"
            onChange={(e) => setInput(e.target.value)}
          />

          <Button onClick={() => navigate("/admin/jobs/create")}>
            New Jobs
          </Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default JobAdmin;
