// utils/export.ts
// Simple export utility functions for ExportReportsCard component.
// These functions generate downloadable files using Blob URLs.
// For PDF generation, we use jsPDF if available; otherwise fallback to plain text.

export type ExportData = Record<string, any>[];

/** Export data to CSV file */
export function exportToCSV(data: ExportData, fileName: string = 'export.csv') {
  if (!data || data.length === 0) {
    console.warn('exportToCSV: No data to export');
    return;
  }
  const headers = Object.keys(data[0]);
  const rows = data.map((row) => headers.map((h) => JSON.stringify(row[h] ?? '')).join(','));
  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  triggerDownload(blob, fileName);
}

/** Export data to Excel (XLSX) file using SheetJS if available */
export function exportToExcel(data: ExportData, fileName: string = 'export.xlsx') {
  // Attempt to use SheetJS (xlsx) if present in the bundle.
  // This implementation works when the library is installed; otherwise it falls back to CSV.
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const XLSX = require('xlsx');
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    triggerDownload(blob, fileName);
  } catch (e) {
    console.warn('SheetJS not available, falling back to CSV export');
    exportToCSV(data, fileName.replace(/\.xlsx$/, '.csv'));
  }
}

/** Export data to PDF using jsPDF if available */
export function exportToPDF(data: ExportData, fileName: string = 'export.pdf') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { jsPDF } = require('jspdf');
    const doc = new jsPDF();
    const headers = Object.keys(data[0] ?? {});
    const rows = data.map((row) => headers.map((h) => String(row[h] ?? '')));
    // Simple table layout – jsPDF autoTable plugin is often used, but we keep it minimal.
    doc.text('Export Data', 10, 10);
    rows.forEach((r, i) => {
      doc.text(r.join(' | '), 10, 20 + i * 10);
    });
    const blob = doc.output('blob');
    triggerDownload(blob, fileName);
  } catch (e) {
    console.warn('jsPDF not available, falling back to plain text PDF');
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/pdf' });
    triggerDownload(blob, fileName);
  }
}

/** Helper to trigger a download of a Blob */
function triggerDownload(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
}
