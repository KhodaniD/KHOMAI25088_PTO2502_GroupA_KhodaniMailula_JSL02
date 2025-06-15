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

//keep asking for status until a valid one is provided
    while (!isValidStatus) {
        status = prompt('Enter the status for "' + title + '" (todo, in-progress, done):');
        if (status == null) {
            return null; // User cancelled
        }
        status = status.toLowerCase(); //convert to lowercase for consistency

        // Validate the status input
        switch (status) {
            case 'todo':
            case 'doing':
            case 'done':
                isValidStatus = true; //valid status entered, exit loop
                break;
            default:
                alert('Invalid status. Please enter "todo", "doing", or "done".'); //let user know the status is invalid
        }
    }
}

  