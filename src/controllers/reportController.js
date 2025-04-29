const PDFDocument = require("pdfkit");

const cosmeticoModel = require("../models/cosmeticoModel");



const exportcosmeticoPDF = async (req, res) => {
try {
    const cosmeticos = await cosmeticoModel.getCosmeticos();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=cosmeticos.pdf");

    const doc = new PDFDocument();
    doc.pipe(res);
//title
    doc.fontSize(20).text("Relatório dos cosmeticos", { align: "center" });
    doc.moveDown();

    //cabecalho
    doc.fontSize(12).text("Id | Nome ", { underline: true });
    doc.moveDown();

    //add dados
    cosmeticos.forEach((cosmetico) => {
        doc.text(`${cosmetico.id} | ${cosmetico.name} | ${cosmetico.marca_name || "Sem Marca"}`);
    });
    doc.end();

} catch (error) {
            res.status(500).json({ message: "Erro ao gerar o CSV"});
}
};

module.exports = { exportcosmeticoPDF };