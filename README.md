# Show-Database

index.js is the Server.  | 
show_database.sql has the artist table information.  | 
index.html is the homepage.  | 
add_artist.html allows you to add an artist to the database.  | 
add_venue.html allows you to add a venue to the database.  |
add_show.html will do just what it says, though it is currently not fully configured.  |

Since the last post I have updated my show_database.sql page with all neccessary tables, and completed everything for my add venue page. I was able to poulate the homepage search parameter, and I am working with it's back end commands (At the moment I have a simple select statement running to make sure the connection to the show table is going through, but I need to tailor it to use the input information). 

I am having one big issue at the moment, and that is populating 2 lists on the add show page. I first copy and pasted the same code that I used for the homepage artist list to populate my add_venue artist list (which when tailored for the right directory/table worked), but when I tried to adjust this to make two queries it just isn't working. I even tried doing a jquery onLoad get request from the add_show page to see if maybe I could complete one request from the front and one from the back, but I am stuck. I currently have a ////SSSSTTTUUCCKK comment in place of where the code will be since what I had there was basically a copy of the previous population. 


