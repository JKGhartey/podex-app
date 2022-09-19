# podex-app
Because this is a Pokemon App using the Pokeapi.co, I began by ensuring that I can make requests to the API and fetch the data needed to populate the various Pokemon information. 
The first stage of my project was to import all the data required into the react app. 

I made a separate file called "api.js" which contains all the api calls required. This made editing and proofreading much easier. 

I followed it up by creating the separate components and displaying "hard coded" data. This is to observe how the UI of each component would be displayed before adding dynamic codes. 

After successfully making api changes, each of the data was put into their separate states so that it could be used in the app. 

A code I would particularly like to highlight would be the codeI used to map through the pokemon types to show their individual names in a boostrap pill badge component and then using a separate data file which stored "Colours" I was able to set the background color for each pill badge to a specific color based on their type.name value. 

I would also like to highlight a similar approach I used to edit the width of the progress bar based on the based on the stats value. 


Moving forward there are a few changes I would like to make to the code to make the app as a whole more user friendly. 

1) I would like to improve the code by using reducer and redux. to easily pass props from on component to its descendant without having to pass props to each component in the family tree. 

2) Using UseContext I would be able to create a context to dispatch information up the family tree back to app.js from any of its descendant. This would allow users to "like" their favorite pokemon and display as well. 

3) I would like to improve the search bar to suggest pokemon name after three key inputs. So users can easily find the pokemon they were searching for without having to remember the entire name. 

4) Displaying a better "pokemon not found" component 

5) Improving the loading gif

6) Showing the evolution of pokemon would give users a better understanding of the pokemon as well as displaying their descriptions and flavour_text

This was a really fun project. ;)
.
