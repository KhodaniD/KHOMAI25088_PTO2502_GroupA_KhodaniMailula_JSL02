
# JSL02: Kanban Board Project - Task Input and Status Validation System

---

## Project Title

**Kanban Board with Custom Task Entry Prompts**

---

## Project Description

This project implements a basic Kanban board web application designed to help users visualize and manage their workflow. It features a **responsive layout** that adapts gracefully to both desktop and mobile screens, displaying tasks organized into "TODO," "DOING," and "DONE" columns.

Building upon a static visual foundation, this version introduces a **JavaScript-based task entry system** that leverages **custom-built input prompts**. Users are guided to input details for two tasks (title, description, and status) via standard JavaScript `prompt()` calls, complete with robust validation. This enhances interactivity by allowing users to contribute data directly to the system in a user-friendly manner.

---
## Technologies Used

* **HTML5**: For structuring the content and defining the elements of the web page.
* **CSS3**: For styling the application, including layout, typography, colors, responsive design.
    * **CSS Variables**: Used to define a theme's color palette, making it easy to manage and potentially switch themes.
    * **Flexbox**: Utilized for responsive layout of various components.
    * **CSS Grid**: Employed for arranging the Kanban columns.
* **JavaScript (ES6+)**: Powers the interactive task entry system, including user prompts, input validation, and data storage logic.
    * **Async/Await**: Used for managing asynchronous user input with the prompts.
* **Google Fonts**: Specifically, 'Plus Jakarta Sans', for consistent and modern typography.

---

## Features Created and Updated

### Core Features:

* **Responsive Layout**: Adapts seamlessly to different screen sizes, providing an optimal viewing experience on both desktop and mobile devices.
* **Static Kanban Columns**: Displays "TODO," "DOING," and "DONE" columns with predefined task cards (initial content).
* **Desktop Sidebar**: A persistent sidebar on larger screens for navigation and board selection.
* **Mobile-Optimized Header**: A compact header for mobile devices, displaying the Kanban logo and the current board title.
* **Themed Styling**: Uses CSS variables for a clean, light theme, making it straightforward to modify or extend the visual style.
* **Typography Management**: Consistent font styling applied across the application using Google Fonts and specific CSS rules.


### Updates & Enhancements:

* **Interactive Task Entry System with Prompts**:

    * **`prompt()` UI**: Uses standard JavaScript `prompt()` calls for user input.
    * **Two-Task Input**: Users are prompted to enter `title`, `description`, and `status` for two distinct tasks.
    * **Case-Insensitive Status Input**: Automatically converts status input (e.g., "TODO", "Done") to lowercase for consistent internal handling.
    * **Robust Status Validation**: Continuously re-prompts the user for status until a valid option ("todo", "doing", or "done") is entered.
    * **Structured Task Storage**: Stores task details (title, description, status) in well-named JavaScript objects for easy access and manipulation.
    * **Console Output**: Logs the title and status of tasks that are specifically marked as "done" to the console.
    * **Motivational Message**: Displays a supportive message in the console if no tasks are completed (marked "done").

* **Code Quality & Maintainability**:

    * **Descriptive Variable Naming**: Ensured all variables, functions, and elements have clear, meaningful names.
    * **Comprehensive Comments**: Added detailed comments to HTML, CSS, and JavaScript files to explain complex logic, functionality, and structural choices, making the codebase highly readable and maintainable.

---

## Setup Instructions

To run this project locally, follow these simple steps:

1.  **Clone the repository (if applicable):**

    If you haven't already, clone the project repository to your local machine:

    ```bash

    git clone: https://github.com/KhodaniD/KHOMAI25088_PTO2502_GroupA_KhodaniMailula_JSL02

    ```

2.  **Navigate to the project directory:**

    Open your terminal or command prompt and change to the project's root directory:

    ```bash

    cd kanban-board-project/ # Replace with your actual project folder name

    ```

3.  **Open `index.html`:**
    Locate the `index.html` file in the root of the project directory.
    Open this file using your preferred web browser (e.g., Chrome, Firefox, Safari). You can usually do this by double-clicking the file.

    That's it! The Kanban board should now be displayed in your browser, and the task entry prompts will appear.
---
## Working Usage Examples

### Desktop View:
* Open `index.html` in a desktop browser.
* Observe the full-width sidebar on the left with the Kanban logo and board list.
* The initial Kanban board will display.
* Immediately, a **`prompt()` will appear in the center of the screen**.
* Enter task details (title, description, status) as prompted. The status input will validate your entry and re-prompt if invalid.
* After entering both tasks, check your browser's **developer console** (usually F12 -> Console tab) to see the output for "done" tasks and the motivational message if applicable.
* Resize your browser window to simulate different desktop screen sizes; the columns will adjust their layout.

### Mobile View:

* Open `index.html` in a mobile browser or use your desktop browser's developer tools to enable device emulation (e.g., Chrome DevTools -> Toggle device toolbar).
* The desktop sidebar will disappear.
* The header will show a compact "Kanban" logo along with the "Launch Career" board title.
* The Kanban columns ("TODO," "DOING," and "DONE") will stack vertically, making them easily scrollable on smaller screens.
* The **`prompt()`** will also adapt responsively to the mobile screen, allowing for clear task input.
* Again, use the developer console to observe task output.

---

## Interaction Instructions

This project now includes basic user interaction via a task entry system:
* **Task Input:** Upon loading, you will be guided through entering details for two tasks using the `prompt()` calls. Follow the prompts for title, description, and status.

* **Status Validation:** If you enter an invalid status (anything other than "todo", "doing", or "done"), an alert will notify you, and the prompt will reappear, asking for a valid status until it's correctly entered.

* **Viewing Console Output:** After providing details for both tasks, open your browser's developer console (typically by pressing `F12` on Windows/Linux or `Cmd + Option + I` on macOS, then navigating to the 'Console' tab) to view the system's output regarding completed tasks and the motivational message.

This Kanban board provides a solid foundation with initial interactivity, paving the way for more advanced features like dynamic task manipulation and full CRUD operations!