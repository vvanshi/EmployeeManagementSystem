
const employees = [
  {
    "id": 1,
    "name": "Harsh",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Homepage UI",
        "description": "Create a responsive homepage layout.",
        "date": "2025-02-25",
        "category": "UI/UX",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Login Bug",
        "description": "Resolve authentication issue on login page.",
        "date": "2025-02-26",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Optimize Database Queries",
        "description": "Improve SQL queries for faster response time.",
        "date": "2025-03-01",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Write API Documentation",
        "description": "Document REST API endpoints.",
        "date": "2025-02-27",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Create Landing Page",
        "description": "Develop an engaging landing page for new users.",
        "date": "2025-02-28",
        "category": "Frontend",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 3,
    "name": "Vanshika",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Setup CI/CD Pipeline",
        "description": "Implement CI/CD for automated deployment.",
        "date": "2025-02-26",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Review security vulnerabilities in the application.",
        "date": "2025-03-03",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review code submissions from developers.",
        "date": "2025-02-29",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "name": "Surbhi",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Setup Firebase Auth",
        "description": "Integrate Firebase authentication for users.",
        "date": "2025-02-28",
        "category": "Authentication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Implement Dark Mode",
        "description": "Add dark mode support in the application.",
        "date": "2025-02-25",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Meera",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Create Automated Tests",
        "description": "Write automated tests for core features.",
        "date": "2025-03-01",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Improve Mobile Responsiveness",
        "description": "Ensure mobile-friendly UI across devices.",
        "date": "2025-02-26",
        "category": "UI/UX",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Refactor Backend Code",
        "description": "Optimize backend services for performance.",
        "date": "2025-02-27",
        "category": "Backend",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
];

const admin = [
  {
    "id": 1,
    "name": "Vikram",
    "email": "admin@example.com",
    "password": "123"
  }
];

  export const setLocalStorage=()=>{
        localStorage.setItem('employees',JSON.stringify(employees));
        localStorage.setItem('admin',JSON.stringify(admin));
  }

  export const getLocalStorage=()=>{
     const employees=JSON.parse(localStorage.getItem("employees"));
     const admin=JSON.parse(localStorage.getItem("admin"));
    return {employees,admin}
  }