import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User, Course, CourseProgress } from '../types';

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProgress: (courseId: string, moduleId: string, lessonId: string, completed: boolean) => void;
  enrollInCourse: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;
  getProgress: (courseId: string) => CourseProgress | undefined;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  updateProgress: () => {},
  enrollInCourse: () => {},
  isEnrolled: () => false,
  getProgress: () => undefined,
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user data from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data - in a real app, this would come from a backend
    const mockUsers = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        enrolledCourses: ['web-dev-fundamentals'],
        progress: [
          {
            courseId: 'web-dev-fundamentals',
            completedLessons: ['html-intro'],
            startDate: new Date().toISOString(),
            lastAccessDate: new Date().toISOString(),
          }
        ]
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password123',
        enrolledCourses: [],
        progress: []
      },
      {
        id: '3',
        name: 'User',
        email: 'user',
        password: '1234',
        enrolledCourses: ['web-dev-fundamentals', 'react-complete', 'python-data-science'],
        progress: [
          {
            courseId: 'web-dev-fundamentals',
            completedLessons: ['html-intro', 'html-elements', 'css-intro'],
            startDate: new Date().toISOString(),
            lastAccessDate: new Date().toISOString(),
          },
          {
            courseId: 'react-complete',
            completedLessons: ['react-intro'],
            startDate: new Date().toISOString(),
            lastAccessDate: new Date().toISOString(),
          }
        ]
      }
    ];
    
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      // Remove password before storing in state
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword as User);
      return true;
    }
    
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, this would create a new user in the database
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      enrolledCourses: [],
      progress: []
    };
    
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProgress = (courseId: string, moduleId: string, lessonId: string, completed: boolean) => {
    if (!user) return;
    
    const updatedUser = { ...user };
    // Initialize progress array if it doesn't exist
    if (!updatedUser.progress) {
      updatedUser.progress = [];
    }
    
    let courseProgress = updatedUser.progress.find(p => p.courseId === courseId);
    
    if (!courseProgress) {
      // If no progress record exists for this course, create one
      courseProgress = {
        courseId,
        completedLessons: [],
        startDate: new Date().toISOString(),
        lastAccessDate: new Date().toISOString()
      };
      updatedUser.progress.push(courseProgress);
    } else {
      // Update last access date
      courseProgress.lastAccessDate = new Date().toISOString();
    }
    
    // Update completed lessons
    if (completed && !courseProgress.completedLessons.includes(lessonId)) {
      courseProgress.completedLessons.push(lessonId);
    } else if (!completed && courseProgress.completedLessons.includes(lessonId)) {
      courseProgress.completedLessons = courseProgress.completedLessons.filter(id => id !== lessonId);
    }
    
    setUser(updatedUser);
  };

  const enrollInCourse = (courseId: string) => {
    if (!user) return;
    
    // Initialize enrolledCourses if it doesn't exist
    const enrolledCourses = user.enrolledCourses || [];
    
    if (!enrolledCourses.includes(courseId)) {
      const updatedUser = { 
        ...user,
        enrolledCourses: [...enrolledCourses, courseId],
        progress: [
          ...(user.progress || []),
          {
            courseId,
            completedLessons: [],
            startDate: new Date().toISOString(),
            lastAccessDate: new Date().toISOString()
          }
        ]
      };
      
      setUser(updatedUser);
    }
  };

  const isEnrolled = (courseId: string): boolean => {
    return user ? (user.enrolledCourses || []).includes(courseId) : false;
  };

  const getProgress = (courseId: string): CourseProgress | undefined => {
    return user?.progress?.find(p => p.courseId === courseId);
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      updateProgress, 
      enrollInCourse, 
      isEnrolled,
      getProgress
    }}>
      {children}
    </UserContext.Provider>
  );
};