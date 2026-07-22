// TODO: Replace with real data
// Mock data for Education section — updated based on CV (Nguyen Mai Tran Hoang / Wiliam Mai)

import { Education } from '@/shared/types';

export const educationMock: Education[] = [
  {
    id: 'edu-1',
    institution: 'Can Tho University',
    institutionLogo: { src: 'https://res.cloudinary.com/qx3qcmnz/image/upload/v1784602580/OIP_pxfvnx.jpg', alt: 'Can Tho University Logo', width: 80, height: 80 },
    degree: 'Bachelor of Information Technology',
    major: 'Software Systems',
    period: { startDate: '2020-10', endDate: '2025-09' },
    gpa: '3.68 / 4.0',
    certificates: [],
    awards: [],
    activities: [
      'Participated in Software Engineering club activities and peer coding sessions',
      'Collaborated with classmates on group projects applying agile-style workflows',
    ],
    photos: [
      {
        src: 'https://res.cloudinary.com/qx3qcmnz/image/upload/v1784671657/fb45faa7-dd59-442f-9f81-da3040964ef8-1_all_3391_zm2ogi.jpg',
        alt: 'Graduation Day',
        width: 800,
        height: 600,
        category: 'graduation',
        date: '2025-09',
        description: 'Graduation ceremony at Can Tho University',
      },
      {
        src: 'https://res.cloudinary.com/qx3qcmnz/image/upload/v1784671658/fb45faa7-dd59-442f-9f81-da3040964ef8-1_all_3389_rerqzh.jpg',
        alt: '',
        width: 800,
        height: 600,
        category: '',
        date: '2021-03',
        description: '',
      },
      {
        src: 'https://res.cloudinary.com/qx3qcmnz/image/upload/v1784671658/fb45faa7-dd59-442f-9f81-da3040964ef8-1_all_3447_dfvmc6.jpg',
        alt: '',
        width: 800,
        height: 600,
        category: '',
        date: '2022-05',
        description: '',
      },
      {
        src: 'https://res.cloudinary.com/qx3qcmnz/image/upload/v1784671657/fb45faa7-dd59-442f-9f81-da3040964ef8-1_all_3380_orj0lx.jpg',
        alt: '',
        width: 800,
        height: 600,
        category: '',
        date: '2025-06',
        description: '',
      },
      {
        src: 'https://res.cloudinary.com/qx3qcmnz/image/upload/v1784671657/fb45faa7-dd59-442f-9f81-da3040964ef8-1_all_3386_gsowkx.jpg',
        alt: '',
        width: 800,
        height: 600,
        category: '',
        date: '2023-02',
        description: '',
      },
      {
        src: 'https://res.cloudinary.com/qx3qcmnz/image/upload/v1784671657/fb45faa7-dd59-442f-9f81-da3040964ef8-1_all_3371_p6iahc.jpg',
        alt: '',
        width: 800,
        height: 600,
        category: '',
        date: '2023-02',
        description: '',
      },
      {
        src: 'https://res.cloudinary.com/qx3qcmnz/image/upload/v1784697412/fb45faa7-dd59-442f-9f81-da3040964ef8-1_all_2567_zovca3.jpg',
        alt: '',
        width: 800,
        height: 600,
        category: '',
        date: '2023-02',
        description: '',
      },
    ],
    summary: 'Completed a Bachelor\'s degree in Information Technology with a focus on Software Systems at Can Tho University, graduating with a 3.68 GPA. Built a strong foundation in software architecture, database design, and full-stack web development through coursework and the capstone project.',
    achievements: [
      'Capstone Project: Car Services Booking — served as Full-Stack Developer, managing end-to-end development from database architecture to client-side UI optimization',
    ],
    type: 'university',
  },
];