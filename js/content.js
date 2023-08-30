const axios = require('axios')
const content = {
    professionalProfile: 'I am currently a software engineer at Black Cape based out in the DMV area. ' +
        'I attended the illustrious Howard University where I obtained my bachelor’s degree in Computer Information Systems. ' +
        'While completing my undergraduate degree I taught myself Ruby on Rails and applied this knowledge to several projects and local hackathons. ' +
        'One of my notable contributions was to the US Presidential Innovation Fellow, Hack the Pay Gap.\n' +
        'Outside of building amazing applications, I volunteer with Black Girls Code as a Technical Lead and , I volunteer as a hackathon organizer for Howard University’s hackathon Bison Hacks. ' +
        'As of 2018, I was nominated as DCA Live Power Women in Tech. ' +
        'When I am not volunteering or coding I like to spend my free doing arts & craft and gaming. \n',
    skillsSubHeader: 'A jack of all trades is a master of none, but oftentimes better than a master of one.',
    yearsOfExp: 7,
    technologiesSubHeader: 'Here is a list of technologies that I have used professionally and leisurely.',
    databases: [
        'MongoDB',
        'MySQL',
        'PostgresSQL',
        'Firebase'
    ],
    cloudTechnologies: [
        'AWS',
        'Digital Ocean',
        'Nginx',
        'Kubernetes',
        'Docker',
        'Ansible',
        'Salt',
        'Puppet',
        'Linux'
    ],
    toolingLibraries: [
        'Gitlab CI/CD',
        'Github CI/CD',
        'Postman',
        'Jenkins',
        'Celery',
        'React.JS',
        'FastAPI',
        'Node.JS',
        'Jupyter Notebook'
    ],
    programmingLanguagesSubHeader: 'Here is a list of programming languages that I have used professionally and leisurely.',
    programmingLanguage: [
        {
            id: 'progressBarOne',
            percentage: '85%',
            language: 'JavaScript',
            proficiency: 'Proficient'
        },
        {
            id: 'progressBarTwo',
            percentage: '80%',
            language: 'Python',
            proficiency: 'Proficient'
        },
        {
            id: 'progressBarThree',
            percentage: '75%',
            language: 'Ruby',
            proficiency: 'Competent'
        },
        {
            id: 'progressBarFour',
            percentage: '30%',
            language: 'Java',
            proficiency: 'Novice'
        }
    ],
    experienceSubHeader: 'I embarked on my software journey on "Ada Lovelace Day", October 13, 2015. Below is a more in-depth detail on what I have accomplished in each of my roles.',
    experience: [
        {
            companyName:'Starting With Today',
            position: 'Director of Data Evaluation',
            years:'2023 - Present',
            icon: 'fa-solid fa-hand-holding-heart',
            description: [
                'Identify performance and impact gaps, and lead the development to resolving them.',
                'Served as data advisor to external partnerships and shareholders.',
                'Utilize analytical instruments to enhance qualitative information and analysis with data-driven observations.',
                'Create, experiment with, and monitor reactions to a variety of assessment methods and surveys, aiming to consistently evaluate the effectiveness and influence of Starting With Today across different initiatives and throughout time.',
                'Supervise the data collection, data-driven reporting, and analysis for Starting With Today, while contributing to the establishment of performance standards for individual participants, seminar groups, and the organization as a whole.'
            ]
        },
        {
            companyName:'Monumental Sports',
            position: 'Software Engineer',
            years:'2023 - 2023',
            icon: 'fa fa-basketball-ball',
            description: [
                'Setup internal documentation for all microservices, resources and pipelines.'
            ]
        },

        {
            companyName:'Black Cape',
            position: 'SR. Software Engineer',
            years:'2019 - Present',
            icon: 'fa fa-rocket',
            description: [
                'Build out data extraction pipeline for Natural Language Processing on employee resume information.',
                'Converted Fast APIs to communicate through REST interface instead of Protocol Buffers.',
                'Built data sync processes and REST APIs in React.JS and Hapi.JS to support a Human resource application that serves approximately 500 users.'
            ]
        },
        {
            companyName:'Mapbox',
            position: 'Software Engineer',
            years:'2018 - 2019',
            icon: 'fa fa-map-marker',
            description: [
                'Developed, tested and deployed "Atlas Boundaries" for Mapbox on-premise software mapping solution called "Atlas."',
                'Integrated Docker and Kubernetes to create a secure, reliable, and scalable container-based platform deployable to any cloud service.',
                'Delivered Mapbox APIs and tools in a on-premise and scalable microservice environment.',
                'Created Node.JS script to draw bounding boxes on images pulled from AWS Kinesis and store them in AWS S3 buckets.'
            ]
        },
        {
            companyName:'Digital Globe',
            position: 'Software Engineer',
            years:'2016 - 2018',
            icon: 'fa fa-globe',
            description: [
                'Improved a legacy application usage of Elasticsearch by implementing the built in queries from the tool to correctly.',
                'Established Jenkins and GitLab CI jobs to support continuous delivery in code integrity and quality.',
                'Implemented endpoints in microservices to maintain clients growing demands of the enterprise data analysis platform.'
            ]
        },
        {
            companyName:'HumanGeo',
            position: 'JR. Software Engineer',
            years:'2015 - 2018',
            icon: 'fa fa-users',
            description: [
                'Implemented a series of scripts in Ruby to collect geographical and government data in Mid-East hemisphere.',
                'Transported microservices into Docker containers to improve developer and production experience.',
                'Developed and created CI/CD pipeline for assets repository to support branding in a series of mission applications.'
            ]
        }
    ],
    educationSubHeader: 'Education is one thing no one can take away from you.',
    education: [
        {
            universityName: 'Howard University',
            major: 'Information Systems',
            degreeType: 'B.S.',
            icon: 'fa fa-laptop',
            description: 'Information Systems program focuses on educating students to create and apply business solutions which integrate information systems technologies and analytical knowledge. Students are prepared to produce solutions of the highest quality through focused study of people, processes and technology.'
        }
    ],
    awards: [
        {
            year: '2018',
            name: 'DCA Live Power Women Tech',
            link: 'http://dca-live.com/2018-new-power-women-of-tech '
        }
    ],
    talks: [
        {
            title: 'Wonder Women Tech Panel',
            link: 'https://wonderwomentech.com/speaker/zuri-hunter/'
        },
        {
            title: "Rails Conf 2017 Panel: Ruby's Killer Feature The Community",
            link: 'https://www.youtube.com/watch?v=6w_cSs9weWw'
        },
        {
            title: 'K8s & <3Bre8ks: Introduction to Kubernetes',
            link: 'https://www.youtube.com/watch?v=nzvuGhjk7Ns'
        },
        {
            title: '4C or Not 4C? That is the question... A War Story on learning about Convolutional Neural Networks',
            link: 'https://www.youtube.com/watch?v=LtqaumBsuPM'
        }

    ],
    podcasts: [
        {
            title: 'Episode 15: Zuri Hunter as Queen of Hackathons',
            podcast: 'Greater Than Code',
            link: 'https://www.greaterthancode.com/queen-of-hackathons'
        },
        {
            title: 'Episode 237: Tech Talent comes from more than just a Computer Science degree.',
            podcast: "What's Working in Washington",
            link: 'https://admin.podcastone.com/episode/Whats-Working-in-Washington---Ep-237---Tech-talent-comes-from-more-than-just-a-computer-science-degree---Zuri-Hunter'
        }
    ],
    publications: [
        {
            title: 'Beginner Friendly Introduction to GitLab CI/CD',
            link: 'https://dev.to/zurihunter/beginner-friendly-introduction-to-gitlabcicd-4p5a',
        },
        {
            title: 'How I Built My First Twitch Both with Natural Language Processing',
            link: 'https://dev.to/zurihunter/how-i-built-my-first-twitch-bot-with-nlu-fid'
        },
        {
            title: 'Meet Zuri: Queen of Hackathons',
            link: 'http://blog.codewithveni.com/meet-zuri-queen-hackathons/'
        }
    ],
    portfolioSubHeader: 'This is a detailed list of all of side projects that I have worked on in my past time.',
    contactSubHeader: 'Please feel free to reach out to me if you are interested in having me on as a speaker and drop a follow on social media.',
    socialMedia: {
        twitter: 'https://twitter.com/ZuriHunter',
        linkedin: 'https://www.linkedin.com/in/zuri-hunter-748ba514/',
        twitch: 'https://www.twitch.tv/thestrugglingblack',
        gitlab: 'https://www.gitlab.com/thestrugglingblack',
        github: 'https://www.github.com/thestrugglingblack'
    }

}

module.exports = {
    content
}