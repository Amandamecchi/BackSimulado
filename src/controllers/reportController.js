const PDFDocument = require("pdfkit");
const cosmeticoModel = require("../models/cosmeticoModel");

const exportcosmeticoPDF = async (req, res) => {
    try {
        const cosmeticos = await cosmeticoModel.getCosmeticos({});

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=cosmeticos.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        doc.fontSize(20).text("Relatório de Cosméticos", { align: "center" });
        doc.moveDown();
        doc.fontSize(12).text("ID | Nome | Marca", { underline: true });
        doc.moveDown();

        cosmeticos.forEach(c => {
            doc.text(`${c.id} | ${c.name} | ${c.marca_name || "Sem Marca"}`);
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF" });
    }
};

module.exports = { exportcosmeticoPDF };
