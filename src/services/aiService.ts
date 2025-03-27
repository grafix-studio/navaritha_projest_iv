// AI recommendation service using a simulated API response
// This avoids external API dependencies while providing the same functionality

export interface AIRecommendationResponse {
  careerPaths: string;
  jobRoles: string;
  learningRoadmap: string;
  isLoading: boolean;
  error: string | null;
}

// Simulated AI recommendation function
export const getAIRecommendations = async (
  currentSkills: string,
  interests: string,
  careerGoals: string
): Promise<AIRecommendationResponse> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  try {
    // Simple keyword matching for demonstration
    const skillsLower = currentSkills.toLowerCase();
    const interestsLower = interests.toLowerCase();
    const goalsLower = careerGoals.toLowerCase();
    
    // Generate recommendations based on input keywords
    let careerPathsText = "";
    let jobRolesText = "";
    let roadmapText = "";
    
    // Web development path
    if (
      skillsLower.includes("javascript") || 
      skillsLower.includes("html") || 
      skillsLower.includes("css") || 
      skillsLower.includes("react") || 
      interestsLower.includes("web") ||
      interestsLower.includes("frontend")
    ) {
      careerPathsText += "- Frontend Developer: Create engaging user interfaces and interactive web applications.\n";
      careerPathsText += "- Full Stack Developer: Build both client and server-side applications with modern frameworks.\n";
      
      jobRolesText += "- React Developer - [Apply on LinkedIn](https://www.linkedin.com/jobs/react-developer-jobs/)\n";
      jobRolesText += "- JavaScript Engineer - [Apply on Naukri](https://www.naukri.com/javascript-jobs)\n";
      jobRolesText += "- UI/UX Developer - [Apply on Indeed](https://www.indeed.com/q-ui-ux-developer-jobs.html)\n";
      
      roadmapText += "1. Master core JavaScript concepts - [Udemy JavaScript Course](https://www.udemy.com/topic/javascript/)\n";
      roadmapText += "2. Learn React fundamentals - [React Documentation](https://react.dev/learn)\n";
      roadmapText += "3. Build a portfolio with 3-5 projects - [GitHub Pages](https://pages.github.com/)\n";
      roadmapText += "4. Learn backend basics with Node.js - [Coursera Node.js Course](https://www.coursera.org/learn/server-side-nodejs)\n";
      roadmapText += "5. Practice with real-world projects - [Frontend Mentor](https://www.frontendmentor.io/)\n";
    }
    
    // Data science path
    if (
      skillsLower.includes("python") || 
      skillsLower.includes("data") || 
      skillsLower.includes("sql") || 
      skillsLower.includes("statistics") || 
      interestsLower.includes("data") ||
      interestsLower.includes("analytics") ||
      interestsLower.includes("machine learning")
    ) {
      careerPathsText += "- Data Scientist: Analyze complex datasets to extract insights and build predictive models.\n";
      careerPathsText += "- Machine Learning Engineer: Develop AI systems that can learn from and make decisions based on data.\n";
      
      jobRolesText += "- Data Analyst - [Apply on LinkedIn](https://www.linkedin.com/jobs/data-analyst-jobs/)\n";
      jobRolesText += "- Machine Learning Engineer - [Apply on Naukri](https://www.naukri.com/machine-learning-jobs)\n";
      jobRolesText += "- Business Intelligence Developer - [Apply on Monster](https://www.monster.com/jobs/search?q=Business-Intelligence-Developer)\n";
      
      roadmapText += "1. Master Python programming - [Codecademy Python Course](https://www.codecademy.com/learn/learn-python-3)\n";
      roadmapText += "2. Learn data manipulation with Pandas - [Kaggle Pandas Tutorial](https://www.kaggle.com/learn/pandas)\n";
      roadmapText += "3. Study statistics and probability - [Khan Academy Statistics](https://www.khanacademy.org/math/statistics-probability)\n";
      roadmapText += "4. Learn machine learning algorithms - [Coursera Machine Learning](https://www.coursera.org/learn/machine-learning)\n";
      roadmapText += "5. Practice with real datasets - [Kaggle Competitions](https://www.kaggle.com/competitions)\n";
    }
    
    // Cloud computing path
    if (
      skillsLower.includes("cloud") || 
      skillsLower.includes("aws") || 
      skillsLower.includes("azure") || 
      skillsLower.includes("devops") || 
      interestsLower.includes("cloud") ||
      interestsLower.includes("infrastructure") ||
      interestsLower.includes("devops")
    ) {
      careerPathsText += "- Cloud Solutions Architect: Design scalable and secure cloud infrastructure.\n";
      careerPathsText += "- DevOps Engineer: Implement CI/CD pipelines and automate infrastructure deployment.\n";
      
      jobRolesText += "- AWS Solutions Architect - [Apply on LinkedIn](https://www.linkedin.com/jobs/aws-solutions-architect-jobs/)\n";
      jobRolesText += "- Cloud Infrastructure Engineer - [Apply on Naukri](https://www.naukri.com/cloud-infrastructure-jobs)\n";
      jobRolesText += "- Site Reliability Engineer - [Apply on Indeed](https://www.indeed.com/q-site-reliability-engineer-jobs.html)\n";
      
      roadmapText += "1. Learn core cloud concepts - [AWS Free Training](https://aws.amazon.com/training/learn-about/)\n";
      roadmapText += "2. Master Infrastructure as Code - [Terraform Tutorial](https://learn.hashicorp.com/terraform)\n";
      roadmapText += "3. Understand containerization - [Docker Documentation](https://docs.docker.com/get-started/)\n";
      roadmapText += "4. Study cloud security - [Cloud Security Alliance](https://cloudsecurityalliance.org/education/)\n";
      roadmapText += "5. Prepare for certification - [AWS Certification](https://aws.amazon.com/certification/)\n";
    }
    
    // Java development path
    if (
      skillsLower.includes("java") || 
      skillsLower.includes("spring") || 
      skillsLower.includes("enterprise") || 
      interestsLower.includes("java") ||
      interestsLower.includes("backend")
    ) {
      careerPathsText += "- Java Developer: Build robust enterprise applications and backend systems.\n";
      careerPathsText += "- Enterprise Architect: Design large-scale software systems for organizations.\n";
      
      jobRolesText += "- Java Developer - [Apply on LinkedIn](https://www.linkedin.com/jobs/java-developer-jobs/)\n";
      jobRolesText += "- Spring Boot Engineer - [Apply on Naukri](https://www.naukri.com/spring-boot-jobs)\n";
      jobRolesText += "- Backend Developer - [Apply on Indeed](https://www.indeed.com/q-java-backend-developer-jobs.html)\n";
      
      roadmapText += "1. Master Java fundamentals - [Oracle Java Tutorial](https://docs.oracle.com/javase/tutorial/)\n";
      roadmapText += "2. Learn Spring Framework - [Spring.io Guides](https://spring.io/guides)\n";
      roadmapText += "3. Understand database integration - [Hibernate Documentation](https://hibernate.org/orm/documentation/)\n";
      roadmapText += "4. Study microservices architecture - [Udemy Spring Microservices](https://www.udemy.com/topic/spring-boot-microservices/)\n";
      roadmapText += "5. Practice with real projects - [Spring Boot Projects](https://www.baeldung.com/spring-boot)\n";
    }
    
    // Mobile development path
    if (
      skillsLower.includes("mobile") || 
      skillsLower.includes("android") || 
      skillsLower.includes("ios") || 
      skillsLower.includes("flutter") || 
      skillsLower.includes("react native") || 
      interestsLower.includes("mobile") ||
      interestsLower.includes("app")
    ) {
      careerPathsText += "- Mobile App Developer: Create applications for iOS and Android platforms.\n";
      careerPathsText += "- Cross-Platform Developer: Build apps that work across multiple mobile platforms.\n";
      
      jobRolesText += "- React Native Developer - [Apply on LinkedIn](https://www.linkedin.com/jobs/react-native-developer-jobs/)\n";
      jobRolesText += "- Android Developer - [Apply on Naukri](https://www.naukri.com/android-developer-jobs)\n";
      jobRolesText += "- iOS Developer - [Apply on Indeed](https://www.indeed.com/q-ios-developer-jobs.html)\n";
      
      roadmapText += "1. Choose your platform - [React Native](https://reactnative.dev/docs/getting-started) or [Flutter](https://flutter.dev/docs/get-started/install)\n";
      roadmapText += "2. Learn mobile UI/UX principles - [Google Material Design](https://material.io/design)\n";
      roadmapText += "3. Master state management - [Redux Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)\n";
      roadmapText += "4. Understand native device features - [Expo Documentation](https://docs.expo.dev/)\n";
      roadmapText += "5. Learn app deployment - [App Store Connect](https://developer.apple.com/app-store-connect/) and [Google Play Console](https://play.google.com/console/about/)\n";
    }
    
    // Cybersecurity path
    if (
      skillsLower.includes("security") || 
      skillsLower.includes("network") || 
      skillsLower.includes("cyber") || 
      interestsLower.includes("security") ||
      interestsLower.includes("hacking") ||
      interestsLower.includes("cyber")
    ) {
      careerPathsText += "- Cybersecurity Analyst: Protect organizations from digital threats and vulnerabilities.\n";
      careerPathsText += "- Security Engineer: Design and implement security systems and protocols.\n";
      
      jobRolesText += "- Security Analyst - [Apply on LinkedIn](https://www.linkedin.com/jobs/security-analyst-jobs/)\n";
      jobRolesText += "- Penetration Tester - [Apply on Naukri](https://www.naukri.com/penetration-tester-jobs)\n";
      jobRolesText += "- Security Consultant - [Apply on Indeed](https://www.indeed.com/q-security-consultant-jobs.html)\n";
      
      roadmapText += "1. Learn network fundamentals - [CompTIA Network+](https://www.comptia.org/certifications/network)\n";
      roadmapText += "2. Study security principles - [Cybrary Free Courses](https://www.cybrary.it/)\n";
      roadmapText += "3. Practice ethical hacking - [TryHackMe](https://tryhackme.com/)\n";
      roadmapText += "4. Understand security frameworks - [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)\n";
      roadmapText += "5. Prepare for certification - [CompTIA Security+](https://www.comptia.org/certifications/security)\n";
    }
    
    // Default recommendations if no matches
    if (!careerPathsText) {
      careerPathsText = "- Software Developer: Build applications across various domains using programming languages and frameworks.\n";
      careerPathsText += "- Technical Project Manager: Lead technical projects and coordinate between stakeholders and development teams.\n";
      
      jobRolesText += "- Junior Developer - [Apply on LinkedIn](https://www.linkedin.com/jobs/junior-developer-jobs/)\n";
      jobRolesText += "- QA Engineer - [Apply on Naukri](https://www.naukri.com/qa-engineer-jobs)\n";
      jobRolesText += "- Technical Support Specialist - [Apply on Indeed](https://www.indeed.com/q-technical-support-specialist-jobs.html)\n";
      
      roadmapText += "1. Choose a programming language - [freeCodeCamp](https://www.freecodecamp.org/)\n";
      roadmapText += "2. Learn fundamental CS concepts - [CS50 on edX](https://www.edx.org/course/introduction-computer-science-harvardx-cs50x)\n";
      roadmapText += "3. Build projects for your portfolio - [GitHub](https://github.com/)\n";
      roadmapText += "4. Practice problem-solving - [LeetCode](https://leetcode.com/)\n";
      roadmapText += "5. Prepare for technical interviews - [Pramp](https://www.pramp.com/)\n";
    }
    
    return {
      careerPaths: careerPathsText,
      jobRoles: jobRolesText,
      learningRoadmap: roadmapText,
      isLoading: false,
      error: null
    };
  } catch (error) {
    console.error("Error generating AI recommendations:", error);
    return {
      careerPaths: "",
      jobRoles: "",
      learningRoadmap: "",
      isLoading: false,
      error: "Failed to generate recommendations. Please try again."
    };
  }
};