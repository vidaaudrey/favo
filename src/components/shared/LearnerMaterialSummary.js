// @flow
import * as React from 'react';
import { Box, color } from '@coursera/coursera-ui';
import { SvgReading } from '@coursera/coursera-ui/svg';
import moment from 'moment';

const ICON_SIZE = 32;

export type OnDemandLearningMaterials = {
  totalQuizzesCount: number,
  totalVideoLectureCount: number,
  totalReadingCount: number,
  totalLectureDuration: number,
};

// TODO(Audrey): add translation
export default function LearnerMaterialSummary({
  totalVideoLectureCount,
  totalLectureDuration,
  totalReadingCount,
  totalQuizzesCount,
}: OnDemandLearningMaterials) {
  let summary = `${totalVideoLectureCount} videos`;
  if (totalLectureDuration > 0) {
    summary += `(Total ${moment.duration(totalLectureDuration).minutes()} min), `;
  }
  if (totalReadingCount > 0) {
    summary += `${totalReadingCount} readings, `;
  }
  if (totalQuizzesCount > 0) {
    summary += `${totalQuizzesCount} quizzes`;
  }

  return (
    <Box alignItems="center">
      <SvgReading size={ICON_SIZE} color={color.secondaryText} />
      <span className="m-x-1s font-sm text-secondary">{summary}</span>
    </Box>
  );
}
