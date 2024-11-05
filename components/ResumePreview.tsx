// components/ResumePreview.tsx
import Image from 'next/image';
interface ResumePreviewProps {
    name: string;
    education: string;
    skill: string;
    experience: string;
    address: string;
    email: string;
    profileImage: File | null; // Update to accept File | null
  }
  
  const ResumePreview: React.FC<ResumePreviewProps> = ({
    name,
    education,
    skill,
    address,
    email,
    experience,
    profileImage,
  }) => {
    return (
      <div className="p-4 border rounded bg-gradient-to-r from-blue-200 to-cyan-200">
        <div className=" w-full h-40 flex items-center justify-items-start rounded-xl bg-gradient-to-r from-rose-400 to-teal-200">
          {profileImage && (
            <Image
              src={URL.createObjectURL(profileImage)}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-md ml-5 "
            />
          )}
        </div>
        <div className="mt-4 rounded-full bg-gradient-to-r from-rose-400 to-teal-200">
          <h2 className="pl-4 text-lg"> Name: {name}</h2>
        </div>
  
        <div className=" pl-4 text-lg mt-4 rounded-full bg-gradient-to-r from-rose-400 to-teal-200">
          <p>Education: {education}</p>
        </div>
  
        <div className=" pl-4 text-lg mt-4 rounded-full bg-gradient-to-r from-rose-400 to-teal-200">
          <p>Skills: {skill}</p>
        </div>
  
        <div className="pl-4 text-lg mt-4 rounded-full bg-gradient-to-r from-rose-400 to-teal-200">
          <p>Experiences: {experience}</p>
        </div>
  
        <div className=" pl-4 text-lg mt-4 rounded-full bg-gradient-to-r from-rose-400 to-teal-200">
          <p>Address: {address}</p>
        </div>
  
        <div className=" pl-4 text-lg mt-4 rounded-full bg-gradient-to-r from-rose-400 to-teal-200">
          <p>Contact: {email}</p>
        </div>
      </div>
    );
  };
  
  export default ResumePreview;
  