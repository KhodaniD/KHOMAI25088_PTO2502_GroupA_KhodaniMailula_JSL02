// Function to prompt for a task with validation
async function getTask(taskNumber) {
    let title = prompt('Enter task ' + taskNumber + ' title:');
    if (title == null) {
        return null; // User cancelled
    }

    let description = prompt('Enter the description for "' + title + '":');
    if (description == null) {
        return null; // User cancelled
    }

    let status;
    let isValidStatus = false;

    // Keep asking for status until a valid one is provided
    while (!isValidStatus) {
        status = prompt('Enter the status for "' + title + '" (todo, doing, done):');
        if (status == null) {
            return null; // User cancelled
        }
        status = status.toLowerCase(); // Convert to lowercase for consistency

        // Validate the status input
        switch (status) {
            case 'todo':
            case 'doing':
            case 'done':
                isValidStatus = true; // Valid status entered, exit loop
                break;
            default:
                alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
        }
    }

    // At this point, 'status' is guaranteed to be valid
    return { title: title, description: description, status: status };
}

// Collect two tasks from the user and display results
async function collectTasks() {
    let task1 = await getTask(1);
    if (task1 == null) {
        console.log('Task1 entry cancelled. Exiting task collection.');
        return;
    }
    let task2 = await getTask(2);
    if (task2 == null) {
        console.log('Task2 entry cancelled. Exiting task collection.');
        return;
    }
    // Track if any task was marked as "done"
    let anyTaskDone = false;

    // Check and log details for Task 1 if status is "done"
    if (task1.status === 'done') {
        console.log('Title: ' + task1.title + '", Status: "done"');
        anyTaskDone = true;
    }
    // Check and log details for Task 2 if status is "done"
    if (task2.status === 'done') {
        console.log('Title: ' + task2.title + '", Status: "done"');
        anyTaskDone = true;
    }
    // Display motivational message if no tasks are marked as "done"
    if (!anyTaskDone) {
        console.log("No tasks completed, let's get to work!");
    }
}

// Call the function to start collecting tasks when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', collectTasks);