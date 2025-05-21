import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import { GiBlackBook } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';

const EducationItem = ({ institution, degree, year, GPA, index }) => {
  const icons = [FaGraduationCap, GiBlackBook, MdSchool];
  const Icon = icons[index % icons.length]; // Select an icon based on index

  const iconColors = ['#1abc9c', '#3498db', '#e74c3c']; // Different colors for each icon

  return (
    <VerticalTimelineElement
      className={`${
        index % 2 === 0 ? 'left-effect' : 'right-effect'
      } bounce-in-with-color`}
       contentStyle={{ background: '#e0ffcd' }}
      contentArrowClassName="vertical-timeline-element-arrow"
      date={year}
      iconStyle={{ background: iconColors[index % icons.length], color: '#fff' }}
      icon={<Icon />}
    >
      <div className="timeline-element">
        <h3 className="vertical-timeline-element-title">{degree}</h3>
        <h4 className="vertical-timeline-element-subtitle">{institution}</h4>
        <p className="gpa">GPA: {GPA}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const educationData = [
    {
      institution: 'Aditya College Of Engineering',
      degree: 'Bachelor Of Computer Science-(B.Tech)',
      year: '2023',
      GPA: '6.3',
    },
    {
      institution: 'Sri Prakash Junior College',
      degree: 'Board Of Intermediate Education-(BIE)',
      year: '2016',
      GPA: '8.75',
    },
    {
      institution: 'Narayana Techno School',
      degree: 'Board Of Secondary education-(SSC)',
      year: '2014',
      GPA: '8.7',
    },
  ];

  return (
    <div className="education-section">
      <VerticalTimeline>
        {educationData.map((education, index) => (
          <EducationItem key={index} index={index} {...education} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;







 