// Tutorials and Documentation Script
const tutorials = [
    {
        title: "Changing the Website Title",
        description: "You can change the title of the website by entering a new name in the 'Tab Cloak' input field, located in the settings modal. After entering your desired title, click the 'Apply' button to see the changes take effect."
    },
    {
        title: "Modifying Button Links",
        description: "To customize the buttons that lead to other sites or games, locate the buttons in the HTML (look for the 'button' elements in the 'button-container' div) and modify the 'onclick' attributes to change where they navigate when clicked."
    },
    {
        title: "Changing Themes",
        description: "The website offers various themes you can switch between. Open the settings modal by pressing 'Q' and click on the theme options provided. Each theme will change the colors and styles of the text and buttons to enhance visual appeal."
    },
    {
        title: "Adding More Sections",
        description: "To add new sections to the website, replicate the existing section structure in the HTML. Make sure to assign a unique ID to the new section and add a corresponding button in the navigation header to link to it."
    },
    {
        title: "Adding Random Quotes",
        description: "The website features a random quote display. You can customize these quotes in the 'quotes' array located in the JavaScript code. Just add your quotes into the array for dynamic content updates."
    },
    {
        title: "Using External Libraries for Advanced Features",
        description: "You can enhance functionalities by using external libraries. For example, to incorporate animations or new UI elements, you can link the script of that library in the header of your HTML. Don't forget to check for documentation related to the library for proper usage."
    },
    {
        title: "Styling with CSS",
        description: "Feel free to modify the CSS styles directly in the <style> tag of the HTML. This is where you can change things like fonts, colors, and margins to better suit your design preferences."
    },
    {
        title: "Publishing Your Site",
        description: "Once you’re satisfied with the changes, you can publish your website using hosting services like GitHub Pages or similar platforms. Follow their specific guides to upload your files and make your site accessible online."
    },
];

function displayTutorials() {
    const tutorialContainer = document.createElement('div');
    tutorialContainer.className = 'tutorial-container';
    tutorialContainer.style.padding = '20px';
    tutorialContainer.style.color = '#00BFFF';
    
    const title = document.createElement('h2');
    title.textContent = 'Website Modification Tutorials';
    tutorialContainer.appendChild(title);

    tutorials.forEach(tutorial => {
        const tutorialBlock = document.createElement('div');
        tutorialBlock.style.marginBottom = '15px';

        const tutorialTitle = document.createElement('h3');
        tutorialTitle.textContent = tutorial.title;
        tutorialBlock.appendChild(tutorialTitle);

        const tutorialDescription = document.createElement('p');
        tutorialDescription.textContent = tutorial.description;
        tutorialBlock.appendChild(tutorialDescription);

        tutorialContainer.appendChild(tutorialBlock);
    });

    document.body.appendChild(tutorialContainer);
}

// Call the function to display the tutorials
displayTutorials();
