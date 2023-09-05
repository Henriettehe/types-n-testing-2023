interface Question {
    question: string;
    answers: string[];
  }
  
  interface Survey {
    name: string;
    questions: Question[];
  }
  
  const surveys: Survey[] = [];
  
  export function getSurveys(): Survey[] {
    return surveys;
  }
  
  export function createSurvey(name: string, questions: Question[]): Survey | Error[] {
    if (!name) new Error('Name is required');
    //Den klaget på return, fjernet return. Da det Javascript. 
    if (typeof name !== 'string') new Error('Name must be a string');
    if (name.trim().length < 3) new Error('Name must be at least 3 characters long');
  
    const survey: Survey = {
      name,
      questions: [],
    };
    surveys.push(survey);
  
    if (Array.isArray(questions)) {
      const questionErrors: Error[] = [];
      for (const question of questions) {
        try {
          if (typeof question !== 'object') throw new Error('Question must be an object');
          if (!question.question) throw new Error('Question must have a question property');
          if (typeof question.question !== 'string') throw new Error('Question must have a string question property');
          if (!question.answers) throw new Error('Question must have an answers property');
          if (!Array.isArray(question.answers)) throw new Error('Question answers must be an array');
          if (question.answers.length < 2) throw new Error('Question must have at least 2 answers');
          if (question.answers.some((answer) => typeof answer !== 'string'))
            throw new Error('Question answers must be strings');
  
          survey.questions.push({
            question: question.question,
            answers: question.answers,
          });
        } catch (e) {
          questionErrors.push(e);
        }
      }
      if (questionErrors.length > 0) return questionErrors;
    }
  
    return survey;
  }
  