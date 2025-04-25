
import React from 'react';
import { CircleCheck, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Questions Solved</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">24 / 150</div>
            <CircleCheck className="h-6 w-6 text-primary animate-pulse-slow" />
          </div>
          <Progress value={16} className="h-1 mt-3" />
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Topics Covered</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">5 / 15</div>
            <Code className="h-6 w-6 text-primary animate-pulse-slow" />
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">Arrays</span>
            <span className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">Linked Lists</span>
            <span className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">Trees</span>
            <span className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">Graphs</span>
            <span className="text-xs bg-secondary/50 rounded-full px-2 py-0.5">DP</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
