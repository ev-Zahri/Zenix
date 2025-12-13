import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  dateRange: { start: Date; end: Date };
  onChange: (range: { start: Date; end: Date }) => void;
}

export const DateRangeFilter: React.FC<Props> = ({ dateRange, onChange }) => {
  const setLastDays = (days: number) => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days);
    onChange({ start, end });
  };

  const handleCustomChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    if (start && end) {
      onChange({ start, end });
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <button
        className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded"
        onClick={() => setLastDays(7)}
      >
        Last 7 days
      </button>
      <button
        className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded"
        onClick={() => setLastDays(30)}
      >
        Last 30 days
      </button>
      <button
        className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded"
        onClick={() => setLastDays(90)}
      >
        Last 90 days
      </button>
      <DatePicker
        selectsRange
        startDate={dateRange.start}
        endDate={dateRange.end}
        onChange={handleCustomChange}
        isClearable
        placeholderText="Custom range"
        className="px-2 py-1 border rounded"
      />
    </div>
  );
};
