### Project Overview

1. **Objective:**

   - The goal is to build a React application that displays a list of artworks using the provided API. The app should be responsive and provide features such as pagination, detailed view of each artwork, and search functionality.

2. **Technology Stack:**
   - **Frontend:** React, React Router
   - **Styling:** CSS (flexbox for responsive design)
   - **API Integration:** Async await to fetch the data

### Setup and Installation

1. **Prerequisites:**

   - Node.js and npm installed on your machine.

2. **Installation Steps:**

   - Clone the repository from GitHub: `git clone <repository-url>`
   - Navigate to the project directory: `cd project-directory`
   - Install dependencies: `npm install`

3. **Running the Application:**
   - Start the development server: `npm start`
   - The application will be available at `http://localhost:3000`.

### Application Structure

**Component Breakdown:**

- **App Component:**
  - Manages routing and overall layout.
- **Home Component:**
  - Displays a list of artworks with pagination.
- **ArtworkItem Component:**
  - Represents individual artwork items in the list.
- **ArtworkDetail Component:**
  - Displays detailed information about a selected artwork.
- **SearchBar Component:**
  - Provides search functionality to filter artworks.

### Implementation Details

1. **API Integration:**

   - The application uses the provided API to fetch artwork data.
   - Async await is used for making HTTP requests.
   - Data is stored in the state and managed using React's `useState` and `useEffect` hooks.

2. **Routing:**

   - React Router is used to navigate between the Home page and the Artwork Detail page.
   - The URL structure includes routes like `/` for the homepage and `/artwork/:id` for individual artwork details.

3. **State Management:**

   - React's built-in state management (useState) is utilized.

4. **Styling:**

   - The application uses CSS for styling.
   - Responsive design principles are applied to ensure the app works on both desktop and mobile devices.

5. **Pagination:**

   - Artworks are displayed in paginated form, 10 per page.
   - Pagination controls allow navigation between pages.

6. **Search and Filter:**

   - A search bar is implemented to filter artworks by title.

### Design Decisions

1. **Component-Based Architecture:**

   - Components are designed to be reusable and maintainable.

2. **State Management:**

   - Chose React's built-in state management for simplicity and ease of use.

3. **Responsive Design:**

   - Ensured the app is accessible and visually appealing on different screen sizes.

4. **Documentation:**
   - Clear comments and documentation are provided within the codebase.
