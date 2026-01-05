export const work_data = [
    {
        companyName: "Capital One",
        companyLogo: `${process.env.PUBLIC_URL}/assets/companies/capitalOne.png`,
        type: "internship",
        dates: ["september 2025", "december 2025"],
        position: "Software Engineer",
        skills: ["React", "Typescript", "AWS", "S3 Buckets", "APIs", "Splunk", "Docker", "Infrastructure", "CI/CD"], 
        description: [
            "Improved customer onboarding flows by ~45% by integrating Smarty API with existing Capital One services to implement address validation, sanitization and intelligent prefill in Typescript.",
            "Developed a React feature that improved occupation search performance by 24%, optimizing component rendering, state management and data fetching.",
            "Led a cyber compliance initiative to identify and mitigate API security vulnerabilities; implemented recursive request field validation and sanitization to safeguard an external API against SQL injection.",
            "Maintained and optimized infrastructure services, including S3 buckets, Docker containers, and CI/CD deployment pipelines to ensure reliable and scalable operations."
        ]
    },
    {
        companyName: "Royal Bank of Canada (RBC)",
        companyLogo: `${process.env.PUBLIC_URL}/assets/companies/rbc.png`,
        type: "internship",
        dates: ["january 2025", "may 2025"],
        position: "Data Engineer",
        skills: ["Python", "Node JS", "Azure DB", "Databricks", "Fast APIs", "S3 Buckets", "Airflow", "Gen AI"], 
        description: [
            "Enhanced APIs in Node JS to migrate data services from Azure DB to Databricks.",
            "Developed a Python workflow that queried, fetched and downloaded 1M+ entries of data to AWS S3 buckets in Databricks notebooks, triggered by an internal API.",
            "Created a script to automate manualtesting by extracting and formatting relevant data from 100+ Airflow DAG runs.",
            "Deployed a Fast APIs app that scrapes web links and summarizes 10+ pages of content into several sentences using GenAI, saving 20+ hours of work/week and $24K annually."
        ]
    },
    {
        companyName: "Health Network (UHN)",
        companyLogo: `${process.env.PUBLIC_URL}/assets/companies/uhn.png`,
        type: "internship",
        position: "Full-Stack Web Developer",
        dates: ["may 2024", "august 2024"],
        skills: ["APIs", "React", "Typescript", "Node JS", "dotCMS", "JSON", "Fetch algorithms"], 
        description: [
            "Created APIs and scripts to automate the migration process of 1300+ articles from the old UHN intranet website.",
            "Created and enhanced data-fetching scripts and generated JSON databases that improved the efficiency and simplicity of maintaining up-to-date content for 7+ of the organization’s projects.",
            "Worked on dotCMS backend server to improve and restructure the applications’ components and data containers.",
            "Created and improved RESTful APIs to enhance UX by efficiently gathering and working with user information."
        ]
    },
    {
        companyName: "Fearless+",
        companyLogo: `${process.env.PUBLIC_URL}/assets/companies/fearless.png`,
        type: "internship",
        position: "Junior Developer",
        dates: ["april 2022", "may 2023"],
        skills: ["Javascript", "HTML", "CSS", "JSON", "WordPress", "BRDs"], 
        description: [
            "Developed and maintained organization's website using JavaSciprt, CSS, HTML and JSON in WordPress framework.",
            "Designed,tested and evaluated the frontend and backend of the web application that was created for over 300 users to help users find job and volunteer opportunities.",
        ]
    }
]