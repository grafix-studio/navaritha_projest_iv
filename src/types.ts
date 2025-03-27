export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  topics: string[];
  imageUrl: string;
  modules: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  duration: string;
  type: 'theory' | 'practice' | 'quiz';
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  recommendedCourses: string[];
  averageSalary: string;
  jobOutlook: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  progress: CourseProgress[];
}

export interface CourseProgress {
  courseId: string;
  completedLessons: string[];
  startDate: string;
  lastAccessDate: string;
}