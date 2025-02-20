import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";

const SubjectForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

  // Validation Schema using Yup
  const schema = yup.object().shape({
    subjectName: yup.string().required("Subject Name is required"),
    selectClass: yup.string().required("Class selection is required"),
    subjectSequence: yup
      .number()
      .typeError("Sequence must be a number")
      .required("Subject Sequence is required")
      .min(1, "Sequence must be at least 1"),
    subjectJustForGrade: yup.boolean(),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      subjectName: "",
      selectClass: "",
      subjectSequence: "",
      subjectJustForGrade: false,
    },
  });

  // Prefill form if editing
  useEffect(() => {
    if (location.state?.editData) {
      const editData = location.state.editData;
      setValue("subjectName", editData.subjectName);
      setValue("selectClass", editData.selectClass);
      setValue("subjectSequence", editData.subjectSequence);
      setValue("subjectJustForGrade", editData.subjectJustForGrade);
    }
  }, [location, setValue]);

  // Submit handler
  const onSubmit = async (data) => {
    try {
      if (location.state?.editData) {
        const { _id } = location.state.editData;
        const result = await axios.put(
          `${backendBaseUrl}/subject/updateMasterRecord/${_id}`,
          data
        );
        if (result.data.status === 200) {
          toast.success("Record updated successfully");
          navigate("/admin/subjects", {
            state: { successMessage: "Record updated successfully" },
          });
        } else {
          toast.error(result.data.message);
        }
      } else {
        const result = await axios.post(`${backendBaseUrl}/subject/addSubmit`, data);
        if (result.data.status === 200) {
          toast.success("Subject added successfully");
        } else {
          toast.error(result.data.message);
        }
      }
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>{location.state?.editData ? "Edit Subject" : "Add Subject"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Subject Name:</label>
          <input {...register("subjectName")} />
          {errors.subjectName && <p>{errors.subjectName.message}</p>}
        </div>

        <div>
          <label>Select Class:</label>
          <input {...register("selectClass")} />
          {errors.selectClass && <p>{errors.selectClass.message}</p>}
        </div>

        <div>
          <label>Subject Sequence:</label>
          <input type="number" {...register("subjectSequence")} />
          {errors.subjectSequence && <p>{errors.subjectSequence.message}</p>}
        </div>

        <div>
          <label>
            <input type="checkbox" {...register("subjectJustForGrade")} />
            Subject Just for Grade
          </label>
        </div>

        <button type="submit">
          {location.state?.editData ? "Update Subject" : "Add Subject"}
        </button>
      </form>
    </div>
  );
};

export default SubjectForm;
