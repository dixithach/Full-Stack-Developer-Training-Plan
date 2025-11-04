# Full-Stack-Developer-Training-Plan

Phase 1: The Absolute Basics - Building from Scratch
Objective: To build a strong understanding of the core technologies that make up the web.

Step 1: The Skeleton (Pure HTML)
1) First i created main folder by name Full-Stack-Developer-Training-Plan.
2) Than i created Step1 folder inside Full-Stack-Developer-Training-Plan folder.  
3) Than i added bio.html file inside Step1 folder.
4) Than i pasted images.jpeg file inside Step1 folder.
5) Than i opened bio.html file in visual studio code and started coding.
6) I started with <html> tag  and ended with </html> tag.
7) I than added <head> tag and inside it i added <title> tag with name as My Profile and ended it with </title> and than i added </head> tag to close head tag.
8)  I than added body tag <body> inside it i had added main heading as Personal Biography inside header tag.
9)  And than i added image tag as src="../Step1/images.jpeg" style="padding: 20px;" alt="Dixith's profile picture" width="300" height="300" inside image tag to display image.
10) And than i added another heading as About Me: after <img> tag inside header tag.
11) And than i added Paragraph tag inside it i added long text and than i closed paragraph tag.
12) And than again i added heading as My Hobbie inside header tag.
13) And than i created unordered list of my hobbies inside unordered list tag and than i closed body tag as </body> and also html tag as </html>.

Step 2: The First Coat of Paint (Basic CSS)
1) First i created  Step2 folder inside Full-Stack-Developer-Training-Plan folder.
2) Than i added bio.html file inside Step2 folder.
3) Than i pasted images.jpeg file inside Step2 folder.
4) Than i opened bio.html file in visual studio code and started coding.
5) I started with <html> tag  and ended with </html> tag.
6) I than added <head> tag and inside it i added <title> tag with name as My Profile and ended it with </title>.
7) And than i added  internal style attributes for hr,body,img,h2,p,ul inside style tag and than i closed it with close style tag and than close body tag.
8) I had added background color attribute for body tag and added font color and size to h2 heading and also for paragraph tag.
9) And added some spacing around the image in img attribute and than closed it with style tag.
10) And tha Close head tag to close head tag.
11) I than added body tag <body> inside it i had added main heading as Personal Biography inside header tag.
12) And next to it i added img tag to display image here.
13) And than i added another heading h2 About Me and than i added paragraph next to heading and than closed paragraph tag.
14) And again i added h2 heading tag as My Hobbies and than i added unordered list.
15) And than i closed body tag and than html tag.


Step 3: Making it Do Something (JavaScript Fundamentals & DOM)
1)  First i created  Step3 folder inside Full-Stack-Developer-Training-Plan folder.
2)  Than i added greeting.html file inside Step3 folder.
3)  Than i opened greeting.html file in visual studio code and started coding.
4)  I started with <html> tag  and ended with </html> tag.
5)  I than added <head> tag and inside it i added <title> tag with name as My Profile and ended it with </title>.
6)  And than i closed head tag.
7)  And than i started with body tag with a heading as Biography inside h1 with id as bio and than closed h1 tag.
8)  And than i added button with name change title next to heading with onclick as chngtitl();.
9)  And than i added script tag inside it i added a function by name chngtitl().
10) Inside chngtitl function  i added  var title = document.getElementById("bio"); 
     title.textContent = "Hello, [Dixith Acharya]!";.
11)  And than i closed script tag and than i closed body tag and html tag.
12)  Now at first it will display heading as Biography and in next line there is button named change title.
13)  While clicking change title button the heading changes from Biography to Hello, [Dixith Acharya]!.

Step 4: Adding Logic (JS Events & Conditionals)
1)  First i created  Step4 folder inside Full-Stack-Developer-Training-Plan folder.
2)  Than i added animal-sounds.html file inside Step4 folder.
3)  Than i opened animal-sounds.html file in visual studio code and started coding.
4)  I started with <html> tag  and ended with </html> tag.
5)  I than added <head> tag and inside it i added <title> tag with name as My Profile and ended it with </title>.
6)  And than i closed head tag.
7)  And than i started with body tag with a heading  inside h1 with id as bio and than closed h1 tag.
8)  And than i added 2  buttons with name as cow with value as C and dog with value as D  next line to heading with onclick as chngtitl();.
9)  And than i added script tag inside it i added a function by name chngtitl(button).
10) Inside chngtitl function  i added  if and else if statement first i took var animal = button.value; and than var animal checks value for the buttons.
11) if(animal=='C')
   {   
   var title = document.getElementById("bio"); 
   title.textContent = "The cow says Moo!"; 
   } else if (animal=='D')
   {
    var title = document.getElementById("bio"); 
    title.textContent = "The Dog says Bow!"; 
   }
12)  And than i closed script tag and than i closed body tag and html tag.
13)  Now at first there are 2 buttons named as cow and dog.
14)  If i click cow it will display heading as  The cow says Moo!.
15)  If i click dog it will display heading as  The Dog says Bow!.

Step 5: The Pro Stylist (Tailwind CSS)
1)  First i created  Step5 folder inside Full-Stack-Developer-Training-Plan folder.
2)  Than i added course-card.html file inside Step5 folder.
3)  Than i opened course-card.html file in visual studio code and started coding.
4)  I started with <html> tag  and ended with </html> tag.
5)  I than added <head> tag and inside it i added <title> tag with name as Course Card and ended it with </title>.
6)  Next i added   <!-- ✅ Tailwind CSS CDN --> <script src="https://cdn.tailwindcss.com"></script> after title tag.
7)  and than closed head tag.
8)  than i started with body tag inside body tag i added class of tailwind CSS class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden".
9)  Next i added main div with class as class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden".
10) Next i added another div  <div class="p-6">.
11) And than i added heading h2 with class as  class="text-2xl font-bold text-gray-800 mb-2" and named it as Introduction to Computer Science as it makes bold heading and closed heading tag. 
12) And next i added Paragraph tag with class as class="text-gray-600 mb-4" with paragraph text inside paragraph tag and ended the paragraph tag.
13) Next i opened another div tag with class as class="border-t pt-4 text-sm text-gray-500" and inside it i added  Instructor: with span tag with  class="font-medium text-gray-700" Dixith Acharya      and closed span tag.
14) And than i closed 3 div tags and than i closed body tag with html tag.
15) Next i went to browser to view my university course card

Check out the demo video on YouTube:  
[Watch here](https://youtu.be/KUCbd55fLPg)

Phase 2: Building Modern Interfaces with Next.js & TypeScript
Objective: To learn how to build scalable, type-safe, and interactive user interfaces using a modern
framework.

Step 6: Setting Up the Universe (Next.js)

Task
1) First i need to check whether i had installed node in my pc or not by typing command in terminal as node -v or npm -v.
2) Next i made Step6 folder inside it i made a subfolder as Task.
3) Than i Opened the terminal in the Task folder where i want my project to be saved.













