import Groq from "@groq/groq-sdk";

// Initialize the Groq API with environment variable
const API_KEY = import.meta.env.VITE_GROQ_API_KEY || "YOUR_GROQ_API_KEY";

// Create a more efficient prompt template for career recommendations
const createPrompt = (currentSkills: string, interests: string, careerGoals: string) => {
  return `
Provide concise career guidance based on the following information:
- Current Skills: ${currentSkills}
- Interests: ${interests}
- Career Goals: ${careerGoals}

Format your response in three short sections:
1. RECOMMENDED_CAREER_PATHS: List 2-3 suitable career paths with a one-sentence description for each.
2. JOB_ROLES: List 3-4 specific job titles that match their profile.
3. LEARNING_ROADMAP: Provide a brief, step-by-step learning path with 3-5 key skills to develop.

Keep each section brief and actionable. Total response should be under 300 words.
`;
};

export interface AIRecommendationResponse {
  careerPaths: string;
  jobRoles: string;
  learningRoadmap: string;
  isLoading: boolean;
  error: string | null;
}

export const getAIRecommendations = async (
  currentSkills: string,
  interests: string,
  careerGoals: string
): Promise<AIRecommendationResponse> => {
  try {
    // For safety, check if API key is set
    if (API_KEY === "YOUR_GROQ_API_KEY") {
      return {
        careerPaths: "Please set your Groq API key in the .env file.",
        jobRoles: "",
        learningRoadmap: "",
        isLoading: false,
        error: "API key not configured"
      };
    }

    const groq = new Groq({
      apiKey: API_KEY,
    });
    
    const prompt = createPrompt(currentSkills, interests, careerGoals);
    
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",  // Using Llama 3 8B model for efficiency
    });

    const text = completion.choices[0]?.message?.content || "";
    
    // Parse the response into sections
    const careerPathsMatch = text.match(/RECOMMENDED_CAREER_PATHS:(.*?)(?=JOB_ROLES:|$)/s);
    const jobRolesMatch = text.match(/JOB_ROLES:(.*?)(?=LEARNING_ROADMAP:|$)/s);
    const roadmapMatch = text.match(/LEARNING_ROADMAP:(.*?)(?=$)/s);
    
    return {
      careerPaths: careerPathsMatch ? careerPathsMatch[1].trim() : "No career paths found",
      jobRoles: jobRolesMatch ? jobRolesMatch[1].trim() : "No job roles found",
      learningRoadmap: roadmapMatch ? roadmapMatch[1].trim() : "No learning roadmap found",
      isLoading: false,
      error: null
    };
  } catch (error) {
    console.error("Error getting AI recommendations:", error);
    return {
      careerPaths: "",
      jobRoles: "",
      learningRoadmap: "",
      isLoading: false,
      error: "Failed to get AI recommendations. Please try again later."
    };
  }
};