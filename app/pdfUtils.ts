// utils/pdfUtils.ts

import { jsPDF } from 'jspdf';

export const exportToPDF = async (resumeData: {
  name: string;
  education: string;
  skill: string;
  experience: string;
  address: string;
  email: string;
  profileImage: File | null;
}) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Simulated gradient background (approximate)
  const colors = ["#add8e6", "#b9d2e5", "#c5cce3", "#d1c7e2", "#e0c1e1", "#ffb6c1"];
  const rectHeight = pageHeight / colors.length;
  colors.forEach((color, i) => {
    doc.setFillColor(color);
    doc.rect(0, i * rectHeight, pageWidth, rectHeight, "F");
  });

  // Add profile image if available
  if (resumeData.profileImage) {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const imgData = reader.result as string;
      const img = new Image();
      img.src = imgData;

      img.onload = () => {
        doc.addImage(imgData, "JPEG", 20, 20, 40, 40, undefined, "FAST");
        addTextContent();
      };
    };
    reader.readAsDataURL(resumeData.profileImage);
  } else {
    addTextContent();
  }

  // Function to add text content with custom styling
  function addTextContent() {
    doc.setFontSize(16);
    doc.setTextColor("#ffffff"); // White text color for contrast

    const fields = [
      { label: "Name", value: resumeData.name },
      { label: "Education", value: resumeData.education },
      { label: "Skills", value: resumeData.skill },
      { label: "Experiences", value: resumeData.experience },
      { label: "Address", value: resumeData.address },
      { label: "Contact", value: resumeData.email },
    ];

    let yPosition = 70; // Start below the profile image area
    fields.forEach((field) => {
      doc.setFillColor("#FF69B4"); // Pink background for fields
      doc.roundedRect(10, yPosition, pageWidth - 20, 12, 3, 3, "F"); // Rounded rectangle
      doc.setTextColor("#000000"); // Black text color for field text
      doc.text(`${field.label}: ${field.value}`, 15, yPosition + 8);
      yPosition += 20; // Space between fields
    });

    // Save the PDF
    doc.save("resume.pdf");
  }
};
