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
4) And than i runned npx create-next-app@latest my-next-app command in terminal to create my-next-app project inside Task folder.
5) The my-next-app project is created inside Task folder and than i runned command cd my-next-app to move to project folder in terminal.
6) And than i runned npm run dev command in terminal.
7) Than i copied address http://localhost:3000 and pasted in another tab it shows the app.
8) Than i Edited layout.tsx file and added code and saved it is inside app folder.
9) Than i Added code to page.tsx file which is inside app folder.
10) Than i can see a static page on clicking http://localhost:3000 address .
11) As now you can see simple site with three routes with Home | About | Blog .
12) And than Added about folder inside it page.jsx file is added.
13) And than Added bio folder inside it page.jsx file and layout.jsx file is added.
14) Finally i have simple site with 3 routes Home,About,Blog.
15) When i click Home it shows home page content.
16) When i click About it goes inside about folder and there page.jsx file contents will be displayed.
17) When i click Blog it goes inside blog folder and there is page.jsx and layout.jsx file contents will be displayed.
18) And than Added [id]folder inside blog and inside it added page.tsx.
19) When i click blog there it displays two links hello world and Learning app routers.
20) Clicking it shows contents inside [id] folder there is a file by name Page.jsx its contents will be displayed.

 Exercise
 
 Creative Exercise (Multi-Page Site):
 1) I had created Exercise folder in Phase 2 branch inside Step6 folder.
 2) And than i runned npx create-next-app@latest my-next-app command in terminal to create my-next-app project inside Exercise folder.
 3) And than i created the shared layout with navigation in layout.tsx it is in app/layout.tsx.
 4) And than i created homepage in page.tsx it is in app/page.tsx.
 5) And than i created the /about page in which i had created about folder inside it i have page.tsx it is in app/about/page.tsx.
 6) And than i created the /contact page in which i had created contact folder inside it i have page.tsx it is in app/contact/page.tsx.
 7) And than i runned the app with npm run dev.
 8) app/layout.tsx wraps all pages; it contains the <nav> with <Link href="..."> so navigation appears on every page
 9) app/page.tsx is the homepage
 10) app/about/page.tsx and app/contact/page.tsx are nested folders. Their page.tsx files become /about and /contact
 11) Finally i am getting a site with three navigations Home,About,Contact. while clicking each navigation the content changes.


Step 7: The Rules of Language (TypeScript Basics)

Task
1) First i created typscript.ts file inside Task folder which is inside Step7 Folder.
2) I started coding inside typscript.ts where i declared Strings,Boolean,numbers,array.
3) And than i runned  tsc typscript.ts in terminal.
4) And than i runned  node typscripr.js in terminal which creates a typscript.js file.
5) And than it will show result in terminals where console.log(); will print in terminal.

Exercise

Creative Exercise (Typed Variables)

1) I created Execise folder inside Step7 folder .
2) And than i created patient.test.ts file inside Exercise folder.
3) And than i coded inside patient.test.ts file as i declared variables in typscript like patientName,age,hasInsurance,medications.
4) And than i runned command to install typscript npm install --save-dev ts-node typescript.
5) And than i runned node --loader ts-node/esm patient.test.ts command to display result.

Step 8: Structuring Our World (TypeScript Interfaces)

Task
1) First i created patient.test.ts file inside Task folder which is inside Step8 Folder.
2) Interface declarations is done in patient.test.ts file.
3) Create patients is done in patient.test.ts file.
4) Function that accepts the Patient interface is done in patient.test.ts file.
5) Created function createPatient that returns a typed object in patient.test.ts file.
6) Demonstrate usage is done in patient.test.ts file.
7) Define a Patient interface is done in patient.test.ts file.

Exercise

Creative Exercise (Data Models)

1) I created Execise folder inside Step8 folder .
2) And than i created types.ts file inside Exercise folder.
3) Define a Patient interface is done in types.ts file.
4) Define a UniversityCourse interface is done in types.ts file.
5) Created js file of types to execute it.

Step 9: Reusable Building Blocks (React Components & Props)

Task
1)  First i created react app as my-app inside Task folder which is inside Step9 Folder.
2)  I Created a new React project (Vite recommended).
3)  I runned command npm create vite@latest my-app to install react app.
4)  And than i runned npm run dev and react app started .
5)  Than i started coding in App.jsx which is in src/App.jsx inside my-app.
6)  Started with Imports (React is optional to import in modern JSX toolchains, but kept here for clarity) in App.jsx file.
7)  Next i added Child component (receives props from its parent) We use destructuring to pick the props we want: {name, age, onGreet, details, children}.
8)  And than i added Parent component (creates state and passes data to Child).
9)  And at the end i added App (root) - default export (what you put in src/App.jsx) to execute the code.
10)  And than i runned http://localhost:5173 to display the result in browser.

Exercise

Creative Exercise (Component Library)

1) First i created react app as patient-app inside Exercise folder which is inside Step9 Folder.
2) I Created a new React project.
3) I runned command npx create-react-app patient-app to install react app.
4) And than i runned npm start and react app started.
5) And than Created type.js file inside src/types.js.
6) Created PatientCard.js file inside src/components/PatientCard.js.
7) Edited App.js file in src/App.js.
8) And than runned npm start command to start http://localhost:3000/.


   












