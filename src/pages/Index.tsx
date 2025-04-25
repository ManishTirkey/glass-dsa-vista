
import React from 'react';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import RecentQuestions from '@/components/RecentQuestions';
import TopicProgress from '@/components/TopicProgress';
import StudyStreakCalendar from '@/components/StudyStreakCalendar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto pt-20 px-4 md:px-8 pb-8">
        <div className="mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2 animate-fade-in">
            Welcome back to your DSA journey
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Track your progress, manage questions, and improve your data structures and algorithms skills.
          </p>
        </div>

        <Dashboard />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <RecentQuestions />
          </div>
          <div className="space-y-5">
            <TopicProgress />
            <StudyStreakCalendar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
