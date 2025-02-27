// CrashReporter.js

// Function to log errors
function logError(error) {
    console.error('Error occurred: ', error);
    // You can also send the error data to a server or API endpoint for remote logging
    // Uncomment and modify the code below if you want to implement that
    /*
    fetch('https://your-api-endpoint/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            timestamp: new Date().toISOString(),
            error: error.message,
            stack: error.stack
        })
    });
    */
}

// Function to initialize crash reporting
function initializeCrashReporter() {
    window.onerror = function(message, source, lineno, colno, error) {
        logError({ message, source, lineno, colno, error });
        return true; // Prevent the default error handling (e.g., displaying a message to the user)
    };

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
        logError(event.reason);
    });
}

// Call the initialize function
initializeCrashReporter();
