
import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StudyStreakCalendar: React.FC = () => {
  // Days when the user has studied
  const studyDays = [
    new Date(2025, 3, 1),
    new Date(2025, 3, 2),
    new Date(2025, 3, 5),
    new Date(2025, 3, 6),
    new Date(2025, 3, 7),
    new Date(2025, 3, 10),
    new Date(2025, 3, 11),
    new Date(2025, 3, 15),
    new Date(2025, 3, 20),
    new Date(2025, 3, 22),
    new Date(2025, 3, 23),
  ];

  const hasStudiedOnDay = (date: Date) => {
    return studyDays.some(studyDay => 
      studyDay.getDate() === date.getDate() && 
      studyDay.getMonth() === date.getMonth() && 
      studyDay.getFullYear() === date.getFullYear()
    );
  };

  return (
    <Card className="glass-card w-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gradient">Study Streak</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <Calendar
            mode="single"
            selected={new Date()}
            className="w-full rounded-md border-0"
            modifiers={{ study: studyDays }}
            modifiersClassNames={{
              study: "bg-primary/30 text-foreground rounded-md",
            }}
            disabled={{ before: new Date(2025, 0, 1) }}
            styles={{
              months: { width: '100%' },
              month: { width: '100%' },
              table: { width: '100%' },
              row: { width: '100%', justifyContent: 'space-between' },
              head_row: { width: '100%', justifyContent: 'space-between' },
              cell: { width: 'auto' }
            }}
          />
        </div>
        <div className="mt-4">
          <div className="text-sm text-muted-foreground mb-2">Current Streak</div>
          <div className="text-2xl font-bold">3 days</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStreakCalendar;
