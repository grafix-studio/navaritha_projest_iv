import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { BookOpen, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { UserContext } from '../context/UserContext';

const CourseView = () => {
  const { courseId } = useParams();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const { user, isEnrolled, enrollInCourse, updateProgress, getProgress } = useContext(UserContext);
  const navigate = useNavigate();

  const course = courses.find(c => c.id === courseId);

  useEffect(() => {
    if (course) {
      // Set default selected module and lesson
      if (!selectedModule) {
        setSelectedModule(course.modules[0]?.id || null);
      }
      
      if (selectedModule && !selectedLesson) {
        const module = course.modules.find(m => m.id === selectedModule);
        setSelectedLesson(module?.lessons[0]?.id || null);
      }
    }
  }, [course, selectedModule, selectedLesson]);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
          <p className="text-gray-600">The requested course does not exist.</p>
        </div>
      </div>
    );
  }

  const currentModule = course.modules.find(m => m.id === selectedModule) || course.modules[0];
  const currentLesson = currentModule?.lessons.find(l => l.id === selectedLesson) || currentModule?.lessons[0];
  
  const courseProgress = getProgress(course.id);
  const isLessonCompleted = (lessonId: string) => {
    return courseProgress?.completedLessons.includes(lessonId) || false;
  };

  const handleEnroll = () => {
    if (user) {
      enrollInCourse(course.id);
    } else {
      navigate('/login');
    }
  };

  const handleLessonCompletion = (lessonId: string, completed: boolean) => {
    if (user && currentModule) {
      updateProgress(course.id, currentModule.id, lessonId, completed);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          <p className="mt-2 text-gray-600">{course.description}</p>
          <div className="mt-4 flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium
              ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'}`}>
              {course.level}
            </span>
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>{course.duration}</span>
            </div>
          </div>
          
          {!isEnrolled(course.id) && (
            <div className="mt-4">
              <button
                onClick={handleEnroll}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Enroll in this course
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-8">
        {/* Course Navigation */}
        <div className="col-span-12 md:col-span-3 bg-white rounded-lg shadow-sm p-4">
          <h2 className="font-semibold text-gray-900 mb-4">Course Content</h2>
          <div className="space-y-4">
            {course.modules.map(module => (
              <div key={module.id}>
                <button
                  onClick={() => {
                    setSelectedModule(module.id);
                    setSelectedLesson(module.lessons[0].id);
                  }}
                  className={`w-full text-left p-2 rounded-lg transition-colors ${
                    currentModule.id === module.id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <h3 className="font-medium">{module.title}</h3>
                  <p className="text-sm text-gray-500">{module.lessons.length} lessons</p>
                </button>

                {currentModule.id === module.id && (
                  <div className="mt-2 ml-4 space-y-2">
                    {module.lessons.map(lesson => (
                      <button
                        key={lesson.id}
                        onClick={() => setSelectedLesson(lesson.id)}
                        className={`w-full text-left p-2 text-sm rounded-lg transition-colors flex items-center justify-between ${
                          currentLesson?.id === lesson.id
                            ? 'bg-indigo-50 text-indigo-700'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span>{lesson.title}</span>
                        </div>
                        {isLessonCompleted(lesson.id) && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lesson Content */}
        <div className="col-span-12 md:col-span-9 bg-white rounded-lg shadow-sm p-8">
          {!isEnrolled(course.id) && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    You need to enroll in this course to track your progress.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {currentLesson ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{currentLesson.title}</h2>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{currentLesson.duration}</span>
                </div>
              </div>
              <div className="prose max-w-none">
                <ReactMarkdown>{currentLesson.content}</ReactMarkdown>
              </div>
              {currentLesson.type === 'practice' && (
                <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 mb-2">Practice Exercise</h3>
                  <p className="text-indigo-700">Complete the exercise above to reinforce your learning.</p>
                </div>
              )}
              
              {isEnrolled(course.id) && (
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => {
                      const moduleIndex = course.modules.findIndex(m => m.id === currentModule.id);
                      const lessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
                      
                      // Go to previous lesson or last lesson of previous module
                      if (lessonIndex > 0) {
                        setSelectedLesson(currentModule.lessons[lessonIndex - 1].id);
                      } else if (moduleIndex > 0) {
                        const prevModule = course.modules[moduleIndex - 1];
                        setSelectedModule(prevModule.id);
                        setSelectedLesson(prevModule.lessons[prevModule.lessons.length - 1].id);
                      }
                    }}
                    disabled={
                      currentModule.id === course.modules[0].id && 
                      currentLesson.id === currentModule.lessons[0].id
                    }
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous Lesson
                  </button>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleLessonCompletion(currentLesson.id, !isLessonCompleted(currentLesson.id))}
                      className={`flex items-center px-4 py-2 border rounded-md text-sm font-medium ${
                        isLessonCompleted(currentLesson.id)
                          ? 'border-green-300 bg- green-50 text-green-700 hover:bg-green-100'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {isLessonCompleted(currentLesson.id) ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Completed'
                      )}
                    </button>
                    
                    <button
                      onClick={() => {
                        const moduleIndex = course.modules.findIndex(m => m.id === currentModule.id);
                        const lessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
                        
                        // Go to next lesson or first lesson of next module
                        if (lessonIndex < currentModule.lessons.length - 1) {
                          setSelectedLesson(currentModule.lessons[lessonIndex + 1].id);
                        } else if (moduleIndex < course.modules.length - 1) {
                          const nextModule = course.modules[moduleIndex + 1];
                          setSelectedModule(nextModule.id);
                          setSelectedLesson(nextModule.lessons[0].id);
                        }
                      }}
                      disabled={
                        currentModule.id === course.modules[course.modules.length - 1].id && 
                        currentLesson.id === currentModule.lessons[currentModule.lessons.length - 1].id
                      }
                      className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Lesson
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <p>Select a lesson to begin learning</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseView;