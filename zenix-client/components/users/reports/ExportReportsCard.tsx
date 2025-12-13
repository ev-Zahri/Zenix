// Daftar feature:
// ExportReportsCard
// Export to PDF button
// Export to CSV button
// Export to Excel button
// Custom date range selector (Removed, using interval prop)

'use client';
import { useEffect } from 'react';
import { exportToPDF, exportToCSV, exportToExcel } from '@/utils/export';
import { Button } from '@/components/ui/button';

interface ExportReportsCardProps {
  idAccount: string;
  interval: string;
}

export const ExportReportsCard = ({ idAccount, interval }: ExportReportsCardProps) => {
  // Placeholder effect – in real implementation you would fetch data when interval changes
  useEffect(() => {
    // e.g., fetchExportData(idAccount, interval);
  }, [idAccount, interval]);

  // Placeholder data – replace with real data as needed
  const data: Record<string, any>[] = [];

  const handleExportPDF = () => exportToPDF(data, 'report.pdf');
  const handleExportCSV = () => exportToCSV(data, 'report.csv');
  const handleExportExcel = () => exportToExcel(data, 'report.xlsx');

  return (
    <div className="mb-8 w-full rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
      <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-slate-200 pb-4 dark:border-slate-800">
        Export Financial Reports
      </h2>
      <div className="flex space-x-2 mt-4">
        <Button variant="outline" className="bg-primary hover:bg-primary/90 cursor-pointer mt-2 dark:bg-primary-500 dark:hover:bg-primary-500/90" onClick={handleExportPDF}>Export to PDF</Button>
        <Button variant="outline" className="bg-primary hover:bg-primary/90 cursor-pointer mt-2 dark:bg-primary-500 dark:hover:bg-primary-500/90" onClick={handleExportCSV}>Export to CSV</Button>
        <Button variant="outline" className="bg-primary hover:bg-primary/90 cursor-pointer mt-2 dark:bg-primary-500 dark:hover:bg-primary-500/90" onClick={handleExportExcel}>Export to Excel</Button>
      </div>
    </div>
  );
};