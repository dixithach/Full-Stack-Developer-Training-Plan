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

Step 10: Giving Components Memory (State & Events)

Task
1) First i created react app as cmp-app inside Task folder which is inside Step10 Folder.
2) I Created a new React project.
3) I runned command npx create-react-app cmp-app to install react app.
4) And than i runned npm start and react app started .
5) Than i started coding in App.js which is in src/App.jsx inside cmp-app.
6) I added counter state which increments and decrements values and also reset value onclick using userf state.
7) I addded controlled input name in which if you type inside text box it will be shown below the text box.
8) I added todo list in which if you type inside text box and also there is add task button if u click add task the input text will be shown below the text box.

Exercise

Creative Exercise (Interactive Checklist)

1) First i created react app as todo-app inside Exercise folder which is inside Step10 Folder.
2) I Created a new React project.
3) I runned command npx create-react-app todo-app to install react app.
4) And than i runned npm start and react app started.
5) And than i edited code in App.js file which is inside src\App.js.
6) And added Simple TodoItem component without Tailwind inside App.js file.
7) And than Added css in App.css which is inside src\App.css file.
8) And than runned npm start command to start http://localhost:3000/.

Phase 3: The Backend Engine Room - Node.js From Scratch

Step 11: Powering On the Server (Node.js & Express Basics)

Task 
1) First i created my-express-app folder inside Task folder which is inside Step11 Folder.
2) And than i runed npm init -y inside my-express-app folder.
3) And than i runned npm install express inside my-express-app folder.
4) Created index.js file inside my-express-app folder and coded it.
5) Edited package.json file added code "start": "node index.js" to it.
6) And than started server by running command npm start.
7) And than went to browser and typed http://localhost:3000 and the result is Hello from Express!.

Exercise

Creative Exercise:

1) Added Exercise folder inside Step11 folder and than created for vitae-hub-api inside Exercise foolder and runned npm init -y to initialize the project and to create package.json file.
2) And than i runned to commands inside vitae-hub-api one is to install Express that is npm install express and another command is npm install --save-dev nodemon to dev tool that restarts server on file changes.
3) Edited package.json file added scripts like node server.js and nodemon server.js.
4) Created server.js file inside vitae-hub-api and pasted code inside it.
5) And than i runned npm run dev command and than i copied http://localhost:3001 and pasted in browser i got result in browser as Welcome to Vitae Hub API!

Step12: Creating API Endpoints (Routing Basics)

Task
1) Added Step12 folder inside it Task folder and inside it i created api-demo folder and than inside it i initialised project in terminal with command npm init -y.
2) And than i installed express inside api-demo with command npm install express.
3) Added server.js file inside api-demo and coded inside it for post and get route.
4) And than i edited the server.js file and than i runned node server.js command and than igot http://localhost:3000/welcome address and than i runned it i got Hello! This is a GET request. and for post to check i went to visual studio code and installed extension thunder client and than i clicked new request selected post with url http://localhost:3000/send-data and than i clicked body and than i edited json file by adding name: Dixith and age:22,
5) And than i got output .

Exercise: 

Creative Exercise:

1) Added Step12 folder inside it Exercise folder and inside it i created my-api folder and than inside it i initialised project in terminal with command npm init -y.
2) And than i installed express inside my-api with command npm install express and also i runned command npm install --save-dev nodemon.
3) Added server.js file inside my-api and coded inside it for GET /api/appointmentsand GET /api/tasks Routes.
4) And than i edited the server.js file and than i runned npm run dev command and than i got http://localhost:3001  and than i runned it i got Welcome to the Vitae Hub API!. and for post to check     i went to visual studio code and installed extension thunder client and than i clicked new request selected post with url http://localhost:3001/api/appointments and also                            http://localhost:3001/api/tasks and than i clicked send it gave me json output and also i runned this addresses in browser it gave me json response.


Step 13 : The Filing Cabinet (Controllers & Routers)

Task 
1) Added Step13 folder inside it Task folder and inside it i created mvc-example folder and than inside it i initialised project in terminal with command npm init -y and than i runned npm install express.
2) Create data/storage.js - this simulates stored data so controllers can use it.
3) Create controllers/appointmentsController.js and also Create controllers/tasksController.js controllers get data, validate, modify, return HTTP responses.
4) Create routes/appointmentsRoutes.js and Create routes/tasksRoutes.js Each route file uses express.Router() to group related endpoints.
5) Create server.js and Start the server using command npm run dev.

Exercise:

Creative Exercise:

1) Created Exercise inside Step13 and than created a mvc folder and than i runned command npm init -y.
2) And than i runned commands like npm install express and than npm install --save-dev nodemon inside mvc folder to install express.
3) And than i created controllers folder and inside it i created appointmentController.js and started coding inside it.
4) Inside /routes, create appointmentRoutes.js. Use express.Router() to define the / route and link it to the getAllAppointments controller function.
5) Inside appointmentRoutes.js started coding.
6) In your main server.js, import and use the appointment router under the /api/appointments path.
7) Added taskController.js inside controllers.
8) Added taskRoutes.js inside routes.


Step 14 : The Traffic Guard (Middleware from Scratch)

Task
1) Added Step14 folder inside there is Task folder.
2) inside Task folder i have middleware folder inside it i installed express and no demon server.
3) And than i added a server.js file inside middleware folder.
4) And than i started coding inside server.js file i used middleware here and than i runned command node server.js in terminal.

Exercise:

Creative Exercise:

1) Created Exercise folder inside Step14 and than created a express-logger-demo folder inside Exercise folder and than i runned command npm init -y and than i runned npm install express to install    express.
2) Inside express-logger-demo folder created a folder by name middleware and inside it created requestLogger.js and started coding the file with requestlogger function.
3) Inside express-logger-demo folder created server.js file inside it started coding used requestLogger for every incoming request and routes and than runned command node server.js in terminal to     execute.


Step 15: The Blueprint (MongoDB Schemas from Scratch)

Task
1) Created Step15 folder inside it created another folder by name Task and than inside it created another folder by name mongoose-demo and runned command npm init -y inside it and than again i        runned npm install express mongoose dotenv and than npm install --save-dev nodemon.
2) Created db.js inside mongoose-demo to centralizes connection logic to connect to Mongoose.
3) Created server.js inside mongoose-demo.
4) Created models folder inside mongoose-demo and than inside models folder created User.js to Define a Mongoose schema & model.
5) Created routes folder inside mongoose-demo and than created users.js file inside routes folder to implement basic endpoints and than started server by running npm run dev or npm start.

Exercise
1) Added Exercise folder inside Step15 Folder and than inside Exercise folder created a mongoose-tasks folder and than runned commands npm init -y and npm install mongoose inside mongoose-tasks       folder.
2) Added models folder inside mongoose-tasks folder and than created a Task.js file inside models folder and than coded the file to create Mongoose schema & model.
3) Added server.js file inside mongoose-tasks folder and inside server.js file added minimal example showing how to connect and perform basic operations (create, read, update, delete) and than        runned command node server.js inside mongoose-tasks folder.


Step 16: Storing Information (Mongoose & CRUD)

Task
1) Added Step16 folder and inside it created sub folder with name as Task and than inside Task folder created another folder by name task-crud and than runned commands like npm init -y and npm install express mongoose dotenv and npm install --save-dev nodemon inside task-crud.
2) Next i created models folder inside it added Task.js file and than coded it to Create the schema and model.
3) Next i created controllers folder inside it i created taskController.js file and than i started coding it with Full CRUD functions with proper status codes and error handling.
4) Next i created routes folder inside it i created a file by name taskRoutes.js and started coding it with Hook controller functions to Express routes.
5) Next i created middleware folder inside it i created a file by name errorHandler.js and started coding it with a simple middleware to send errors.
6) Next i created server.js file inside task-crud folder and than started coding the server.js file with connect to MongoDB, mount routes and middleware and than runned npm run dev command to run     app.









Phase 3: The Backend Engine Room - Node.js From Scratch

Step 11: Powering On the Server (Node.js & Express Basics)

Task 
1) First i created my-express-app folder inside Task folder which is inside Step11 Folder.
2) And than i runed npm init -y inside my-express-app folder.
3) And than i runned npm install express inside my-express-app folder.
4) Created index.js file inside my-express-app folder and coded it.
5) Edited package.json file added code "start": "node index.js" to it.
6) And than started server by running command npm start.
7) And than went to browser and typed http://localhost:3000 and the result is Hello from Express!.

Exercise

Creative Exercise:

1) Added Exercise folder inside Step11 folder and than created for vitae-hub-api inside Exercise foolder and runned npm init -y to initialize the project and to create package.json file.
2) And than i runned to commands inside vitae-hub-api one is to install Express that is npm install express and another command is npm install --save-dev nodemon to dev tool that restarts server on file changes.
3) Edited package.json file added scripts like node server.js and nodemon server.js.
4) Created server.js file inside vitae-hub-api and pasted code inside it.
5) And than i runned npm run dev command and than i copied http://localhost:3001 and pasted in browser i got result in browser as Welcome to Vitae Hub API!

Step12: Creating API Endpoints (Routing Basics)

Task
1) Added Step12 folder inside it Task folder and inside it i created api-demo folder and than inside it i initialised project in terminal with command npm init -y.
2) And than i installed express inside api-demo with command npm install express.
3) Added server.js file inside api-demo and coded inside it for post and get route.
4) And than i edited the server.js file and than i runned node server.js command and than igot http://localhost:3000/welcome address and than i runned it i got Hello! This is a GET request. and for post to check i went to visual studio code and installed extension thunder client and than i clicked new request selected post with url http://localhost:3000/send-data and than i clicked body and than i edited json file by adding name: Dixith and age:22,
5) And than i got output .

Exercise: 

Creative Exercise:

1) Added Step12 folder inside it Exercise folder and inside it i created my-api folder and than inside it i initialised project in terminal with command npm init -y.
2) And than i installed express inside my-api with command npm install express and also i runned command npm install --save-dev nodemon.
3) Added server.js file inside my-api and coded inside it for GET /api/appointmentsand GET /api/tasks Routes.
4) And than i edited the server.js file and than i runned npm run dev command and than i got http://localhost:3001  and than i runned it i got Welcome to the Vitae Hub API!. and for post to check     i went to visual studio code and installed extension thunder client and than i clicked new request selected post with url http://localhost:3001/api/appointments and also                            http://localhost:3001/api/tasks and than i clicked send it gave me json output and also i runned this addresses in browser it gave me json response.


Step 13 : The Filing Cabinet (Controllers & Routers)

Task 
1) Added Step13 folder inside it Task folder and inside it i created mvc-example folder and than inside it i initialised project in terminal with command npm init -y and than i runned npm install express.
2) Create data/storage.js - this simulates stored data so controllers can use it.
3) Create controllers/appointmentsController.js and also Create controllers/tasksController.js controllers get data, validate, modify, return HTTP responses.
4) Create routes/appointmentsRoutes.js and Create routes/tasksRoutes.js Each route file uses express.Router() to group related endpoints.
5) Create server.js and Start the server using command npm run dev.

Exercise:

Creative Exercise:

1) Created Exercise inside Step13 and than created a mvc folder and than i runned command npm init -y.
2) And than i runned commands like npm install express and than npm install --save-dev nodemon inside mvc folder to install express.
3) And than i created controllers folder and inside it i created appointmentController.js and started coding inside it.
4) Inside /routes, create appointmentRoutes.js. Use express.Router() to define the / route and link it to the getAllAppointments controller function.
5) Inside appointmentRoutes.js started coding.
6) In your main server.js, import and use the appointment router under the /api/appointments path.
7) Added taskController.js inside controllers.
8) Added taskRoutes.js inside routes.


Step 14 : The Traffic Guard (Middleware from Scratch)

Task
1) Added Step14 folder inside there is Task folder.
2) inside Task folder i have middleware folder inside it i installed express and no demon server.
3) And than i added a server.js file inside middleware folder.
4) And than i started coding inside server.js file i used middleware here and than i runned command node server.js in terminal.

Exercise:

Creative Exercise:

1) Created Exercise folder inside Step14 and than created a express-logger-demo folder inside Exercise folder and than i runned command npm init -y and than i runned npm install express to install    express.
2) Inside express-logger-demo folder created a folder by name middleware and inside it created requestLogger.js and started coding the file with requestlogger function.
3) Inside express-logger-demo folder created server.js file inside it started coding used requestLogger for every incoming request and routes and than runned command node server.js in terminal to     execute.


Step 15: The Blueprint (MongoDB Schemas from Scratch)

Task
1) Created Step15 folder inside it created another folder by name Task and than inside it created another folder by name mongoose-demo and runned command npm init -y inside it and than again i        runned npm install express mongoose dotenv and than npm install --save-dev nodemon.
2) Created db.js inside mongoose-demo to centralizes connection logic to connect to Mongoose.
3) Created server.js inside mongoose-demo.
4) Created models folder inside mongoose-demo and than inside models folder created User.js to Define a Mongoose schema & model.
5) Created routes folder inside mongoose-demo and than created users.js file inside routes folder to implement basic endpoints and than started server by running npm run dev or npm start.

Exercise
1) Added Exercise folder inside Step15 Folder and than inside Exercise folder created a mongoose-tasks folder and than runned commands npm init -y and npm install mongoose inside mongoose-tasks       folder.
2) Added models folder inside mongoose-tasks folder and than created a Task.js file inside models folder and than coded the file to create Mongoose schema & model.
3) Added server.js file inside mongoose-tasks folder and inside server.js file added minimal example showing how to connect and perform basic operations (create, read, update, delete) and than        runned command node server.js inside mongoose-tasks folder.


Step 16: Storing Information (Mongoose & CRUD)

Task
1) Added Step16 folder and inside it created sub folder with name as Task and than inside Task folder created another folder by name task-crud and than runned commands like npm init -y and npm install express mongoose dotenv and npm install --save-dev nodemon inside task-crud.
2) Next i created models folder inside it added Task.js file and than coded it to Create the schema and model.
3) Next i created controllers folder inside it i created taskController.js file and than i started coding it with Full CRUD functions with proper status codes and error handling.
4) Next i created routes folder inside it i created a file by name taskRoutes.js and started coding it with Hook controller functions to Express routes.
5) Next i created middleware folder inside it i created a file by name errorHandler.js and started coding it with a simple middleware to send errors.
6) Next i created server.js file inside task-crud folder and than started coding the server.js file with connect to MongoDB, mount routes and middleware and than runned npm run dev command to run     app.


   












