'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
  onImageChange: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      onImageChange(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Profile Image</label>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {imagePreview && <Image src={imagePreview} alt="Profile Preview" className="mt-2 w-24 h-24 rounded-full " />}
    </div>
  );
};

export default ImageUploader;
