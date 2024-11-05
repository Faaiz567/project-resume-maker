// components/ResumeForm.tsx

"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import ImageUploader from "./ImageUploader";

interface ResumeFormProps {
  setData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      education: string;
      skill: string;
      experience: string;
      address: string;
      email: string;
      profileImage: File | null;
    }>
  >;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ setData }) => {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [skill, setskill] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleSave = () => {
    setData({
      name,
      education,
      skill,
      address,
      email,
      experience,
      profileImage,
    });
  };

  return (
    <div className="p-4">
      <InputField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="Education"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <InputField
        label="Skills"
        value={skill}
        onChange={(e) => setskill(e.target.value)}
      />
      <InputField
        label="Experiences"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <InputField
        label="Address"
        value={address}
        onChange={(e) => setaddress(e.target.value)}
      />
      <InputField
        label="Email or Phone"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <ImageUploader onImageChange={setProfileImage} />

      <button
        onClick={handleSave}
        className="mt-4  text-white p-2 rounded bg-gradient-to-t from-teal-700 to-lime-500 hover:font-bold hover:text-lime-700 " >
        Save Data
      </button>
    </div>
  );
};

export default ResumeForm;
