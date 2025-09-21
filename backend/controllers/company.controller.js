import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "company name is required.",
        SUCCESS: false,
      });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "you cant register same company.",
        SUCCESS: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(201).json({
      message: "company registeres successfully.",
      company,
      SUCCESS: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCompany = async (req, res) => {
  try {
    const userId = req.id; //logged in userid
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "companies not found.",

        SUCCESS: false,
      });
    }
    return res.status(200).json({
      message: "companies fetched successfully.",
      companies,
      SUCCESS: true,
    });
  } catch (error) {
    console.log(error);
  }
};
//get comapny by id

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "company not found.",

        SUCCESS: false,
      });
    }
    return res.status(200).json({
      company,
      SUCCESS: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    //here   cloudinary
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url;
    const updateData = { name, description, website, location, logo };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({
        message: "company not found.",

        SUCCESS: false,
      });
    }
    return res.status(200).json({
      message: "company information updated.",

      SUCCESS: true,
    });
  } catch (error) {
    console.log(error);
  }
};
