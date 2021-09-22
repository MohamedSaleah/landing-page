


*Installation*

#1
first thing I did was creating a 4th section in the HTML file just by changing the number "4" using the same exact code with the same exact paragraph
#2
 before coding I created a script tag to use the given app.js file using it's path

 //the used method

 (<script src =""></script> : to show the file path )
 #3
 I've created a navigation bar for the 4 existing section by creating an anchor for each section and putting inside a list and then the list in a fragment and then in the already made unordered list for the navigation bar .. and that anchor tag contained both the link and the name of each section .

 //the used methods
 (forEach : looping
   innerHTML : adding the anchor to the list
   appendChild : to add the list in the fragment and later to add the fragment in the unorderedlist
   )

 #4 the task was to make sure the active class is to be on the section which is being viewed . it was made by looping over sections and giving the section in the view port the active class and removing  it from all those sections which aren't intersecting

 // the used methods
 ( forEach: for looping  / getBoundingClientRect: to set the view port  /  if and else :to set the conditon

   )

#5
while creating the navigation bar the scrolling behavior was added inside the forEach loop a function which contains the behavior to added to the section

 // the used methods

 ( scrollIntoView : scrolls the element to the viewport "the visible area"
   addEventListener : to make the function triggered upon the click
   )

*Usage*

the usage now for the script tags is to read the file which contains all the new dynamic changes on the script .
the navigation menu is made to navigate you to the section you want to read by clicking on the section's name it shall navigate you to the proper section .
adding and removing  the active class according to the viewport is for making easier for the user to know which section is being viewed .
scrolling to the anchor should take you to the clicked section from the navigation bar but in a scrolling behavior not shifting .
