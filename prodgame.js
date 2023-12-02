import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import confetti from 'canvas-confetti';
import Axios from 'axios';

const data = [
    {
        option: 'DevSecOps',
        style: {
            backgroundColor: '#3498db',
            textColor: 'white',
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
    },
    {
        option: 'ETAP',
        style: {
            backgroundColor: '#e74c3c',
            textColor: 'white',
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
    },
    {
        option: 'Quality & Agile',
        style: {
            backgroundColor: '#f39c12',
            textColor: 'black',
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
    },
    {
        option: 'Testing',
        style: {
            backgroundColor: '#9b59b6',
            textColor: 'white',
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
    },
    {
        option: 'Pick Your Prize',
        style: {
            backgroundColor: '#00ff00',
            textColor: 'black',
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
    },
    {
        option: 'Better Luck Next Time',
        style: {
            backgroundColor: '#ff0000',
            textColor: 'white',
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: 16,
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
    },
];

const allQuestions = {
  DevSecOps: [
  {
    questionText: 'What is integrating code changes into a repository and testing the new changes called?',
    answerOptions: [
      { answerText: 'Continuous Deployment', isCorrect: false },
      { answerText: 'Continuous Delivery', isCorrect: false },
      { answerText: 'Continuous Integration', isCorrect: true },
      { answerText: 'Continuous Releases', isCorrect: false },
    ],
  },
  {
    questionText: 'Are Agile and DevOps the same philosophy?',
    answerOptions: [
      { answerText: 'Yes', isCorrect: false },
      { answerText: 'No! Way', isCorrect: true },
    ],
  },
  {
    questionText: 'What enables DevOps as it focuses on small teams delivering high-quality code?',
    answerOptions: [
      { answerText: 'Waterfall', isCorrect: false },
      { answerText: 'Agile', isCorrect: true },
      { answerText: 'ITIL', isCorrect: false },
      { answerText: 'Test Driven Development', isCorrect: false },
    ],
  },
  {
    questionText: 'What does APIs stand for?',
    answerOptions: [
      { answerText: 'Approved Production Inspection System', isCorrect: false },
      { answerText: 'Application Programming Interfaces', isCorrect: true },
      { answerText: 'Advanced Passenger Information', isCorrect: false },
      { answerText: 'Annual Poverty Indicators', isCorrect: false },
    ],
  },
  {
    questionText: 'What is DevSecOps?',
    answerOptions: [
      { answerText: 'An extension of the DevOps paradigm.', isCorrect: true },
      { answerText: 'A DevOps tool.', isCorrect: false },
      { answerText: 'A job title', isCorrect: false },
      { answerText: 'The inclusion of security in the DevOps workflow', isCorrect: false },
    ],
  },
  {
    questionText: 'What defines the DevOps process loop?',
    answerOptions: [
      { answerText: 'Plan, build, release, deploy, monitor', isCorrect: false },
      { answerText: 'Code, test, deploy, operate, monitor, plan', isCorrect: false },
      { answerText: 'Plan, code, build, test, deploy, operate, monitor, plan', isCorrect: true },
      { answerText: 'Build, test, release, monitor', isCorrect: false },
    ],
  },
  {
    questionText: 'What problems does DevOps solve?',
    answerOptions: [
      { answerText: 'Long deployment cycles', isCorrect: false },
      { answerText: 'Brittle infrastructure and application code', isCorrect: false },
      { answerText: 'Inefficient or out-of-date applications', isCorrect: false },
      { answerText: 'All of the above', isCorrect: true },
    ],
  },
  {
    questionText: 'DevSecOps Stands for',
    answerOptions: [
      { answerText: 'Development, Separate and Operations', isCorrect: false },
      { answerText: 'Development, Security and Operations', isCorrect: true },
      { answerText: 'Deploy, Security and Operations', isCorrect: false },
      { answerText: 'Development, Separate and Orientation', isCorrect: false },
    ],
  },
  {
    questionText: 'When was DevSecOps created?',
    answerOptions: [
      { answerText: '2001', isCorrect: false },
      { answerText: '2007', isCorrect: false },
      { answerText: '2008', isCorrect: false },
      { answerText: '2009', isCorrect: false },
      { answerText: '2011', isCorrect: true },
    ],
  },
  		 {
        questionText: 'What is a strong password?',
        answerOptions: [
            { answerText: 'A single word', isCorrect: false },
            { answerText: 'A combination of uppercase and lowercase letters, numbers, and special characters', isCorrect: true },
            { answerText: 'Your favorite color', isCorrect: false },
            { answerText: 'The name of your pet', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a zero-day vulnerability?',
        answerOptions: [
            { answerText: 'A type of encryption method', isCorrect: false },
            { answerText: 'A security vulnerability in a software or hardware that is not yet known to the vendor or the public', isCorrect: true },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the principle of least privilege (PoLP) in cybersecurity?',
        answerOptions: [
            { answerText: 'Giving users the highest level of access to all systems and data', isCorrect: false },
            { answerText: 'Limiting users and systems to the minimum level of access necessary to perform their tasks', isCorrect: true },
            { answerText: 'Using biometric authentication for all users', isCorrect: false },
            { answerText: 'Never changing passwords', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a buffer overflow attack?',
        answerOptions: [
            { answerText: 'A type of computer hardware', isCorrect: false },
            { answerText: 'An attack that occurs when a program writes more data to a buffer than it can hold, causing it to overwrite adjacent memory', isCorrect: true },
            { answerText: 'A type of firewall', isCorrect: false },
            { answerText: 'A method of encryption', isCorrect: false },
        ],
    },
    {
        questionText: 'What is multi-factor authentication (MFA)?',
        answerOptions: [
            { answerText: 'A single authentication factor', isCorrect: false },
            { answerText: 'A security process that requires users to provide two or more authentication factors to access an account or system', isCorrect: true },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A social media platform', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a security token?',
        answerOptions: [
            { answerText: 'A type of password', isCorrect: false },
            { answerText: 'A physical or digital device used to generate one-time passwords or access codes for authentication', isCorrect: true },
            { answerText: 'A type of encryption method', isCorrect: false },
            { answerText: 'A hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the difference between antivirus and anti-malware software?',
        answerOptions: [
            { answerText: 'They are the same thing', isCorrect: false },
            { answerText: 'Antivirus software specifically focuses on detecting and removing viruses, while anti-malware software is broader and includes protection against various types of malicious software', isCorrect: true },
            { answerText: 'Antivirus software is for Mac computers, while anti-malware software is for Windows computers', isCorrect: false },
            { answerText: 'Antivirus software is free, while anti-malware software is paid', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the dark web?',
        answerOptions: [
            { answerText: 'A place with no internet access', isCorrect: false },
            { answerText: 'A part of the internet that is not indexed by search engines and is often associated with illegal activities', isCorrect: true },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A social media platform for anonymous users', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a security incident response plan?',
        answerOptions: [
            { answerText: 'A plan for responding to security incidents that includes steps to detect, respond, and recover from security breaches', isCorrect: true },
            { answerText: 'A list of security policies', isCorrect: false },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a honeypot in cybersecurity?',
        answerOptions: [
            { answerText: 'A sweet treat', isCorrect: false },
            { answerText: 'A security mechanism designed to lure and deceive attackers to monitor and study their behavior', isCorrect: true },
            { answerText: 'A type of encryption method', isCorrect: false },
            { answerText: 'A hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a man-in-the-middle (MITM) attack?',
        answerOptions: [
            { answerText: 'An attack that occurs in the middle of a soccer match', isCorrect: false },
            { answerText: 'An attack where an attacker intercepts communication between two parties without their knowledge', isCorrect: true },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the role of a Security Information and Event Management (SIEM) system?',
        answerOptions: [
            { answerText: 'To play music at a security event', isCorrect: false },
            { answerText: 'To collect, analyze, and manage security data and events in real-time to identify and respond to security threats', isCorrect: true },
            { answerText: 'To secure physical access to a building', isCorrect: false },
            { answerText: 'To encrypt data', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the difference between a virus and a worm in cybersecurity?',
        answerOptions: [
            { answerText: 'They are the same thing', isCorrect: false },
            { answerText: 'A virus attaches itself to other files or programs, while a worm is a self-replicating malware that spreads independently', isCorrect: true },
            { answerText: 'A virus is for Windows computers, while a worm is for Mac computers', isCorrect: false },
            { answerText: 'A virus requires a password to spread, while a worm does not', isCorrect: false },
        ],
    },
    {
        questionText: 'What is penetration testing?',
        answerOptions: [
            { answerText: 'Testing the durability of physical barriers', isCorrect: false },
            { answerText: 'Ethical hacking to identify and exploit vulnerabilities in a system to assess its security', isCorrect: true },
            { answerText: 'Testing the speed of an internet connection', isCorrect: false },
            { answerText: 'Testing the effectiveness of antivirus software', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a security policy?',
        answerOptions: [
            { answerText: 'A list of popular security products', isCorrect: false },
            { answerText: 'A set of rules and guidelines that define an organization\'s approach to security', isCorrect: true },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the principle of defense in depth in cybersecurity?',
        answerOptions: [
            { answerText: 'A strategy to always attack first', isCorrect: false },
            { answerText: 'A strategy that involves layering multiple security measures to protect against various threats', isCorrect: true },
            { answerText: 'A type of computer mouse', isCorrect: false },
            { answerText: 'A computer networking protocol', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a security token?',
        answerOptions: [
            { answerText: 'A type of password', isCorrect: false },
            { answerText: 'A physical or digital device used to generate one-time passwords or access codes for authentication', isCorrect: true },
            { answerText: 'A type of encryption method', isCorrect: false },
            { answerText: 'A hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is phishing?',
        answerOptions: [
            { answerText: 'A type of fish', isCorrect: false },
            { answerText: 'A cyberattack where attackers trick individuals into revealing sensitive information', isCorrect: true },
            { answerText: 'A type of encryption', isCorrect: false },
            { answerText: 'A form of online shopping', isCorrect: false },
        ],
    },
    {
        questionText: 'What is two-factor authentication (2FA)?',
        answerOptions: [
            { answerText: 'A type of password', isCorrect: false },
            { answerText: 'A security measure that requires two forms of verification to access an account', isCorrect: true },
            { answerText: 'A type of computer mouse', isCorrect: false },
            { answerText: 'A software program', isCorrect: false },
        ],
    },
  {
    questionText: 'What will securing a Continuous Delivery pipeline include?',
    answerOptions: [
      { answerText: 'Protecting credentials, keys and other secrets', isCorrect: true },
      { answerText: 'Strong access control across the whole toolchain and access audits', isCorrect: true },
      { answerText: 'Safeguarding binaries and other build artifacts against being breached', isCorrect: true },
      { answerText: 'All of the above', isCorrect: true },
    ],
  }
],


// You can add more DevSecOps questions here

  ETAP: [

    {
        questionText: 'What Persona the eDesign Small building application is covering?',
        answerOptions: [{
                answerText: 'A. Electrician',
                isCorrect: false
            },
            {
                answerText: 'B. Small Contractor',
                isCorrect: false
            },
            {
                answerText: 'C. Panel Builder',
                isCorrect: false
            },
            {
                answerText: 'D. All of them',
                isCorrect: true
            },
        ],
    },
    {
        questionText: 'What is one of the outputs of the eDesign Small building application software?',
        answerOptions: [{
                answerText: 'A. CAD Drawing',
                isCorrect: false
            },
            {
                answerText: 'B. NEM File',
                isCorrect: false
            },
            {
                answerText: 'C. SLD',
                isCorrect: false
            },
            {
                answerText: 'D. All of the above',
                isCorrect: true
            },
        ],
    },
    {
        questionText: 'Which project phase does eDesign Small building application help the persona?',
        answerOptions: [{
                answerText: 'A. Specification Phase',
                isCorrect: false
            },
            {
                answerText: 'B. Design Phase',
                isCorrect: false
            },
            {
                answerText: 'C. Maintenance Phase',
                isCorrect: false
            },
            {
                answerText: 'D. Specification and Maintenance Phase',
                isCorrect: true
            },
        ],
    },
    {
        questionText: 'Which country does eDesign Small building not support?',
        answerOptions: [{
                answerText: 'A. Slovakia',
                isCorrect: false
            },
            {
                answerText: 'B. France',
                isCorrect: false
            },
            {
                answerText: 'C. Spain',
                isCorrect: false
            },
            {
                answerText: 'D. Morocco',
                isCorrect: true
            },
        ],
    },
    {
        questionText: 'eDesign small building products are limited to?',
        answerOptions: [{
                answerText: 'A. Schneider products only',
                isCorrect: true
            },
            {
                answerText: 'B. Other company products only',
                isCorrect: false
            },
            {
                answerText: 'C. Schneider and other company products',
                isCorrect: false
            },
            {
                answerText: 'D. APC Products',
                isCorrect: false
            },
        ],
    },
    {
        questionText: 'Can eDesign small building application Configure design and quote?',
        answerOptions: [{
                answerText: 'A. Yes',
                isCorrect: true
            },
            {
                answerText: 'B. No',
                isCorrect: false
            },
            {
                answerText: 'C. ',
                isCorrect: false
            },
            {
                answerText: 'D. ',
                isCorrect: false
            },
        ],
    },
    {
        questionText: 'EcoStruxure Specification can be accessed from anywhere?',
        answerOptions: [{
                answerText: 'A. Yes',
                isCorrect: true
            },
            {
                answerText: 'B. No',
                isCorrect: false
            },
            {
                answerText: 'C. ',
                isCorrect: false
            },
            {
                answerText: 'D. ',
                isCorrect: false
            },
        ],
    },
    {
        questionText: 'Which persona does EcoStruxure Specification belong to?',
        answerOptions: [{
                answerText: 'A. SOFIA',
                isCorrect: true
            },
            {
                answerText: 'B. EDGAR',
                isCorrect: false
            },
            {
                answerText: 'C. PETER',
                isCorrect: false
            },
            {
                answerText: 'D. MIKE',
                isCorrect: false
            },
        ],
    },
    {
        questionText: 'EcoStruxure Specification tool is adopted by specifiers rapidly because it has the following features:',
        answerOptions: [{
                answerText: 'A. Timesaver',
                isCorrect: false
            },
            {
                answerText: 'B. Error-free',
                isCorrect: false
            },
            {
                answerText: 'C. Up-to-date specifications',
                isCorrect: false
            },
            {
                answerText: 'D. All of them',
                isCorrect: true
            },
        ],
    },
    {
        questionText: 'Which project phase does the specification tool help the persona?',
        answerOptions: [{
                answerText: 'A. Design',
                isCorrect: true
            },
            {
                answerText: 'B. Selection Guide',
                isCorrect: false
            },
            {
                answerText: 'C. Configure',
                isCorrect: false
            },
            {
                answerText: 'D. Calculate',
                isCorrect: false
            },
        ],
    },
    {
        questionText: 'How check Electrical Calculation Tool - selectivity tool calculate the selectivity value of circuit breaker?',
        answerOptions: [{
                answerText: 'A. Using colour',
                isCorrect: false
            },
            {
                answerText: 'B. Using curves',
                isCorrect: true
            },
            {
                answerText: 'C. Using type',
                isCorrect: false
            },
            {
                answerText: 'D. Using number of breakers',
                isCorrect: false
            },
        ],
    },
    {
        questionText: 'What Persona does the S&C application cover?',
        answerOptions: [{
                answerText: 'A. Electrician',
                isCorrect: false
            },
            {
                answerText: 'B. Small Contractor',
                isCorrect: false
            },
            {
                answerText: 'C. Panel Builder',
                isCorrect: false
            },
            {
                answerText: 'D. Both A & B',
                isCorrect: true
            },
        ],
    },
    {
        questionText: 'Who uses Semtech CTK to define a selector?',
        answerOptions: [{
                answerText: 'A. LOBs',
                isCorrect: false
            },
            {
                answerText: 'B. Semtech Team',
                isCorrect: false
            },
            {
                answerText: 'C. Sales Team',
                isCorrect: false
            },
            {
                answerText: 'D. All of them',
                isCorrect: true
            },
        ],
    },
    {
        questionText: 'Why is a S&C widget used?',
        answerOptions: [{
                answerText: 'A. To Configure',
                isCorrect: true
            },
            {
                answerText: 'B. To Design',
                isCorrect: false
            },
            {
                answerText: 'C. To Calculate',
                isCorrect: false
            },
            {
                answerText: 'D. To Estimate',
                isCorrect: false
            },
        ],
    },
    {
        questionText: 'Can EcoStruxure Specification be accessed from anywhere?',
        answerOptions: [{
                answerText: 'A. Yes',
                isCorrect: true
            },
            {
                answerText: 'B. No',
                isCorrect: false
            },
            {
                answerText: 'C. Yes',
                isCorrect: false
            },
            {
                answerText: 'D. Yes',
                isCorrect: false
            },
        ],
    },
    {
        questionText: 'Which persona does EcoStruxure Specification belong to?',
        answerOptions: [{
                answerText: 'A. SOFIA',
                isCorrect: true
            },
            {
                answerText: 'B. EDGAR',
                isCorrect: false
            },
            {
                answerText: 'C. PETER',
                isCorrect: false
            },
            {
                answerText: 'D. MIKE',
                isCorrect: false
            },
        ],
    },
    {
        questionText: 'Why is the EcoStruxure Specification tool adopted by specifiers rapidly?',
        answerOptions: [{
                answerText: 'A. Timesave',
                isCorrect: false
            },
            {
                answerText: 'B. Error-free',
                isCorrect: false
            },
            {
                answerText: 'C. Up-to-date specifications',
                isCorrect: false
            },
            {
                answerText: 'D. All of them',
                isCorrect: true
            },
        ],
    },
    {
        questionText: 'Within Schneider, who can access the EcoStruxure Specification tool?',
        answerOptions: [{
                answerText: 'A. Prescription team',
                isCorrect: false
            },
            {
                answerText: 'B. Sales team',
                isCorrect: false
            },
            {
                answerText: 'C. Deployment team',
                isCorrect: false
            },
            {
                answerText: 'D. A & B',
                isCorrect: true
            },
        ],
    },
    {
        questionText: 'Which project phase does the EcoStruxure Specification tool help the persona?',
        answerOptions: [{
                answerText: 'A. Design',
                isCorrect: true
            },
            {
                answerText: 'B. Selection Guide',
                isCorrect: false
            },
            {
                answerText: 'C. Configure',
                isCorrect: false
            },
            {
                answerText: 'D. Calculate',
                isCorrect: false
            },
        ],
    },

],

  'Quality & Agile': [
    {
        questionText: 'What is a key principle of Agile development?',
        answerOptions: [
            { answerText: 'A. Strict adherence to a fixed plan', isCorrect: false },
            { answerText: 'B. Embracing change and responding to customer feedback', isCorrect: true },
            { answerText: 'C. Comprehensive upfront documentation', isCorrect: false },
            { answerText: 'D. Rigid project timelines', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the purpose of a Daily Standup meeting in Agile?',
        answerOptions: [
            { answerText: 'A. To assign tasks to team members', isCorrect: false },
            { answerText: 'B. To report project status to management', isCorrect: false },
            { answerText: 'C. To synchronize and plan the day work', isCorrect: true },
            { answerText: 'D. To review project documentation', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a User Story in Agile development?',
        answerOptions: [
            { answerText: 'A. A detailed software specification', isCorrect: false },
            { answerText: 'B. A fictional character in the project', isCorrect: false },
            { answerText: 'C. A brief description of a user need or feature', isCorrect: true },
            { answerText: 'D. A project timeline chart', isCorrect: false },
        ],
    },
    {
        questionText: 'Which Agile framework emphasizes adaptability and flexibility?',
        answerOptions: [
            { answerText: 'A. Waterfall', isCorrect: false },
            { answerText: 'B. Scrum', isCorrect: false },
            { answerText: 'C. Kanban', isCorrect: true },
            { answerText: 'D. Six Sigma', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the role of a Product Owner in Agile development?',
        answerOptions: [
            { answerText: 'A. Managing the development teams daily tasks', isCorrect: false },
            { answerText: 'B. Prioritizing and defining project requirements', isCorrect: true },
            { answerText: 'C. Conducting code reviews', isCorrect: false },
            { answerText: 'D. Writing test cases', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the Agile Manifesto, and what are its core principles?',
        answerOptions: [
            { answerText: 'A. A set of project management guidelines', isCorrect: false },
            { answerText: 'B. A manifesto emphasizing comprehensive documentation', isCorrect: false },
            { answerText: 'C. A set of guiding values and principles for Agile development', isCorrect: true },
            { answerText: 'D. A framework for traditional waterfall development', isCorrect: false },
        ],
    },
    {
        questionText: 'How can customer feedback be leveraged to improve software quality?',
        answerOptions: [
            { answerText: 'A. Customer feedback is irrelevant in quality assurance', isCorrect: false },
            { answerText: 'B. Customer feedback can help identify defects and areas for improvement', isCorrect: true },
            { answerText: 'C. Customer feedback is used to assign blame for quality issues', isCorrect: false },
            { answerText: 'D. Customer feedback is only relevant for marketing purposes', isCorrect: false },
        ],
    },
    {
        questionText: 'What is Quality?',
        answerOptions: [
            { answerText: 'a) Voice of Customer', isCorrect: false },
            { answerText: 'b) Prevent Cost of poor Quality', isCorrect: false },
            { answerText: 'c) Process and Certifications', isCorrect: false },
            { answerText: 'd) all of the above', isCorrect: true },
        ],
    },
    {
        questionText: 'What are the pillars of the CS&Q in SE?',
        answerOptions: [
            { answerText: 'a) Customer First', isCorrect: true },
            { answerText: 'b) Quality and Sustainability by Design', isCorrect: false },
            { answerText: 'c) Premium Service', isCorrect: false },
            { answerText: 'd) Ultimate experience', isCorrect: false },
        ],
    },
    {
        questionText: 'What value does Quality have in Software development? Multiple choice',
        answerOptions: [
            { answerText: 'a) confidence to deliver to customer', isCorrect: false},
            { answerText: 'b) customer satisfaction', isCorrect: false },
            { answerText: 'c) promotes innovation', isCorrect: false},
            { answerText: 'd) All of the above', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the purpose of root cause analysis in Quality?',
        answerOptions: [
            { answerText: 'a) Failure cause analysis', isCorrect: false },
            { answerText: 'b) get a temporary fix', isCorrect: false },
            { answerText: 'c) eliminate the cause of failure', isCorrect: true },
            { answerText: 'd) All of the above', isCorrect: false },
        ],
    },
    {
        questionText: 'The primary objective of formal technical reviews is to find _________ during the process so that they do not become defects after release of the software.',
        answerOptions: [
            { answerText: 'a) errors', isCorrect: true },
            { answerText: 'b) equivalent faults', isCorrect: false },
            { answerText: 'c) failure cause', isCorrect: false },
            { answerText: 'd) Defects', isCorrect: false },
        ],
    },
    {
        questionText: 'Which term is used for a structured, formal review of program source code against specs to find defects and verify coding techniques',
        answerOptions: [
            { answerText: 'a) Peer Review', isCorrect: false },
            { answerText: 'b) Code walkthrough', isCorrect: false },
            { answerText: 'c) Inspection', isCorrect: true },
            { answerText: 'd) Buddy Review', isCorrect: false },
        ],
    },
    {
        questionText: 'What is Agile framework?',
        answerOptions: [
            { answerText: 'a) Adaptive model', isCorrect: true },
            { answerText: 'b) Predictive Model', isCorrect: false },
            { answerText: 'c) Incremental Model', isCorrect: false },
            { answerText: 'd) all of the above', isCorrect: false },
        ],
    },
    {
        questionText: 'Name the Agile principles listed below -',
        answerOptions: [
            { answerText: 'a) Working software is the primary measure of progress', isCorrect: false  },
            { answerText: 'b) Continuous attention to technical excellence and good design enhances agility.', isCorrect: false  },
            { answerText: 'c) Simplicity--the art of maximizing the amount of work not done--is essential.', isCorrect: false  },
            { answerText: 'd) All of the above', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the full form of SAFE?',
        answerOptions: [
            { answerText: 'a) Scaled Agile Framework', isCorrect: true },
            { answerText: 'b) Secure Agile Framework', isCorrect: false },
            { answerText: 'c) Software Agile Framework', isCorrect: false },
            { answerText: 'd) System Agile Framework', isCorrect: false },
        ],
    },
    {
        questionText: 'Tick the different Agile Methodologies followed',
        answerOptions: [
            { answerText: 'a) Scrum', isCorrect: false  },
            { answerText: 'b) Kanban', isCorrect: false  },
            { answerText: 'c) SAFE', isCorrect: false },
            { answerText: 'd) a, b, & c', isCorrect: true },
        ],
    },
    {
        questionText: 'What does the PO stand for',
        answerOptions: [
            { answerText: 'a) Project Order', isCorrect: false },
            { answerText: 'b) Product Owner', isCorrect: true },
            { answerText: 'c) Product Organization', isCorrect: false },
            { answerText: 'd) Project Owner', isCorrect: false },
        ],
    },
    {
        questionText: 'Sprint Planning is part of which methodology',
        answerOptions: [
            { answerText: 'a) Waterfall', isCorrect: false },
            { answerText: 'b) SAFE', isCorrect: false },
            { answerText: 'c) SCRUM Agile', isCorrect: true },
            { answerText: 'd) Kanban', isCorrect: false },
        ],
    },
],

  Testing: [
{
questionText: 'What is a method of software testing that examines the functionality of an application without looking into its internal structures or working?',
answerOptions: [
{ answerText: 'A. White-box testing', isCorrect: false },
{ answerText: 'B. Black-box testing', isCorrect: true },
{ answerText: 'C. Gray-box Testing', isCorrect: false },
{ answerText: 'D. Glass-box Testing', isCorrect: false },
],
},
{
questionText: 'What is the software testing technique that divides the input data of a test into partitions of equivalent data from which test cases can be derived?',
answerOptions: [
{ answerText: 'A. Boundary value analysis', isCorrect: false },
{ answerText: 'B. Equivalence Partitioning', isCorrect: true },
{ answerText: 'C. Decision table', isCorrect: false },
{ answerText: 'D. State Transition', isCorrect: false },
],
},
{
questionText: 'What is a practice where defects are intentionally inserted into a program by one group for detection by another group?',
answerOptions: [
{ answerText: 'A. Defect Seeding', isCorrect: true },
{ answerText: 'B. Defect Logging', isCorrect: false },
{ answerText: 'C. SQL injection', isCorrect: false },
{ answerText: 'D. Code injection', isCorrect: false },
],
},
{
questionText: 'What is a technique where two team members work together in pair at one system to test the software application?',
answerOptions: [
{ answerText: 'A. Correlation Testing', isCorrect: false },
{ answerText: 'B. Monkey Testing', isCorrect: false },
{ answerText: 'C. Pair Testing', isCorrect: true },
{ answerText: 'D. Buddy Testing', isCorrect: false },
],
},
{
questionText: 'What is a type of testing performed by the end-user or the client to determine whether the product/software can be accepted or not?',
answerOptions: [
{ answerText: 'A. Acceptance Testing', isCorrect: true },
{ answerText: 'B. Integration Testing', isCorrect: false },
{ answerText: 'C. Final Testing', isCorrect: false },
{ answerText: 'D. Accessibility Testing', isCorrect: false },
],
},
{
questionText: 'SaaS stands for',
answerOptions: [
{ answerText: 'A. Software as a System', isCorrect: false },
{ answerText: 'B. Software as a Service', isCorrect: true },
{ answerText: 'C. Software as a Solution', isCorrect: false },
{ answerText: 'D. Software as a Subject', isCorrect: false },
],
},
{
questionText: 'Which testing is performed by real users of the application in a real environment and can be considered as a form of external User Acceptance Testing?',
answerOptions: [
{ answerText: 'A. Alpha Testing', isCorrect: false },
{ answerText: 'B. Gamma Testing', isCorrect: false },
{ answerText: 'C. Beta Testing', isCorrect: true },
{ answerText: 'D. User Acceptance Testing', isCorrect: false },
],
},
{
questionText: '____ is determined by the functional impact of the bug or impact on the application',
answerOptions: [
{ answerText: 'A. Priority', isCorrect: false },
{ answerText: 'B. Severity', isCorrect: true },
{ answerText: 'C. Risk of the bug on application', isCorrect: false },
{ answerText: 'D. Functionality', isCorrect: false },
],
},
{
questionText: 'What is a type of software testing where testing is done without proper or formal documented Test Cases. The idea is to explore the application as users and find the defect',
answerOptions: [
{ answerText: 'A. Adhoc Testing', isCorrect: true },
{ answerText: 'B. Monkey Testing', isCorrect: false },
{ answerText: 'C. Exploratory testing', isCorrect: false },
{ answerText: 'D. Informal testing', isCorrect: false },
],
},
{
questionText: 'What is a type of change-related testing performed after fixing a defect to confirm that a failure caused by that defect does not reoccur',
answerOptions: [
{ answerText: 'A. Confirmation Testing', isCorrect: true },
{ answerText: 'B. Sanity Testing', isCorrect: false },
{ answerText: 'C. Regression Testing', isCorrect: false },
{ answerText: 'D. Smoke Testing', isCorrect: false },
],
},
],
}; // Assuming you fill this with your questions

const ResultsScreen = ({ score, totalQuestions, onPlayAgainClick }) => {
  const didWin = score >= 5;

  return (
    <div className="results-screen">
      <h1>{didWin ? 'Congratulations!' : 'Sorry, you didn\'t win.'}</h1>
      <p>You scored {score} out of {totalQuestions}</p>
      <button onClick={onPlayAgainClick}>Home</button>
    </div>
  );
};

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicCounts, setTopicCounts] = useState({});
  const [showScore, setShowScore] = useState(false);

  const selectPrizeIndexWithCustomProbability = () => {
    const probabilities = [20, 20, 20, 20, 5, 15]; // Custom probabilities
    let total = probabilities.reduce((acc, val) => acc + val, 0);
    let random = Math.random() * total;

    for (let i = 0; i < probabilities.length; i++) {
      if (random < probabilities[i]) {
        return i;
      }
      random -= probabilities[i];
    }
    return 0; // Default return if needed
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = selectPrizeIndexWithCustomProbability();
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setShowQuiz(false);
      setCurrentQuestion(0);
      setScore(0);
      setTimer(60);
    }
  };

  useEffect(() => {
    let countdownTimer;

    if (showQuiz && timer > 0) {
      countdownTimer = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    if (timer === 0) {
      handleNextQuestion();
    }

    return () => {
      clearInterval(countdownTimer);
    };
  }, [showQuiz, timer]);

  const handleStopSpinning = () => {
    setMustSpin(false);
    const selectedTopic = data[prizeNumber].option;
    setSelectedTopic(selectedTopic);

    const updatedCounts = { ...topicCounts };
    updatedCounts[selectedTopic] = (updatedCounts[selectedTopic] || 0) + 1;
    setTopicCounts(updatedCounts);

    Axios.post('http://172.104.206.11:5000/count', {
      topic: selectedTopic,
      count: updatedCounts[selectedTopic],
    })
      .then((response) => {
        console.log('Count sent to server:', response.data);
      })
      .catch((error) => {
        console.error('Error sending count to server:', error);
      });

    if (selectedTopic === 'Pick Your Prize') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setShowQuiz(false);
    } else if (selectedTopic === 'Better Luck Next Time') {
      console.log('No questions');
      setShowQuiz(false);
    } else {
      const shuffledQuestions = shuffleArray(allQuestions[selectedTopic].slice());
      setQuestions(shuffledQuestions.slice(0, 7));
      setShowQuiz(true);
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(60);
    } else {
      if (score >= 5) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
      setShowScore(true);
    }
  };

  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const handlePlayAgainClick = () => {
    setMustSpin(false);
    setPrizeNumber(0);
    setQuestions([]);
    setShowQuiz(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimer(60);
    setSelectedTopic(null);
    setShowScore(false);
  };

   return (
    <div className="app">
      {showScore ? (
        <ResultsScreen
          score={score}
          totalQuestions={questions.length}
          onPlayAgainClick={handlePlayAgainClick}
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div>
            {!showQuiz ? (
              <div>
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={data}
                  onClick={handleSpinClick}
                  onStopSpinning={handleStopSpinning}
                  pointerProps={{
                    src: 'https://raw.githubusercontent.com/krizzsk/questions/main/bg-remove-removebg-preview.png',
                style: { width: '60px', height: '60px' },}}
                />
                 <button onClick={handleSpinClick} className="center" style={{ fontSize: '20px', padding: '10px 10px', textAlign: 'center' }}>
                  SPIN
                </button>
              </div>
            ) : (
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
                <div className='timer'>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      border: '4px solid #3498db',
                      borderTop: '4px solid #ffffff',
                      borderRadius: '50%',
                      animation: 'timer-animation linear infinite',
                      animationDuration: `${timer}s`,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '24px',
                      marginRight: '30px',
                    }}
                  >
                    {timer}
                  </div>
                </div>
              </div>
            )}
          </div>
          {showQuiz && (
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      <style>
        {`
          @keyframes timer-animation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
