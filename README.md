# User Management Dashboard

A User Management Dashboard built with Next.js, TypeScript, and Tailwind CSS. This project was developed as part of a technical interview task. The app allows real-time adding, editing, and deleting of users with immediate UI updates, a responsive layout, and persistent local state.

## Features

- **User Listing**: Responsive user table with avatars, full names, emails, roles, and creation dates.
- **Search**: Live search functionality to filter users by email.
- **Role & Date Filtering**: Filter by user role and sort by creation date (ascending/descending).
- **Add/Edit/Delete Users**: Easily manage users through modal dialogs connected to a global Zustand store.
- **Pagination**: Displays 10 users per page with advanced pagination logic and ellipses for better UX on large datasets.
- **State Persistence**: User data is stored in localStorage using Zustand’s middleware to persist across sessions.
- **Loading State**: A loading spinner is shown while fetching users from localStorage.



## Technologies
- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Zustand**
- **shadcn/ui**



## Setup Instructions

To run the project locally, follow these steps:

### 1. Clone the repository:

```
git clone https://github.com/xCordeva/upreps-user-management.git
```
### 2. Install dependencies:
```
cd upreps-user-management
npm install
```
### 3. Run the development server:
```
npm run dev
```

This will start the app on http://localhost:3000.

## How to Use
- **View Users**: The homepage displays all users in a paginated table. Each entry shows the user’s avatar, name, email, role, and creation date.
- **Search by Email**: Use the search bar above the table to filter users by email. The search is case-insensitive and updates results in real time.
- **Filter and Sort**: Use the Role dropdown to filter users by their assigned role or by creation date.
- **Add a New User**: Click the “Add User” button to open a modal form. Fill in the user details and submit to add them to the list.
- **Edit an Existing User**: Click the Edit icon next to a user entry. Modify the fields and save changes through the modal.
- **Delete a User**: Click the Delete icon next to a user entry. Confirm the action to permanently remove them from the list.
- **Session Persistence**: All changes are stored in your browser’s local storage, so data is retained even after refreshing or closing the browser.
