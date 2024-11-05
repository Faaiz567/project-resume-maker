'use client';
import React from 'react';

interface ExportButtonProps {
  onExport: () => void;
}

const ExportButton: React.FC<ExportButtonProps> = ({ onExport }) => (
  <button onClick={onExport} className="mt-4 ml-48 mb-5 text-white p-2 rounded hover:font-semibold bg-gradient-to-r from-emerald-500 to-emerald-900">
    Export as PDF/Image
  </button>
);

export default ExportButton;
