import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import Image from 'next/image';
import CalendarSVG from 'public/svg/calendar.svg';
import React, { useRef } from 'react';

interface Props {
  playwrightId: string;
  buttonText: string;
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  onDateChange: (date: Date | null) => void;
}

const DatepickerButton: React.FC<Props> = ({ playwrightId, buttonText, date, minDate, maxDate, onDateChange }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DesktopDatePicker
        views={['year', 'month', 'day']}
        value={date}
        minDate={minDate}
        maxDate={maxDate}
        onChange={onDateChange}
        renderInput={({ inputRef, InputProps }) => {
          return (
            <>
              <div ref={ref} className="hidden">
                {InputProps?.endAdornment}
              </div>

              <button
                type="button"
                className="btn btn-0"
                data-playwright-id={playwrightId}
                ref={inputRef}
                onClick={() => {
                  const endAdornmentButton: HTMLElement = ref.current?.firstElementChild?.firstElementChild as HTMLElement;

                  endAdornmentButton?.click();
                }}
              >
                <span className="pr-4">{buttonText}</span>

                <Image src={CalendarSVG} alt="Calendar icon" priority />
              </button>
            </>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default DatepickerButton;
