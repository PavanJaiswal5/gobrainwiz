const data = {
    menu:[
        {
            id:1,
          "label": "Dashboard",
          "to": "dashboard",
          "icon": "fa-chart-simple"
        },
        {
            id:2,
          "label": "Attendance",
          "to": "attendance",
          "icon": "fa-book-open-reader"
        },
        {
            id:3,
          "label": "Practice Tests",
          "icon": "fa-window-restore",
          "badge": "New",
          "submenu": [
            {
                id:4,
              "label": "Assigned Tests",
              "to": "practice-assigned-tests"
            },
            {
                id:5,
              "label": "Completed Tests",
              "to": "practice-completed-tests"
            }
          ]
        },
        {
            id:6,
          "label": "Test Series",
          "icon": "fa-rectangle-list",
          "badge": "New",
          "submenu": [
            {
                id:7,
              "label": "Assigned Tests",
              "to": "series-assigned-tests"
            },
            {
                id:8,
              "label": "Completed Tests",
              "to": "series-completed-tests"
            }
          ]
        },
        {
            id:9,
          "label": "Daily Puzzles",
          "to": "daily-puzzles",
          "icon": "fa-puzzle-piece"
        },
        {
            id:11,
          "label": "Downloaded PDFs",
          "to": "download-pdfs",
          "icon": "fa-file-pdf"
        },
        {
            id:12,
          "label": "Courses",
          "to": "courses",
          "icon": "fa-book"
        },
        {
            id:13,
          "label": "Live Sessions",
          "to": "live-sessions",
          "icon": "fa-video",
          "badge": "New"
        },
        {
            id:14,
          "label": "Profile",
          "to": "profile",
          "icon": "fa-user"
        },
        {
            id:15,
          "label": "Upload Question",
          "to": "upload-question",
          "icon": "fa-table-columns"
        },
        {
            id:16,
          "label": "Certifications",
          "to": "certifications",
          "icon": "fa-award"
        },
        {
            id:17,
          "label": "Logout",
          "to": "/login",
          "icon": "fa-power-off"
        }
      ],
      "courses": [
        {
            "title": "Campus Recruitment Training",
            "content": "This Course will be helpful for Students who are going to appear for any Job Placement/Interview like Infosys, TCS NQT, CapGemini, Accenture, Oracle and many more",
            "price": "3500.00",
            "image": "campus_recruiting.jpg"
        },
        {
            "title": "Core Java",
            "content": "Learning Java can be a great skill to acquire if you want to work in the programming or software",
            "price": "4000.00",
            "image": "core_java.jpg"
        }, {
            "title": "Campus Recruitment Training (Recorded)",
            "content": "This Course will be helpful for Students who are going to appear for any Job Placement/Interview like",
            "price": "3000.00",
            "image": "carmpus_recruitment_core.jpg"
        }, {
            "title": "CRT + Core Java (Combo)",
            "content": "This Course will be helpful for Students who are going to appear for any Job Placement/Interview like",
            "price": "5000.00",
            "image": "crt_java.jpg"
        }, {
            "title": "GATE & ESE (Aptitude)",
            "content": "In this Course, we cover the entire 15 marks of GATE Aptitude, covering Logical Reasoning, Quantitative",
            "price": "3000.00",
            "image": "gate_ese.jpg"
        }, {
            "title": "Python (Core & Advance)",
            "content": "Python is general-purpose, high-level, interpreted, interactive, object-oriented, and open-source. It is",
            "price": "7000.00",
            "image": "python_course.jpg"
        }





    ],
    "tests": [
        {
            "category": "Logical Reasoning",
            "topic": "Letter Series",
            "test_name": "Practice Test - 1",
            "no_of_questions": 5,
            "duration": 5,
            "image": "e2.jpeg"
        },
        {
            "category": "Arithmetic",
            "topic": "Problems on Ages",
            "test_name": "Problems on Ages Test 1",
            "no_of_questions": 10,
            "duration": 15,
            "image": "e1.jpeg"
        },
        {
            "category": "Arithmetic",
            "topic": "Permutation & Combination",
            "test_name": "P & C Test 1",
            "no_of_questions": 10,
            "duration": 15,
            "image": "e3.jpeg"
        },
        {
            "category": "Logical Reasoning",
            "topic": "Coding & Decoding",
            "test_name": "Coding & Decoding Test 1",
            "no_of_questions": 5,
            "duration": 10,
            "image": "e2.jpeg"
        },
        {
            "category": "Arithmetic",
            "topic": "Averages & Mixtures",
            "test_name": "Averages & Mixtures Test 1",
            "no_of_questions": 10,
            "duration": 10,
            "image": "e1.jpeg"
        },
        {
            "category": "Arithmetic",
            "topic": "Ratio & Proportions",
            "test_name": "Ratio & Proportion - Test 1",
            "no_of_questions": 5,
            "duration": 10,
            "image": "e3.jpeg"
        },
        {
            "category": "Logical Reasoning",
            "topic": "CryptArithmetic",
            "test_name": "Cryptarithmetic Test 1",
            "no_of_questions": 3,
            "duration": 10,
            "image": "e1.jpeg"
        }
    ]
 }

export default data;
 
