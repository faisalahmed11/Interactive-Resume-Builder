const downloadBtn: any = document.getElementById("download-pdf");
const resumeContent = document.getElementById("resume-content"); // Replace with your actual content container

downloadBtn.addEventListener("click", () => {
  const doc = new jsPDF();

  // Add the resume content to the PDF
  doc.fromHTML(resumeContent, 15, 15);

  // Save the PDF
  doc.save("my-resume.pdf");
});
