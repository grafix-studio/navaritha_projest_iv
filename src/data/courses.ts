import { Course } from '../types';

export const courses: Course[] = [
  {
    id: "web-dev-fundamentals",
    title: "Web Development Fundamentals",
    description: "Master the core concepts of web development including HTML, CSS, and JavaScript. Build responsive websites from scratch.",
    duration: "12 weeks",
    level: "Beginner",
    category: "Web Development",
    topics: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Accessibility"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    modules: [
      {
        id: "html-basics",
        title: "HTML Fundamentals",
        description: "Learn the building blocks of web pages",
        lessons: [
          {
            id: "html-intro",
            title: "Introduction to HTML",
            content: `
# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically.

## Basic Structure
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>
\`\`\`

## Key Concepts
- HTML elements are represented by tags
- Tags usually come in pairs (start tag and end tag)
- Some elements are self-closing
- HTML5 introduced semantic elements like <header>, <nav>, <main>, <footer>
            `,
            duration: "30 minutes",
            type: "theory"
          },
          {
            id: "html-elements",
            title: "HTML Elements & Attributes",
            content: `
# HTML Elements and Attributes

Elements are the building blocks of HTML pages, and attributes provide additional information about elements.

## Common Elements
- Headings: \`<h1>\` to \`<h6>\`
- Paragraphs: \`<p>\`
- Links: \`<a>\`
- Images: \`<img>\`
- Lists: \`<ul>\`, \`<ol>\`, \`<li>\`

## Attributes
\`\`\`html
<a href="https://example.com" target="_blank">Visit Example</a>
<img src="image.jpg" alt="Description" width="300" height="200">
\`\`\`

## Practice Exercise
Create a simple webpage with:
1. A main heading
2. Two paragraphs
3. An image
4. A link to your favorite website
            `,
            duration: "45 minutes",
            type: "practice"
          }
        ]
      },
      {
        id: "css-basics",
        title: "CSS Fundamentals",
        description: "Style your web pages with CSS",
        lessons: [
          {
            id: "css-intro",
            title: "Introduction to CSS",
            content: `
# Introduction to CSS

CSS (Cascading Style Sheets) is used to style and layout web pages.

## Basic Syntax
\`\`\`css
selector {
    property: value;
}
\`\`\`

## Ways to Add CSS
1. External CSS
\`\`\`html
<link rel="stylesheet" href="styles.css">
\`\`\`

2. Internal CSS
\`\`\`html
<style>
    body {
        background-color: lightblue;
    }
</style>
\`\`\`

3. Inline CSS
\`\`\`html
<p style="color: red;">This is a paragraph.</p>
\`\`\`
            `,
            duration: "30 minutes",
            type: "theory"
          }
        ]
      }
    ]
  },
  {
    id: "react-complete",
    title: "Complete React Development",
    description: "Learn React from basics to advanced concepts. Build modern web applications with React hooks and best practices.",
    duration: "10 weeks",
    level: "Intermediate",
    category: "Web Development",
    topics: ["React", "Redux", "React Router", "Hooks", "State Management"],
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800",
    modules: [
      {
        id: "react-basics",
        title: "React Fundamentals",
        description: "Learn the core concepts of React",
        lessons: [
          {
            id: "react-intro",
            title: "Introduction to React",
            content: `
# Introduction to React

React is a JavaScript library for building user interfaces.

## Key Concepts
- Components
- JSX
- Virtual DOM
- State and Props

## Your First Component
\`\`\`jsx
function Welcome() {
    return <h1>Hello, React!</h1>;
}
\`\`\`

## Using Props
\`\`\`jsx
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}
\`\`\`
            `,
            duration: "45 minutes",
            type: "theory"
          }
        ]
      }
    ]
  },
  {
    id: "python-data-science",
    title: "Python for Data Science",
    description: "Master Python programming for data analysis, machine learning, and scientific computing. Learn essential libraries and real-world applications.",
    duration: "16 weeks",
    level: "Intermediate",
    category: "Data Science",
    topics: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
    modules: [
      {
        id: "python-basics",
        title: "Python Programming Fundamentals",
        description: "Learn the basics of Python programming",
        lessons: [
          {
            id: "python-intro",
            title: "Introduction to Python",
            content: `
# Introduction to Python

Python is a high-level, interpreted programming language known for its simplicity and readability.

## Basic Syntax
\`\`\`python
# Variables and data types
name = "John"
age = 30
height = 1.75
is_student = True

# Print statement
print(f"Hello, {name}!")

# Lists
numbers = [1, 2, 3, 4, 5]
print(numbers[0])  # Prints: 1

# Dictionaries
person = {
    "name": "John",
    "age": 30
}
print(person["name"])  # Prints: John
\`\`\`

## Control Flow
\`\`\`python
# If statements
if age >= 18:
    print("Adult")
else:
    print("Minor")

# Loops
for num in numbers:
    print(num)

while age < 35:
    age += 1
    print(age)
\`\`\`
            `,
            duration: "60 minutes",
            type: "theory"
          }
        ]
      },
      {
        id: "numpy-pandas",
        title: "Data Analysis with NumPy and Pandas",
        description: "Master the fundamental libraries for data analysis",
        lessons: [
          {
            id: "numpy-basics",
            title: "NumPy Fundamentals",
            content: `
# NumPy Fundamentals

NumPy is the fundamental package for scientific computing in Python.

## Arrays
\`\`\`python
import numpy as np

# Create arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.zeros((3, 3))
arr3 = np.ones((2, 2))

# Array operations
print(arr1 * 2)  # Element-wise multiplication
print(arr1.mean())  # Calculate mean
print(arr1.reshape(5, 1))  # Reshape array
\`\`\`

## Practice Exercise
1. Create a 3x3 matrix with random numbers
2. Calculate its transpose
3. Compute the mean of each row
4. Find the maximum value in each column
            `,
            duration: "45 minutes",
            type: "practice"
          }
        ]
      }
    ]
  },
  {
    id: "aws-cloud-architect",
    title: "AWS Cloud Architecture",
    description: "Become an AWS Cloud Architect. Learn to design, deploy, and manage scalable cloud infrastructure on Amazon Web Services.",
    duration: "14 weeks",
    level: "Advanced",
    category: "Cloud Computing",
    topics: ["AWS", "Cloud Architecture", "DevOps", "Security", "Networking"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
    modules: [
      {
        id: "aws-fundamentals",
        title: "AWS Core Services",
        description: "Learn the fundamental AWS services",
        lessons: [
          {
            id: "ec2-basics",
            title: "Amazon EC2 Fundamentals",
            content: `
# Amazon EC2 (Elastic Compute Cloud)

EC2 is the backbone of AWS compute services, providing resizable compute capacity in the cloud.

## Key Concepts
- Instance Types
- AMIs (Amazon Machine Images)
- Security Groups
- Key Pairs
- EBS Volumes

## Launching an EC2 Instance
1. Choose an AMI
2. Select Instance Type
3. Configure Instance Details
4. Add Storage
5. Configure Security Group
6. Launch Instance

## Best Practices
\`\`\`bash
# Example user data script
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
\`\`\`
            `,
            duration: "60 minutes",
            type: "theory"
          }
        ]
      }
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning Fundamentals",
    description: "Learn the foundations of machine learning, including supervised and unsupervised learning, model evaluation, and practical applications.",
    duration: "20 weeks",
    level: "Advanced",
    category: "Data Science",
    topics: ["Machine Learning", "Statistics", "Python", "Neural Networks", "Deep Learning"],
    imageUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800",
    modules: [
      {
        id: "ml-intro",
        title: "Introduction to Machine Learning",
        description: "Understand the basics of machine learning",
        lessons: [
          {
            id: "ml-concepts",
            title: "Core Machine Learning Concepts",
            content: `
# Machine Learning Fundamentals

Machine learning is a subset of artificial intelligence that focuses on building systems that learn from data.

## Types of Machine Learning
1. Supervised Learning
2. Unsupervised Learning
3. Reinforcement Learning

## Common Algorithms
\`\`\`python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Prepare data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
\`\`\`

## Model Evaluation
- Accuracy
- Precision
- Recall
- F1 Score
            `,
            duration: "45 minutes",
            type: "theory"
          }
        ]
      }
    ]
  },
  {
    id: "java-programming",
    title: "Java Programming Masterclass",
    description: "Comprehensive Java programming course covering core concepts, object-oriented programming, and enterprise application development.",
    duration: "16 weeks",
    level: "Intermediate",
    category: "Programming",
    topics: ["Java", "OOP", "Spring", "Hibernate", "Multithreading"],
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",
    modules: [
      {
        id: "java-basics",
        title: "Java Fundamentals",
        description: "Learn the core concepts of Java programming",
        lessons: [
          {
            id: "java-intro",
            title: "Introduction to Java",
            content: `
# Introduction to Java

Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible.

## Key Features
- Platform Independence (Write Once, Run Anywhere)
- Object-Oriented
- Strongly Typed
- Automatic Memory Management (Garbage Collection)
- Rich Standard Library

## Basic Java Program
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

## Variables and Data Types
\`\`\`java
// Primitive data types
int number = 10;
double decimal = 10.5;
boolean isTrue = true;
char letter = 'A';

// Reference types
String message = "Hello, Java!";
int[] numbers = {1, 2, 3, 4, 5};
\`\`\`
            `,
            duration: "45 minutes",
            type: "theory"
          },
          {
            id: "java-oop",
            title: "Object-Oriented Programming in Java",
            content: `
# Object-Oriented Programming in Java

Java is built around the concept of objects and classes, making it a powerful language for OOP.

## Classes and Objects
\`\`\`java
// Class definition
public class Person {
    // Fields (attributes)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Methods
    public void introduce() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
    
    // Getters and setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
}

// Creating objects
Person person1 = new Person("John", 30);
person1.introduce();
\`\`\`

## Inheritance
\`\`\`java
public class Student extends Person {
    private String studentId;
    
    public Student(String name, int age, String studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    
    @Override
    public void introduce() {
        System.out.println("Hello, I'm student " + getName() + " with ID " + studentId);
    }
}
\`\`\`
            `,
            duration: "60 minutes",
            type: "theory"
          }
        ]
      }
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications using React Native. Learn to create native-like experiences for iOS and Android with a single codebase.",
    duration: "12 weeks",
    level: "Intermediate",
    category: "Mobile Development",
    topics: ["React Native", "JavaScript", "Mobile UI", "Native APIs", "App Publishing"],
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800",
    modules: [
      {
        id: "react-native-basics",
        title: "React Native Fundamentals",
        description: "Learn the core concepts of React Native",
        lessons: [
          {
            id: "react-native-intro",
            title: "Introduction to React Native",
            content: `
# Introduction to React Native

React Native is a framework for building native mobile applications using JavaScript and React.

## Key Concepts
- Learn once, write anywhere
- Native components
- Bridge architecture
- Hot reloading

## Your First React Native App
\`\`\`jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
\`\`\`

## Core Components
- View (similar to div)
- Text
- Image
- ScrollView
- TextInput
- TouchableOpacity
            `,
            duration: "45 minutes",
            type: "theory"
          }
        ]
      }
    ]
  },
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    description: "Learn the essential concepts and practices of cybersecurity. Understand threats, vulnerabilities, and how to protect systems and data.",
    duration: "14 weeks",
    level: "Beginner",
    category: "Cybersecurity",
    topics: ["Network Security", "Cryptography", "Ethical Hacking", "Security Policies", "Risk Management"],
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800",
    modules: [
      {
        id: "security-basics",
        title: "Security Fundamentals",
        description: "Learn the core concepts of cybersecurity",
        lessons: [
          {
            id: "security-intro",
            title: "Introduction to Cybersecurity",
            content: `
# Introduction to Cybersecurity

Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.

## Key Concepts
- CIA Triad: Confidentiality, Integrity, Availability
- Authentication vs. Authorization
- Defense in Depth
- Principle of Least Privilege

## Common Threats
- Malware (viruses, worms, trojans)
- Phishing
- Man-in-the-middle attacks
- Denial of Service (DoS)
- SQL Injection

## Basic Security Measures
\`\`\`
1. Use strong, unique passwords
2. Enable multi-factor authentication
3. Keep software updated
4. Use encryption for sensitive data
5. Regularly backup important data
\`\`\`
            `,
            duration: "45 minutes",
            type: "theory"
          }
        ]
      }
    ]
  }
];