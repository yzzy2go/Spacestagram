import React, { useState, useCallback } from "react";
import { Card, DatePicker, Stack, Button, Collapsible } from "@shopify/polaris";

function Calendar({ parentCallback }) {
  const [{ month, year }, setDate] = useState({ month: 6, year: 2023 });
  const [open, setOpen] = useState(false);

  // initial starting date set on the calendar
  const [selectedDates, setSelectedDates] = useState({
    start: new Date("July 1, 2023"),
    end: new Date("July 1, 2023"),
  });

  // toggle for collapsing the calendar card
  const handleToggle = useCallback(() => setOpen((open) => !open), []);

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );

  // enabled date range for the calendar
  const today = new Date();
  const yearAgoToday = new Date(new Date().setDate(new Date().getDate() - 365));

  return (
    <div className="calendar">
      <Card sectioned>
        <Stack vertical>
          <Button
            fullWidth
            alt="Expand or Collapse the section"
            onClick={handleToggle}
            disclosure={open ? "up" : "down"}
            ariaExpanded={open}
            ariaControls="basic-collapsible"
          >
            Choose a starting date
          </Button>
          <Collapsible
            open={open}
            id="basic-collapsible"
            transition={{ duration: "300ms", timingFunction: "ease-in-out" }}
            expandOnPrint
          >
            <Card>
              <div className="picker">
                <DatePicker
                  month={month}
                  year={year}
                  onChange={setSelectedDates}
                  onMonthChange={handleMonthChange}
                  selected={selectedDates}
                  disableDatesAfter={today}
                  disableDatesBefore={yearAgoToday}
                />
                <div className="calendar-button">
                  <Button
                    primary
                    alt="Get posts from the selected date"
                    onClick={() => parentCallback(selectedDates.start)}
                  >
                    Get Posts
                  </Button>
                </div>
              </div>
            </Card>
          </Collapsible>
        </Stack>
      </Card>
    </div>
  );
}

export default Calendar;
