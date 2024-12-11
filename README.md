# Review-Site

A simple web application built with React.js and JSON Server to manage reviews. The app allows users to perform full CRUD operations (Create, Read, Update, Delete) on reviews.

## Features

- View a list of all reviews.
- Add new reviews.
- Edit existing reviews.
- Delete reviews.
- Backend powered by JSON Server for easy data management.

## Tech Stack

- **Frontend:** React.js
- **Backend:** JSON Server
- **Styling:** CSS

---

## Getting Started

### Prerequisites

- Node.js installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kumar-modukuri/Review-Site.git
   cd Review-Site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install JSON Server globally (if not already installed):
   ```bash
   npm install -g json-server
   ```

4. Start JSON Server:
   ```bash
   json-server --watch db.json --port 4000
   ```
   This will start the JSON Server and watch for changes in the `db.json` file.
   You can use any port that is not in use.

6. Start the React application:
   ```bash
   npm start
   ```

---

## Usage

1. Navigate to the application in your browser (default: [http://localhost:3000](http://localhost:3000)).
2. Use the interface to add, view, edit, or delete reviews.
3. Data changes will be persisted in the `db.json` file managed by JSON Server.

---

## Scripts

- `npm start`: Start the React development server.
- `npm run build`: Build the project for production.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Gmail**: [rajkumar87901311@gmail.com](mailto:rajkumar87901311@gmail.com)
- **Portfolio**: [kumar-modukuri-portfolio](https://kumar-modukuri-portfolio.onrender.com)
