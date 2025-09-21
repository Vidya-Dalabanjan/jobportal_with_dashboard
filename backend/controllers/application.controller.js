import dotenv from "dotenv";
import Application from "../models/application.model.js";
import { Job } from "../models/job.model.js";
dotenv.config();
export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required.",
        SUCCESS: false,
      });
    }
    //check if the user had already applied for job or nor

    const existingApplication = await Application.findOne({
      job: jobId,
      applicants: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "you have already applied",
        SUCCESS: false,
      });
    }
    //check if the job exist or not
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        SUCCESS: false,
      });
    }
    //create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicants: userId,
    });
    job.application.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message: "Job applied successfully",
      SUCCESS: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", SUCCESS: false });
  }
};
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicants: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        select: "title company",
        populate: {
          path: "company",
          select: "name",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res.status(404).json({
        message: "no application",
        SUCCESS: false,
      });
    }
    return res.status(200).json({
      application,
      SUCCESS: true,
    });
  } catch (error) {
    console.log(error);
  }
};
//admin see how many users applies
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicants",
        select: "fullName email phoneNumber profile",
      },
    });
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        SUCCESS: false,
      });
    }
    return res.status(200).json({
      job,
      SUCCESS: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", SUCCESS: false });
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        message: "status is required",
        SUCCESS: false,
      });
    }
    //find the application by applicantion id
    const application = await Application.findOne({ _id: applicationId });
    if (application.length === 0) {
      return res.status(404).json({
        message: "No applications found",
        SUCCESS: false,
      });
    }
    //update status
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      message: "status updated successfully",
      SUCCESS: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", SUCCESS: false });
  }
};
