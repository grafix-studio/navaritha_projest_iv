import React, { useState } from 'react';
import { careerPaths } from '../data/careers';
import { courses } from '../data/courses';
import { ArrowRight, BookOpen } from 'lucide-react';

const RecommendationPage = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const interests = [
    "Programming", "Data Analysis", "Design", "Problem Solving",
    "Cloud Computing", "Artificial Intelligence", "Business Analysis"
  ];

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const getRecommendations = () => {
    // Simple recommendation logic based on interests
    return careerPaths.filter(career =>
      career.requiredSkills.some(skill =>
        selectedInterests.some(interest =>
          skill.toLowerCase().includes(interest.toLowerCase())
        )
      )
    );
  };

  const getRecommendedCourses = (careerPath: string[]) => {
    return courses.filter(course => careerPath.includes(course.id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Perfect Career Path
          </h1>
          <p className="text-xl text-gray-600">
            Select your interests and let us recommend the best career paths for you
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">What interests you?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map(interest => (
              <button
                key={interest}
                onClick={() => handleInterestToggle(interest)}
                className={`p-4 rounded-lg border transition-all ${
                  selectedInterests.includes(interest)
                    ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowResults(true)}
            disabled={selectedInterests.length === 0}
            className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <span>Get Recommendations</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {showResults && (
          <div className="space-y-8">
            {getRecommendations().map(career => (
              <div key={career.id} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {career.title}
                </h3>
                <p className="text-gray-600 mb-4">{career.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.requiredSkills.map(skill => (
                      <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Career Outlook:</h4>
                  <p className="text-gray-600">Average Salary: {career.averageSalary}</p>
                  <p className="text-gray-600">{career.jobOutlook}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Recommended Courses:</h4>
                  <div className="grid gap-4">
                    {getRecommendedCourses(career.recommendedCourses).map(course => (
                      <div key={course.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <BookOpen className="w-6 h-6 text-indigo-600 mr-4 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-900">{course.title}</h5>
                          <p className="text-sm text-gray-600">{course.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationPage;