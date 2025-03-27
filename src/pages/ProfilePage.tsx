import React, { useContext, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { courses } from '../data/courses';
import { BookOpen, Clock, CheckCircle, Award, BarChart2 } from 'lucide-react';

const ProfilePage = () => {
  const { user, getProgress } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('enrolled');
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Ensure user.enrolledCourses exists before filtering
  const enrolledCourses = courses.filter(course => 
    user.enrolledCourses && user.enrolledCourses.includes(course.id)
  );

  const calculateProgress = (courseId: string) => {
    const progress = getProgress(courseId);
    if (!progress) return 0;
    
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    
    const totalLessons = course.modules.reduce(
      (total, module) => total + module.lessons.length, 0
    );
    
    return Math.round((progress.completedLessons.length / totalLessons) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-600 px-6 py-12 text-white">
            <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
            <p className="mt-2">{user.email}</p>
          </div>
          
          <div className="p-6">
            <div className="flex border-b">
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'enrolled'
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('enrolled')}
              >
                Enrolled Courses
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'progress'
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('progress')}
              >
                Progress Tracker
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'achievements'
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('achievements')}
              >
                Achievements
              </button>
            </div>
            
            <div className="mt-6">
              {activeTab === 'enrolled' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Your Enrolled Courses</h2>
                  
                  {enrolledCourses.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">You haven't enrolled in any courses yet.</p>
                      <Link 
                        to="/courses" 
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        <BookOpen className="mr-2 h-5 w-5" />
                        Browse Courses
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {enrolledCourses.map(course => {
                        const progress = calculateProgress(course.id);
                        
                        return (
                          <div key={course.id} className="border rounded-lg overflow-hidden shadow-sm">
                            <img 
                              src={course.imageUrl} 
                              alt={course.title} 
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                              
                              <div className="flex items-center justify-between mb-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium
                                  ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'}`}>
                                  {course.level}
                                </span>
                                <div className="flex items-center text-gray-500 text-sm">
                                  <Clock className="w-4 h-4 mr-1" />
                                  <span>{course.duration}</span>
                                </div>
                              </div>
                              
                              <div className="mt-4">
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">Progress</span>
                                  <span className="text-sm font-medium">{progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-indigo-600 h-2 rounded-full" 
                                    style={{ width: `${progress}%` }}
                                  ></div>
                                </div>
                              </div>
                              
                              <Link
                                to={`/courses/${course.id}`}
                                className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                              >
                                {progress === 0 ? 'Start Learning' : 'Continue Learning'}
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'progress' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Your Learning Progress</h2>
                  
                  {enrolledCourses.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No progress data available yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {enrolledCourses.map(course => {
                        const progress = calculateProgress(course.id);
                        const courseProgress = getProgress(course.id);
                        
                        return (
                          <div key={course.id} className="border rounded-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold text-lg">{course.title}</h3>
                              <span className="text-sm text-gray-500">
                                Started on {new Date(courseProgress?.startDate || '').toLocaleDateString()}
                              </span>
                            </div>
                            
                            <div className="mb-4">
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Overall Progress</span>
                                <span className="text-sm font-medium">{progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-indigo-600 h-2.5 rounded-full" 
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="mt-6 space-y-4">
                              {course.modules.map(module => {
                                const moduleLessons = module.lessons.map(lesson => lesson.id);
                                const completedModuleLessons = courseProgress?.completedLessons.filter(
                                  id => moduleLessons.includes(id)
                                ) || [];
                                const moduleProgress = Math.round(
                                  (completedModuleLessons.length / moduleLessons.length) * 100
                                );
                                
                                return (
                                  <div key={module.id} className="border-t pt-4">
                                    <h4 className="font-medium mb-2">{module.title}</h4>
                                    <div className="flex justify-between mb-1">
                                      <span className="text-sm text-gray-600">
                                        {completedModuleLessons.length} of {moduleLessons.length} lessons completed
                                      </span>
                                      <span className="text-sm font-medium">{moduleProgress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                      <div 
                                        className="bg-green-500 h-2 rounded-full" 
                                        style={{ width: `${moduleProgress}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'achievements' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {enrolledCourses.length > 0 ? (
                      <>
                        <div className="border rounded-lg p-6 flex items-center">
                          <div className="bg-indigo-100 p-3 rounded-full mr-4">
                            <Award className="h-8 w-8 text-indigo-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Learning Explorer</h3>
                            <p className="text-sm text-gray-600">Enrolled in your first course</p>
                          </div>
                        </div>
                        
                        {user.progress && user.progress.some(p => p.completedLessons.length > 0) && (
                          <div className="border rounded-lg p-6 flex items-center">
                            <div className="bg-green-100 p-3 rounded-full mr-4">
                              <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium">First Steps</h3>
                              <p className="text-sm text-gray-600">Completed your first lesson</p>
                            </div>
                          </div>
                        )}
                        
                        {enrolledCourses.some(course => calculateProgress(course.id) >= 50) && (
                          <div className="border rounded-lg p-6 flex items-center">
                            <div className="bg-yellow-100 p-3 rounded-full mr-4">
                              <BarChart2 className="h-8 w-8 text-yellow-600" />
                            </div>
                            <div>
                              <h3 className="font-medium">Halfway There</h3>
                              <p className="text-sm text-gray-600">Reached 50% completion in a course</p>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="col-span-2 text-center py-8">
                        <p className="text-gray-500 mb-4">No achievements yet. Start learning to earn achievements!</p>
                        <Link 
                          to="/courses" 
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          <BookOpen className="mr-2 h-5 w-5" />
                          Browse Courses
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;