
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const StudyStreakCalendar: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  
  // Generate contribution levels (0-4)
  const getContributionLevel = (value: number): number => {
    if (value === 0) return 0;
    if (value <= 3) return 1;
    if (value <= 6) return 2;
    if (value <= 9) return 3;
    return 4;
  };

  // Generate grid data with contribution levels
  const generateGrid = () => {
    const grid = [];
    for (let week = 0; week < 53; week++) {
      const column = [];
      for (let day = 0; day < 7; day++) {
        // Random number of contributions (0-12)
        const contributions = Math.floor(Math.random() * 13);
        column.push(getContributionLevel(contributions));
      }
      grid.push(column);
    }
    return grid;
  };

  const grid = generateGrid();
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const weekDays = ['Mon', 'Wed', 'Fri'];

  const contributionColors = {
    0: 'bg-[#1a1f2c]/20 border border-gray-700',  // Dark background with border for no contributions
    1: 'bg-[#0EA5E9]/20',  // Light contribution
    2: 'bg-[#0EA5E9]/40',  // Medium contribution
    3: 'bg-[#0EA5E9]/60',  // High contribution
    4: 'bg-[#0EA5E9]/80',  // Very high contribution
  };

  return (
    <Card className="glass-card w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold text-gradient">Study</CardTitle>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-[100px]">
            <SelectValue>{selectedYear}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <div className="min-w-full">
            <div className="flex text-xs text-muted-foreground mb-2 justify-between px-8">
              {months.map((month, i) => (
                <span key={i} className="flex-1 text-center">{month}</span>
              ))}
            </div>
            <div className="flex">
              <div className="flex flex-col justify-between text-xs text-muted-foreground pr-2">
                {weekDays.map((day, i) => (
                  <span key={i}>{day}</span>
                ))}
              </div>
              <div className="grid grid-flow-col gap-[3px] flex-1">
                {grid.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-rows-7 gap-[3px]">
                    {week.map((level, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`w-[10px] h-[10px] rounded-sm ${contributionColors[level as keyof typeof contributionColors]}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end mt-4 text-xs text-muted-foreground gap-2">
              <span>Less</span>
              <div className="flex gap-[3px]">
                {Object.values(contributionColors).map((color, index) => (
                  <div key={index} className={`w-[10px] h-[10px] rounded-sm ${color}`} />
                ))}
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
