
// app/page.tsx

'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import ExportButton from '@/components/ExportButton';
import { exportToPDF } from './pdfUtils';

const HomePage: React.FC = () => {
  const [resumeData, setResumeData] = useState<{
    name: string;
    education: string;
    skill: string;
    experience: string;
    address: string;
  email: string;
    profileImage: File | null;
  }>({
    name: '',
    education: '',
    skill: '',
    experience: '',
    address: '',
    email: '',
    profileImage: null,
  });

  const handleExport = () => {
    exportToPDF(resumeData);
  };

  return (
    <div className="container mx-auto ">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResumeForm setData={setResumeData} />
        <ResumePreview {...resumeData} />
      </div>
      <ExportButton onExport={handleExport} />
    </div>
  );
};

export default HomePage;
