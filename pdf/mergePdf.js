const { PDFDocument } = require('pdf-lib');
const fs = require('fs').promises;
const path = require('path');

async function mergePDFs(inputPath1, inputPath2, outputPath) {
  try {
    // Load the PDF documents
    const pdfDoc1 = await PDFDocument.load(await fs.readFile(inputPath1));
    const pdfDoc2 = await PDFDocument.load(await fs.readFile(inputPath2));

    // Create a new PDF document to merge into
    const mergedPdf = await PDFDocument.create();

    // Add pages from the first document
    const pages1 = await mergedPdf.copyPages(pdfDoc1, pdfDoc1.getPageIndices());
    pages1.forEach((page) => mergedPdf.addPage(page));

    // Add pages from the second document
    const pages2 = await mergedPdf.copyPages(pdfDoc2, pdfDoc2.getPageIndices());
    pages2.forEach((page) => mergedPdf.addPage(page));

    // Save the merged PDF to a file
    const mergedPdfBytes = await mergedPdf.save();
    await fs.writeFile(outputPath, mergedPdfBytes);

    console.log(`Merged PDF saved to ${outputPath}`);
  } catch (error) {
    console.error(`Error merging PDFs: ${error.message}`);
  }
}

// Usage example with absolute paths
const inputPath1 = path.join(__dirname, 'invoice1.pdf');
const inputPath2 = path.join(__dirname, 'invoice2.pdf');
const outputPath = path.join(__dirname, 'merged.pdf');

mergePDFs(inputPath1, inputPath2, outputPath);

