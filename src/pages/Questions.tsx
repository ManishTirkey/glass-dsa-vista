
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuestionList from '@/components/QuestionList';
import QuestionDetail from '@/components/QuestionDetail';
import { questions } from '@/data/questionData';

const Questions: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto pt-20 px-4 md:px-8 pb-8">
        <div className="mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2 animate-fade-in">
            DSA Questions Library
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore all questions, filter by difficulty or topic, and expand to see detailed solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left side - Questions List */}
          <div className="lg:col-span-2">
            <QuestionList 
              questions={questions} 
              selectedQuestion={selectedQuestion}
              onSelectQuestion={setSelectedQuestion}
            />
          </div>
          
          {/* Right side - Solution Details */}
          <div className="lg:col-span-3">
            <QuestionDetail question={selectedQuestion} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Questions;
