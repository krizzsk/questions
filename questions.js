 const allQuestions = [
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
        questionText: 'What is malware?',
        answerOptions: [
            { answerText: 'A type of computer hardware', isCorrect: false },
            { answerText: 'A malicious software designed to harm or gain unauthorized access to computer systems', isCorrect: true },
            { answerText: 'A computer networking protocol', isCorrect: false },
            { answerText: 'A type of computer monitor', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a firewall?',
        answerOptions: [
            { answerText: 'A physical barrier around a computer', isCorrect: false },
            { answerText: 'A software or hardware security system that monitors and controls incoming and outgoing network traffic', isCorrect: true },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A computer hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What does HTTPS stand for?',
        answerOptions: [
            { answerText: 'Hypertext Transfer Protocol Secure', isCorrect: true },
            { answerText: 'Hyperlink and Text Transfer System', isCorrect: false },
            { answerText: 'Hypertext Text Protocol System', isCorrect: false },
            { answerText: 'Highly Encrypted Transmission Protocol', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a DDoS attack?',
        answerOptions: [
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A Distributed Denial of Service attack where multiple compromised computers are used to flood a target system with traffic', isCorrect: true },
            { answerText: 'A type of encryption method', isCorrect: false },
            { answerText: 'A form of online shopping', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a virus in the context of computer security?',
        answerOptions: [
            { answerText: 'A type of bacteria that affects computers', isCorrect: false },
            { answerText: 'A malicious software that attaches itself to other programs and spreads to infect more computers', isCorrect: true },
            { answerText: 'A computer hardware component', isCorrect: false },
            { answerText: 'A type of firewall', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a VPN?',
        answerOptions: [
            { answerText: 'A virtual public network', isCorrect: false },
            { answerText: 'A Virtual Private Network that provides a secure and encrypted connection over the internet', isCorrect: true },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A social media platform', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a data breach?',
        answerOptions: [
            { answerText: 'A secure way of sharing data', isCorrect: false },
            { answerText: 'An incident where sensitive or confidential data is accessed, stolen, or exposed by unauthorized individuals or entities', isCorrect: true },
            { answerText: 'A type of encryption method', isCorrect: false },
            { answerText: 'A computer hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is encryption?',
        answerOptions: [
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A process of converting data into a code to prevent unauthorized access', isCorrect: true },
            { answerText: 'A hardware component', isCorrect: false },
            { answerText: 'A type of firewall', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a brute force attack?',
        answerOptions: [
            { answerText: 'A physical attack on a computer', isCorrect: false },
            { answerText: 'A method of trying all possible combinations of passwords or keys until the correct one is found', isCorrect: true },
            { answerText: 'A type of computer mouse', isCorrect: false },
            { answerText: 'A computer networking protocol', isCorrect: false },
        ],
    },
    {
        questionText: 'What is social engineering?',
        answerOptions: [
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A manipulative technique used by cybercriminals to trick individuals into revealing confidential information or performing actions against their will', isCorrect: true },
            { answerText: 'A computer hardware component', isCorrect: false },
            { answerText: 'A type of encryption method', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a security patch?',
        answerOptions: [
            { answerText: 'A piece of cloth used for computer security', isCorrect: false },
            { answerText: 'A software update designed to fix vulnerabilities or security issues in a computer program or system', isCorrect: true },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a firewall?',
        answerOptions: [
            { answerText: 'A physical barrier around a computer', isCorrect: false },
            { answerText: 'A software or hardware security system that monitors and controls incoming and outgoing network traffic', isCorrect: true },
            { answerText: 'A type of computer mouse', isCorrect: false },
            { answerText: 'A computer virus', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a phishing email?',
        answerOptions: [
            { answerText: 'An email from a fishing company', isCorrect: false },
            { answerText: 'A deceptive email that appears to be from a legitimate source but is designed to trick recipients into revealing sensitive information', isCorrect: true },
            { answerText: 'An email with a lot of fish pictures', isCorrect: false },
            { answerText: 'An email with spelling mistakes', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a strong authentication method?',
        answerOptions: [
            { answerText: 'Using the same password for multiple accounts', isCorrect: false },
            { answerText: 'Using biometric data like fingerprints or facial recognition', isCorrect: true },
            { answerText: 'Writing down passwords on sticky notes', isCorrect: false },
            { answerText: 'Never changing passwords', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a vulnerability in cybersecurity?',
        answerOptions: [
            { answerText: 'A strength in a computer system', isCorrect: false },
            { answerText: 'A weakness or flaw in a computer system that can be exploited by attackers', isCorrect: true },
            { answerText: 'A type of computer virus', isCorrect: false },
            { answerText: 'A hardware component', isCorrect: false },
        ],
    },
    {
        questionText: 'What is ransomware?',
        answerOptions: [
            { answerText: 'A type of computer game', isCorrect: false },
            { answerText: 'Malicious software that encrypts a user\'s files and demands a ransom for their release', isCorrect: true },
            { answerText: 'A secure way to store data', isCorrect: false },
            { answerText: 'A computer networking protocol', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a data breach?',
        answerOptions: [
            { answerText: 'A secure way of sharing data', isCorrect: false },
            { answerText: 'An incident where sensitive or confidential data is accessed, stolen, or exposed by unauthorized individuals or entities', isCorrect: true },
            { answerText: 'A type of encryption method', isCorrect: false },
            { answerText: 'A computer hardware component', isCorrect: false },
        ],
    },
];
