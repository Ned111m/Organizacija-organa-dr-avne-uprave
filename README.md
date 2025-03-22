# Organization of State Administration Bodies
Quiz for state exam

A modern quiz app built with React, TypeScript, and Express. Features include randomized questions, score tracking, and detailed results.

## Features
- Randomized questions from a pool.
- Multiple-choice answers with one correct option.
- Score calculation at the end of the quiz.
- Detailed results page showing correct/incorrect answers.

## Technologies Used
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (optional, used for storing quiz data and user scores. If not used, the app will run with in-memory storage.)

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/actual-username/actual-repo-name.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. (Optional) Set up PostgreSQL:
   - Install PostgreSQL and create a database.
   - Update the `.env` file with your database connection details (e.g., `DATABASE_URL`).

4. Start the development server:
   ```bash
   npm start
   ```

This project uses Vite for fast development, enabling quick builds and hot module replacement. ESLint is used for maintaining code quality and consistency throughout the quiz app. Developer-specific tools like `eslint-plugin-react-x` and `eslint-plugin-react-dom` are configured for advanced linting but are not required for end-users.
