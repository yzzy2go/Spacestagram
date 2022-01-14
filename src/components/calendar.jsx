import React, { useState, useCallback } from "react";
import {
  Card,
  DatePicker,
  Stack,
  Button,
  Collapsible,
  TextField,
} from "@shopify/polaris";

function Calendar({ parentCallback }) {
  const [{ month, year }, setDate] = useState({ month: 0, year: 2022 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date("January 1, 2022"),
    end: new Date("January 1, 2022"),
  });
  const [open, setOpen] = useState(false);

  const today = new Date();
  const date = new Date(new Date().setDate(new Date().getDate() - 365));

  const handleToggle = useCallback(() => setOpen((open) => !open), []);

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );

  return (
    <div style={{ margin: "1em 0" }}>
      <Card sectioned>
        <Stack vertical>
          <Button
            fullWidth
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
              <div style={{ margin: "20px" }}>
                <DatePicker
                  month={month}
                  year={year}
                  onChange={setSelectedDates}
                  onMonthChange={handleMonthChange}
                  selected={selectedDates}
                  disableDatesAfter={today}
                  disableDatesBefore={date}
                />
                <div style={{ paddingBottom: "1em" }}>
                  <Button
                    primary
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
