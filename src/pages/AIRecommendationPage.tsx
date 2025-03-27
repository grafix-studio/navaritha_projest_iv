import React, { useState } from 'react';
import { getAIRecommendations, AIRecommendationResponse } from '../services/aiService';
import { Brain, Briefcase, GraduationCap, Loader2 } from 'lucide-react';

const AIRecommendationPage = () => {
  const [currentSkills, setCurrentSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [careerGoals, setCareerGoals] = useState('');
  const [recommendations, setRecommendations] = useState<AIRecommendationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await getAIRecommendations(currentSkills, interests, careerGoals);
      setRecommendations(result);
      if (result.error) {
        setError(result.error);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Career Guidance
          </h1>
          <p className="text-xl text-gray-600">
            Get personalized career recommendations powered by AI
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="currentSkills" className="block text-sm font-medium text-gray-700 mb-1">
                  What are your current skills?
                </label>
                <textarea
                  id="currentSkills"
                  value={currentSkills}
                  onChange={(e) => setCurrentSkills(e.target.value)}
                  placeholder="E.g., JavaScript, HTML/CSS, React, SQL, project management..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                  What are your interests?
                </label>
                <textarea
                  id="interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="E.g., data analysis, web development, AI/ML, cloud computing..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label htmlFor="careerGoals" className="block text-sm font-medium text-gray-700 mb-1">
                  What are your career goals?
                </label>
                <textarea
                  id="careerGoals"
                  value={careerGoals}
                  onChange={(e) => setCareerGoals(e.target.value)}
                  placeholder="E.g., become a full-stack developer in 2 years, transition to data science, lead a development team..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  rows={3}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Generating Recommendations...</span>
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5" />
                    <span>Get AI Recommendations</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        {recommendations && !error && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-indigo-600 px-6 py-4">
                <div className="flex items-center">
                  <Briefcase className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-lg font-medium text-white">Recommended Career Paths</h3>
                </div>
              </div>
              <div className="px-6 py-5 prose max-w-none">
                <div className="whitespace-pre-line">{recommendations.careerPaths}</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-emerald-600 px-6 py-4">
                <div className="flex items-center">
                  <Briefcase className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-lg font-medium text-white">Suitable Job Roles</h3>
                </div>
              </div>
              <div className="px-6 py-5 prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: recommendations.jobRoles.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800">$1</a>') }} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-amber-600 px-6 py-4">
                <div className="flex items-center">
                  <GraduationCap className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-lg font-medium text-white">Learning Roadmap</h3>
                </div>
              </div>
              <div className="px-6 py-5 prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: recommendations.learningRoadmap.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800">$1</a>') }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIRecommendationPage;