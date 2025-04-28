
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StudyStreakCalendar: React.FC = () => {
  // Study days data
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

  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const weekDays = ['Mon', 'Wed', 'Fri'];
  
  // Generate grid data
  const generateGrid = () => {
    const grid = [];
    for (let week = 0; week < 53; week++) {
      const column = [];
      for (let day = 0; day < 7; day++) {
        const hasStudied = Math.random() < 0.2; // Random study days for demonstration
        column.push(hasStudied);
      }
      grid.push(column);
    }
    return grid;
  };

  const grid = generateGrid();

  return (
    <Card className="glass-card w-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gradient">Study Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <div className="min-w-full">
            <div className="flex text-xs text-muted-foreground mb-2 justify-between px-8">
              {months.map((month, i) => (
                <span key={i}>{month}</span>
              ))}
            </div>
            <div className="flex">
              <div className="flex flex-col justify-between text-xs text-muted-foreground pr-2">
                {weekDays.map((day, i) => (
                  <span key={i}>{day}</span>
                ))}
              </div>
              <div className="grid grid-flow-col gap-1">
                {grid.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-rows-7 gap-1">
                    {week.map((hasStudied, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`w-3 h-3 rounded-sm ${
                          hasStudied 
                            ? 'bg-primary/60' 
                            : 'bg-secondary/30'
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end mt-4 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1 mx-2">
                <div className="w-3 h-3 rounded-sm bg-secondary/30" />
                <div className="w-3 h-3 rounded-sm bg-primary/30" />
                <div className="w-3 h-3 rounded-sm bg-primary/50" />
                <div className="w-3 h-3 rounded-sm bg-primary/70" />
                <div className="w-3 h-3 rounded-sm bg-primary" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStreakCalendar;
