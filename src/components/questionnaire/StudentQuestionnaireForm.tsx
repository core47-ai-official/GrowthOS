import React from 'react';
import { QuestionItem, QuestionnaireResponse } from '@/types/questionnaire';
import { QuestionnaireWizard } from './QuestionnaireWizard';

interface StudentQuestionnaireFormProps {
  questions: QuestionItem[];
  onComplete: (responses: QuestionnaireResponse[]) => void;
  isLoading?: boolean;
}

export const StudentQuestionnaireForm: React.FC<StudentQuestionnaireFormProps> = ({
  questions,
  onComplete,
  isLoading = false
}) => {
  console.log('StudentQuestionnaireForm: Rendering with', { 
    questionCount: questions?.length || 0, 
    hasQuestions: !!questions,
    isLoading,
    firstQuestion: questions?.[0]?.text
  });

  return (
    <QuestionnaireWizard
      questions={questions}
      onComplete={onComplete}
      isLoading={isLoading}
    />
  );
};