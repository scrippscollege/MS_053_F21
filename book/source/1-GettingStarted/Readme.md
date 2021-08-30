Title: 1. Getting started
page_order: 1

![flowchart](ch1_0.svg)

[TOC]

## setup()
It has become commonplace to include programming in educational programes at all levels and across a range of disciplines. Yet this still remains relatively uncommon in the arts and humanities, where learning to program does not align explicitly with the related career aspirations. This raises questions about what does or doesn't get included in curricula, why this may be the case, and which knowledge and skills are considered essential for some subjects and not others. Certain forms of privilege (related to class, gender, race) are clearly affirmed in these choices. For instance, in very general terms, "high culture" has traditionally been described as the domain of university-educated (wealthy, white) people, whilst "low culture" the domain of non-university-educated (working class) ordinary people. Neither high nor low culture, programming cuts across this class divide as both an exclusive and specialized practice[^1967] that is also one rooted in the acquisition of skills with applied real-world use in both work and play. Yet, despite its broad applicability, access to the means of production at the level of programming remains an issue all the same.  

We might usefully characterize this in terms of literacy — traditionally applied to the skills of reading and writing — and to further include the reading and writing of code. Indeed coding is often referred to as "the literacy of today," and as the twenty-first century skill "we must then learn to master [sic]."[^STEM] Arguably, knowing some basic coding skills will not only enhance future employability, but will also enable the improved understanding of how things (codes) are "encoded" and "decoded."[^Hall] Further echoing cultural studies, and its foundations in an expanded notion of literacy to include aspects of ordinary culture, Annette Vee's book *Coding Literacy* from 2017 is an attempt to shift our focus from technical skill to wider social relations. As she puts it, "Seeing programming in light of the historical, social, and conceptual contexts of literacy helps us to understand computer programming as an important phenomenon of communication, not simply as another new skill or technology."[^Vee]

So, what are the implications of coding framed in terms of literacy, and to whom does this apply? Although Vee's book is not a programming book and does not address the question of how to program, it weaves together parallel histories of writing and coding to compare and trace what is meant broadly by literacy, and how to understand the rise of computing and the cultural discourse around the importance of code and coding. Indeed, it has become common to discuss writing and coding, text and code in parallel, especially in the fields of electronic literature, digital humanities, and software studies.[^Cayley] (This parallel is also something we will develop in more detail in Chapter 7, "Vocable code.") It applies to all of us. We hope that something of this expanded coding literacy is facilitated by reading and using this book, and we take inspiration from Vee's arguments for coding literacy, in that it is no longer just "reading for comprehension" but also "reading for technical thought as well as writing with complex structures and ideas."[^Vee2] It is not simply a new way of reading and writing, but also a new way of thinking and understanding other codes. Such a compelling argument for literacy not only benefits individuals who acquire certain skills, but also has potential wider cultural and social ramifications, helping to force coding out of its specialization in certain disciplines and open up its critical and aesthetic potential.  

In 2016, Nick Montfort, a poet and academic, published *Exploratory Programming for Arts and Humanities*, a hands-on approach to programming. In the appendix, in response to the question "Why Program?" he outlines three key reasons[^Montfort]: learning to program allows us to think in new ways by introducing different methods and perspectives to raise new questions; programming offers us a better understanding of culture and media systems, subsequently allowing us to learn to develop better, or better analyze, cultural systems; and, finally, programming can help us improve society by creating, designing, and discovering programs. In general, we agree with Montfort on these points, but at the same time we see this as a means to open up different working methods, and, using programming as a basis for our thoughts, to speculate on alternative forms and political imaginaries of programming practice.

This opening chapter introduces some ideas and exercises to get started (the `setup()` so to speak) and reflects on why we need to learn to program. We hope this will help sustain motivation across subsequent chapters. In addition as we imagine that our readers do not necessarily want to become professional programmers, we stress programming as a means to think differently (as we tried to outline in the Preface). This applies to us too and we have learnt from others along the way, challenging our preconceptions, especially through the experience of working with students with little or no programming experience. Learning to code can be enjoyable and rewarding, but also annoying and frustrating, especially when complex syntax and structure are involved. It takes time to familiarize oneself with precise, unforgiving computational logic, and procedures, but hopefully the case for the importance of learning to program has been established by now. The choice is simple: "to program or be programmed."[^Rushkoff]
{: style="    letter-spacing: -0.2px;   word-spacing: -0.2px;"}

## start()

![ch1_1](ch1_1.png){: .float}
:   *Figure 1.1: p5.js web interface*

Throughout the book, we will use JavaScript as the main programming language, primarily focusing on p5.js and its associated libraries. Practically speaking, p5.js is a web-based library,[^library] that utilizes an open source JavaScript framework that makes creating projects with code on the web accessible, as well as much easier to share via the Internet, such as p5.js Web Editor, Open Processing, and Git hosting platforms, without additional installation. A JavaScript-based project can be run and executed using a URL in a browser.

JavaScript was originally developed in 1995 by Brendan Eich with the aim to run a program in the Netscape browser.[^Severance] Some people might be confused with the difference between JavaScript and Java, but basically they are two different systems. JavaScript is a lightweight programming language which is commonly used for animated visual and interactive web applications, and was originally designed to enhanced interface experiences, and to complement Java. Indeed, program code from any "high-level programming language" (i.e. one closer to human languages but further from machine language) requires a translation into native machine instructions/code for a computer to run and execute it. This translation process is usually done through interpreters or compilers. JavasScript is an interpreted language by design that in modern browsers, generally operates using both an interpreter and just-in-time compilers to translate source code at runtime.[^Clark] This makes it faster to kickstart the code running process, but takes longer when the application is more complex and with longer interactions, as extra runtime overhead will be incurred.[^Moon] On the other hand, Java, a compiled and complex programming language, was first released to the public in 1996 by Sun Microsystems, meaning that source code is typically written in an Integrated Development Environment (IDE).[^IDE] It is required to optimize and compile into static bytecode for computer processing by a Java Virtual Machine (JVM).[^JVM] Java powers many desktop and mobile applications, from small apps on Android mobile devices to games like Minecraft,[^Minecraft] while JavaScript mainly works for smaller web-based applications such as websites and bots. For an introduction to programming like this, we needed something that is relatively uncomplicated in terms of getting started, but has the capacity for proficiency development. This is often referred to as "low floors and high ceilings,"[^Papert] and JavaScript is a good tool from this perspective.

But there is much more to this than just introducing the tool from a pragmatic perspective. This book will use p5.js, a JavaScript library which was created by artist Lauren McCarthy in 2014 for the purpose of what we call "aesthetic programming." To be more precise about its genealogy, Casey Reas and Ben Fry developed the remarkable, influential open source project Processing in 2001,[^Processing] a Java-based desktop environment with the aim to reach out to visual artists and designers. However, McCarthy observed that the various creative open source software available was mostly developed by white men, and there was a lack of diversity in such environments, and unfortunately programming remains a very male-dominated practice.[^laczko] McCarthy started to explore what Processing would look like on the web. Importantly, the core idea for p5.js is not just to deploy Processing as a web-based platform, but to address diversity and inclusivity explicitly, and take these issues seriously in software development and communication. As McCarthy says, "thinking about community outreach and diversity is not a secondary goal of p5.js, it's the foundation on which the platform is built."[^McCarthy] Within just a couple of years, the p5.js contributors had developed a community statement, translated the interface into a variety of popular languages such as Spanish and Simplified Chinese,[^Chinese] started the homepage series as part of p5.js which showcased work by and interviews by Asian women and gender non-conforming coders,[^Jin] added a high constrast mode and audio feedback for people who have difficulty seeing,[^UX] and developed a series of workshops on creative expression called "Signing Coders" for people who have difficulty hearing,[^Choi] amongst other things. As p5.js demonstrates, software is not just a tool, but also about people and politics.[^chun]

## Working environment
You will need an editor to write and document your code. We will use [Atom](https://atom.io/),[^Atom] a free and open source text and source code editor that works across different platforms to write code. We choose a downloadable code editor as opposed to a web editor because we view code as more than just a piece of software, it is also about the relations with the configuration of your own computer and operating system, the way various browsers behave as well as data files, and the organization of folder paths, and so on.  

Additionally we use [Gitlab](https://about.gitlab.com/) as our code and text respository, at least for this book. We also use Gitlab for teaching purposes, a place where students can upload their ReadMe and RunMe files every week, for peer feedback and to facilitate peer learning, and to read and share code and related thinking. We have found this to be an effective way to work both individually and collectively, and share materials in keeping with the best principles of free and open source software development, and students use Readme to explain the technical aspects as well as to develop critical discussion.   

### p5.js
1. First go to the [download page](https://p5js.org/download/) of p5.js[^p5js] and get the p5.js complete library (in the compressed "p5.zip" format) by clicking it and saving the file, which includes all the necessary libraries to run the code.

2. Double click to unzip the file to extract all the files it contains. A new folder will be automatically created called "p5."

3. The next part is crucial to the on-going development process, because you have to somehow identify where your work folder will be located. If you have no idea, you may consider using the "Desktop" folder. ("Foldering" is a concept used for organizing files on your device, which is similar to organizing papers, folders, books on a bookshelf. Increasingly streamlined UX designs mean that many people find it alienating to navigate to or locate the path and directory of files, such as images, on a device as people are becoming increasingly accustomed to putting everything on the first few pages of a phone or simply on the desktop.)  

4. If you put the unzipped folder "p5" in a customized directory, then you should see the list of files in the folder as below. You should see the two p5.js libraries, one comprehensive file (p5.js) and one mini version (p5.min.js).


5. Click on the folder "empty-example," and you will see a list of the files you need to start:

    index.html
    :   the default Hypertext Markup Language (HTML) which will be first to be picked up by a web browser. HTML is a fundamental technology used to define the structure of a webpage and it can be customized to include text, links, images, multimedia, forms, and other elements.

    sketch.js
    :   the key work file for writing JavaScript. The word 'sketch' is used similarly to the way it would be in the visual arts, in other words it is a less formal means of working out or capturing ideas, and experimenting with composition.

    p5.js
    :   the p5.js core library.

    p5.sound.js
    :   the p5.js sound library[^sound] for web audio functionality, including features like playback, listening to audio input, audio analysis and synthesis.  

<div class="columns" markdown=1>
![ch1_2](ch1_2.png){: .small}
:   *Figure 1.2: p5 folder hierarchy*

![ch1_3](ch1_3.png){: .small  style="width: 190px;"}
:   *Figure 1.3: p5 folder hierarchy*
</div>


### Code editor {: style="margin-top: -16px;"}
Atom is used as the code editor for this book. It supports cross-platform editing and can be run on Mac OS, Windows and Linux.

1. Download the software Atom from the homepage: <https://atom.io/>
2. Drag the "p5" folder that you have just unzipped into Atom. You should be able to see the left-hand pane with your project. Try to navigate to the "index.html" file under the "empty-example" folder, double click that file and the source code should display on the right-hand pane. See below:

    ![](ch1_4.png){: style="height:300px;"}
    :   *Figure 1.4: Atom's file structure*

    "index.html" is usually the default page the web browser will display. You can customize the page title and other styling issues, but the focus for this chapter will be on navigating the libraries and running your first program. Since p5.js is a library, the lines 8-10 indicate how to incorporate JavaScript files and libraries by using the tags `<script>` and `</script>`.  
    {: style="letter-spacing: -0.1px;  word-spacing: -0.4px;"}

    The script currently uses relative paths, which is a useful concept when we need to understand how the libraries are operated, how to locate the files and how to incorporate new libraries and files in the future. JavaScript libraries are simply files, and we have to incorporate these files into the HTML so that they can be imported and read by the program. This means that when we use p5 syntax, the program can recognize this syntax and the corresponding function. For this particular example, it is important to be aware that the JavaScript libraries and the HTML file are in the same directory. If we move the libraries somewhere else, we will need to update the path.
    {: style="margin-bottom: 16px;"}


3. Next you will need to install a package called "atom-live-server,"[^liveserver] which is useful for setting up a web server so you can update your code and see the results immediately in a browser without needing to refresh it. You can first check under "Packages" on your menu bar of Atom and see if the package is there. If not, then go to "Edit > Preferences > '+ Install'," then type "atom-live-server." Hit the blue install button and you should be able to find it again in the Packages menu.

    ![](ch1_5.png)
    :   *Figure 1.5: Installing atom-live-server*

4. If you want to customize the theme like the background color of the panes, simply go to "Preferences > Themes."


## My first program
The default sketch.js is the work file. It contains only two functions. (A JavaScript function is a block of code designed to perform tasks.)

```javascript
function setup() {
  // put setup code here
}
function draw() {
  // put drawing code here
}
```

`function setup()`
:   → Code within this function will only be "run once" by the sketch work file. This is typically used to set the canvas size to define the basic sketch setup.

`function draw()`
:   → Taking cues from drawing practice in visual arts, code within this function will keep on looping, and that means `function draw()` is called on for each running frame. The default rate is 60 frames/times per second, and this is especially useful when things are set in motion or constantly being captured (we will continue with this in Chapter 3, "Infinite loops").
{: style="    letter-spacing: -0.1px;"}

From the above sample code, there are code comments which is indicated with the symbol "//", referring to text that are written for humans but not computers. This means a computer will automatically ignore those code comments when it executes the code. You may consider this as an explaination on how specific chunk of code works. Throughout the book, you will see `//` indicates a single line comment, and `/*……………*/` indicates multiple lines of code comments with the starting symbols "/\*" and the ending symbols "\*/."

Let's try to input these into the sketch to draw a canvas with a changing background (subtly lighten the black background color), then the sketch will further draw an ellipse located somewhere on the top left corner. (Double check the spelling and punctuation like curly brackets and semi-colons, indicating the scope of the function and end of the line respectively. Details of the code will be explained below.)

<sketch
  src="p5_SampleCode/ch1_GettingStarted/sketch.js"
  lang="javascript"
  data-executable
  data-download-link="https://gitlab.com/aesthetic-programming/book/-/archive/master/Book-master.zip?path=public/p5_SampleCode/ch1_Gettingstarted"
/>

To run the code, you need to go to "Packages > atom-live-server > Start Server" on Atom. A pop-up window appears, click on the "empty-example" folder; it should display something like this:
{: style="    letter-spacing: -0.2px;   word-spacing: -0.5px;"}

![](ch1_6.png){: style="height: 6cm"}
:   *Figure 1.6: My first program*  

<div class="section exercise" markdown=1>

## Exercise in class

This exercise is to familiarize you with the working environment, path and local directory so you learn that running a sketch in a web browser requires loading the exact path to the JavaScript libraries. You are also free to create your own folder name and rename the file sketch.js as you please. You can also try to change parameters by changing numbers to get a sense of how things work, but this will be explained in more detail later on in the book.

![](ch1_7.png)
:   *Figure 1.7: My first program 1.1*

1. **Stop the server.** Stop the atom-live-server by going to "Packages > atom-live-server > Stop."
2. **Rename the folder.** Try to rename the folder "empty-example" as "myFirstSketch" (in order to help the computer to process better, don't use any spaces). In the subsequent chapters and for the exercises below, you will create your own folders.
3. **Structure the p5 libraries.**
    - Try to create a folder called "libraries" under "myFirstSketch."
    - Drag the two p5 libraries into the newly created folder: "libraries."
    - Change the relative path of the two js libraries in index.html
4. **HTML.** Change the title in the HTML file (line 6)
5. **RUN again.** Can you run the program again ("Atom > Packages > atom-live-server > Start Server") so that you can see almost the same screen as Figure 1.7 in a web browser?
</div>

### Reading the web console "Hello World"
As you might realize by now, this book does not follow the conventions of most programming books by starting with the "Hello World" program that displays or prints "Hello World" onto the screen. In p5.js, `print()` is the function to print,[^print] but in a web browser setting which makes the `print()` function write in the "console area." This is an area not intended for end users, but for programmers or developers to see if there are any error messages, which are logged to the console and to check that code is executing in the expected way.

In the sample code (see Figure 1.6), the line 4 prints "hello world." But to see the text, you need to open the web console area the location of which depends on the browser you are using. Try to search for it by navigating the menu bar. In Firefox, for instance, it is located under "Tools > Web Developer > Web Console" (or press the keyboard shortcut: `Ctrl + Shift + K` for Linux/Windows, and `Option + Command + K` for Mac).

![](ch1_8.png){: .medium}
:   *Figure 1.8: The web console area*

At the bottom of Figure 1.8, the web console area shows the highlighted words "hello world." This tells you the sketch is running properly and it is able to read the print function line. As you progress through this book, you will notice how important the web console area is, because it also displays error messages if, for example, the syntax is wrong (we will discuss errors in Chapter 8, "Que(e)ry data"). In such cases the browser will give you some good hints for debugging your code.[^console] Figure 1.9 shows that the web console area is able to specify which file (sketch.js), which line of code (Line 8) has a problem (the syntax background was spelled wrong intentionally), and it even suggests how you may correct it.

![](ch1_9.png)
:   *Figure 1.9: Example of syntax error*  

Hello World programs have a long history in computing, are typically used to introduce programming languages to beginners, and ensure things are running as they should. Readers understand the line `print("hello world")` quite literally as it is written in "natural" language. At the same time the computer is executing precisely what you tell it to do, printing a text through an "instruction," giving an immediate result which can be very rewarding. The immediate feedback "produces a feeling of power" as the programmer starts to exert control over the code and its meaningful expression in the world.[^Chun2] The programmer learns to express themselves in a new language as if speaking for the first time, hence the seemingly naïve address, announcing themselves to the world. The project [*hallo welt! (hello world!)*](http://www.anti-thesis.net/hello-world-60/),[^Hello] by Geoff Cox and Duncan Shingleton plays on this communicative act, looping more than 100 Hello World programs written in different programming languages, alongside a selection of human languages, combining them into a real-time, multilingual, machine-driven confusion of tongues (as in *The Tower of Babel*).[^Babel]

## Reading the reference guide
To further explain the remaining parts of the sample code, this book will show you how to learn independently, particularly by learning to read the reference guide so you can explore things on your own. In the sample code, there are a few functions that you will see alongside `print()`: these include `createCanvas()`, `background()`, `random()`, `ellipse()`.

To summarize, what the sample code above does is initialize the exact canvas size (`createCanvas(640,480);`), set the width to 640 pixels and the height to 480 pixels providing an overall drawing area (see Line 3 of the sample code). This is why the background covers only the canvas area and the rest of the area remains the (default) white background. The sketch will pick a random color (from grey to black) as the background color at a given time, covering the whole canvas (`background(random(50));`). The last part is to draw an ellipse at a certain position and of a certain size (`ellipse(55,55,55,55);`). Locating this within the `function draw()`, the program will constantly and repetitively execute the lines of code. The repetition is made obvious in the sample code by the background color changing over time.

![](ch1_10.png)
:   *Figure 1.10: The reference guide example - ellipse()*

To understand the parameters of each p5.js built-in functions, such as how many parameters in a function like `ellipse()`, we can turn to "References" from the p5.js website. The [reference page](https://p5js.org/reference/) lists most of the available p5.js built-in functions, and once you get used to their presentation, it will become easier and faster to learn and write the syntax provided.

Let's read the reference in Figure 1.10 together - [`ellipse()`](https://p5js.org/reference/#/p5/ellipse).[^ellipse] It usually starts with an example and an illustration, and you can click the "edit" button to modify the code, changing the parameters on the fly immediately displaying the results on screen. The description part of the reference page explains how the function syntax works and this is especially useful for beginners who might have little idea about the parameters/numbers and what this entails for each parameter within a function. The syntax area demonstrates how the built-in function should be written precisely, such as how many parameters for that function. For example, in the case of `ellipse(x, y, w, [h])`, it explains how the first parameter x and the second parameter y are used to set the location of the ellipse in terms of x and y coordinates. The canvas is demarcated using pixel units and the [0,0] coordinates start in the top left corner of the canvas. The parameter w and h refers to the width and height of the ellipse, and you can also think of this as defining the diameter, or setting the size, of the ellipse. The square bracket "[h]" is an optional parameter if the width and height of the ellipse is the same.

![](ch1_11.png){: .medium}
:   *Figure 1.11: Visualizing the ellipse*

What we want to demonstrate here is that it is important to start with the references, then explore other syntaxes and features, for example shapes like rectangles and polygons. There are still other syntaxes in the sample code that we haven't explained in detail, so perhaps you can find the corresponding references in the p5.js web reference material and explore these yourself. However, we will continue to explore the color function in the next chapter, and the `random()` function in the one following that.

## Git
We use Git both to write this book as well as teach. Git is an open source software management system developed by Linus Torvalds in 2005, the creator of Linux Kernel architecture that is used in the Linux operating system. It is used to track changes in any files, facilitating versioning control of variations in a distributed network. It is particularly useful for large-scale collaborative programming in which individuals work on different parts of the software with their own machine by copying (forking), splitting (branching), and combining (merging). Git uses a distributed model in which every contributor maintains and has a copy of the main repository.

GitLab is an open source, web-based, Git repository platform that hosts software libraries and source code contributed by software developers. GitLab is also a social platform, where people can leave comments, follow other software development processes, fork the whole program into their own repository, and so on. All this book's content, including the readme files, source code and libraries are stored on the GitLab platform under a creative commons license, giving other people the rights to share, use and build upon this work. We imagine this is just the first iteration of this book and we hope to see many re-appropriations and forks of the entire book, so people can use the existing framework to make modifications, such as adding new chapters, examples and exercises, as well as more related content and references that facilitate the interactions between programming and thinking.

For simplicity's sake, we use GitLab's web interface for some of our writing and teaching, and for students to hand-in their weekly RunMe[^runme] and ReadMe[^readme] files. We also use GitLab for peer feedback so that students can read and learn from each other's work.

![gitlab](ch1_12.png)
:   *Figure 1.12: Create a new project with the GitLab web interface*

1. Go to [Gitlab.com](Gitlab.com), then register an account by clicking "Register" on the navigation bar.
2. To create a new project: Go to "Projects > New Project" (see Figure 1.12).
3. Provide a project name and project description, and click "Public" if you want others to be able to access this project without any authentication.
4. At this point you can also initialize a ReadMe within the repository by ticking the checkbox.
5. A folder in your repository will then be created.
6. To upload the file or create a directory, simply click on the "+" sign under the repository project name (see Figure 1.13). GitLab allows you to customize a commit message (to keep track of changes from a general and communications perspective), we can therefore input the message before clicking the button "Commit changes."

![gitlab1](ch1_13.png){: .medium}
:   *Figure 1.13: Manage directories/files using the GitLab web interface*

If you need other features: previewing the markdown file, deleting or renaming files/folders, the GitLab Web IDE editor has some advanced features you can use (this is located at the top right, see Figures 1.13 and 1.14).

![gitlab2](ch1_14.png){: .medium}
:    *Figure 1.14: The GitLab Web IDE*

## While()

Briefly introduced above, Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can also be used to track changes in any set of files, including the workflow of the chapters of this book. It is a repository that includes a complete history of changes and full version-tracking abilities. Its serious workflow management functionality is somewhat undermined by speculation surrounding the name "Git," and whether it is an acronym or not. Allegedly, Torvalds who developed it as a content tracker for Linux (which he also developed), named it "Git," an offensive British slang word in the common idiom "stupid old git," to mock himself. Similarly it has been referred to as a "stupid content tracker," but this is hardly the case as in reality it is a fast, scalable, and effective distributed revision control system.[^Git] For clarity, git is spelled "git" (for the command) and "Git" (for the product), not "Git" (for the person), since it is not an acronym, but rather an expression of the intent to do something: a tool which does not try to be overly smart but not stupid either. Moreover the ability to make multiple versions is an overtly social act, an expression of the belief in sharing ideas and labor (just like the p5.js community[^p5Community]) for the commons, and as such protected under the legal protection of the GNU General Public License which guarantees users the freedom to run, study, share and modify their software.[^GNUGPL]

Like the debates over "Git" and "git," the use of words becomes hugely significant in terms of their meaning and ability to do things in the world in programming as well as in everyday situations. Another example, of decolonizing software, is the use of the terms "master" and "slave" in programming (where one process exerts control over another process within a dependent relationship), which is considered "a broken metaphor" and "an oppressive metaphor" according to Ron Eglash and The Internet Engineering Task Force (IETF) respectively.[^term] In daily interpersonal communications, a further example in language would be the politics of pronouns and how the use of "she," "he," or "they" indicates particular subject positions when referring to people and in the gendering of objects, given that language tends to be "man-made."[^Spender] The importance of this is how to do things with words ethically given that words have effects as Judith Butler, amongst others, has incontrovertibly demonstrated; in *Excitable Speech*, Butler shows how words can be "injurious."[^Butler] We will return to the analogy between speech and programming in Chapter 7, but for now it is enough to say that words have social and political consequences, and this extends to the naming of computational objects and functions.[^Cox] Whether they are directly executable or not they still have effects.

This politics of language was touched upon in the first section of this chapter, through what we might call an "expanded literacy" — the ability to read, write, and "program" — an enhanced understanding of the relationship between what words mean and do in terms of wider culture. Literacy is crucially important to explain how new kinds of reading and writing are required to account for significant cultural and technical changes which includes issues of access. To clarify, we can refer back to the beginnings of Cultural Studies as a field, and Richard Hoggart's *Uses of Literacy* (published in 1957) that included working class (or mass) cultures as part of what we call "culture," previously the preserve of an elite, thereby introducing an expanded notion of literacy.[^Hoggart] Clearly literacy is a shifting notion, changing across cultures, and underpinned by the changing relations between speaking and writing that were also explored by Walter J. Ong in *Orality and Literacy*, who argued that the electronic age has sharpened our understanding through the "secondary orality" of media that all depend on writing in various ways.[^Ong] The written words of programming, for instance, demonstrate how our language has been further enhanced by new forms, and how writing is a form of action and not simply a referent of thinking.

In this book we weave together the words and actions of human and computer languages, recognizing that they are not equivalents as such. The syntax of JavaScript that we use in this book is one specific instance of this — useful for learning programming fundamentals and basic concepts — but also allowing for experimentation with "secondary notation." By this, we mean adjusting the formal notation to allow it to be more easily understood, providing opportunities for other creative expressions through semantic ambiguity. Think, for instance, of the use of "class" to describe one or more objects in object-oriented programming as well as stratifications in society based on economic and social status. An excellent example of this is Harwood's codework *Class Library*, a melding of program code and written text that stresses the material conditions of working with code and the possibility of class action.[^Graham] You might want to look this term up in the references section to clarify your technical understanding.[^class]  

This argument for programming or coding as a necessary skill for contemporary life seems indisputable, and there are plenty of examples of initiatives related to computational literacy and thinking, from online tutorials to websites such as Codecademy.org and Code.org. As introduced at the beginning of this chapter, Vee's *Coding Literacy*  also explores these connections, arguing how the concept of literacy underscores the importance, flexibility, and power of writing for and with computers.[^Vee3] An important aspect of this is that, not only does this help us to better understand the social, technical and cultural dynamics of programming, but it also expands our very notion of literacy and its connection to a politics of exclusion (as with other non-standard literacies). Furthermore, and given that programming, like other forms of writing, performs actions, it presents itself as a way to reconceive politics too: not simply writing or speaking, arguing, or protesting in public, but also demonstrating the ability to modify the technical processes through which the action is performed, in recognition of the ways in which power and control are now structured at the level of infrastructure.[^Kelty]

Your first program is a means to engage with these ideas, to run some code. As this is not meant to be, nor can be, simply a technical exercise, we ask you to make the critical and practical aspects explicit in producing a ReadMe and a RunMe. This book serves as a guide for this initial task as well as subsequent ones: to run some code, and think with it.


* * *

<div class="section exercise" markdown=1>

## MiniX: RunMe and ReadMe

Make a RunMe and a ReadMe.

**Objective**

* To learn the basic setup, including writing code with a code editor, running code with a web browser, independent study of code syntax, creating a ReadMe file, etc.
* To start thinking with programming conceptually.

**For additional inspiration**

* *Daily Sketch in Processing* by Saskia Freeke, <https://twitter.com/sasj_nl> (and her talk can be found at <https://youtube.com/watch?v=nBtGpEZ0-EQ>); *All the Daily Things* by Saskia Freeke (2018), <https://vimeo.com/309138645>.
* Zach Lieberman's Instagram page, <https://instagram.com/zach.lieberman/>.
* "Basics in OpenProcessing," <https://openprocessing.org/browse/?q=basics&time=anytime&type=all#>.
* "Creative Coding with Processing and p5.js," <https://fb.com/groups/creativecodingp5/>.

**Task (RunMe)**

1. Study at least one example of syntax from the p5.js reference site, <https://p5js.org/reference/>. (Of course, it is always good to know more than one. Be curious!)
2. Familiarize yourself with the reference structure: examples, descriptions, various pieces of syntax and parameters (This knowledge will give you an essential, life-long skill for learning new syntax on your own).
3. Use, read, modify (or even combine) the sample code that you find (the most basic level is changing the numbers), and produce a new sketch as a RunMe.

**Questions to think about in your ReadMe**

* What have you produced?
* How would you describe your first independent coding experience (in relation to thinking, reading, copying, modifying, writing code, and so on)?
* How is the coding process different from, or similar to, reading and writing text?
* What does code and programming mean to you, and how does the assigned reading help you to further reflect on these terms?
</div>

## Required reading

* Lauren McCarthy, "Learning While Making p5.js," *OPENVIS* Conference (2015), <https://youtube.com/watch?v=1k3X4DLDHdc>.
* "p5.js | get started," <https://p5js.org/get-started/>.
* Daniel Shiffman, "1.1: Code! Programming with p5.js" (2018), <https://youtube.com/watch?v=yPWkPOfnGsw>.
* Annette Vee, "Coding for Everyone and the Legacy of Mass Literacy," in *Coding Literacy: How Computer Programming Is Changing Writing* (Cambridge, MA: MIT Press, 2017), 43-93.

## Further reading

* Wendy Hui Kyong Chun, "On Software, or the Persistence of Visual Knowledge," *Grey Room* 18, January (2005): 26–51, <https://doi.org/10.1162/1526381043320741>.
* Brian Lennon, "JavaScript Affogato: Programming a Culture of Improvised Expertise," *Configurations* 26, no. 1, Winter (2018): 47-72.
* Nick Montfort, “Appendix A: Why Program?” Exploratory Programming For the Arts and Humanities (Cambridge, Mass.: MIT Press, 2016), 267-277.

## Notes

[^1967]: In the 1960s the opportunities for getting a job, regardless of gender and educational background, in the area of programming was enormous. With low entry barriers, prior coding experience nor college-educated training were not prerequisites, and companies generally offered on-the-job training. Many women entered the programming field and climbed up the "computer ladder" during the early years of computing history, according to Lois Mandel, "The Computer Girls," *Cosmopolitan* (April 1967): 52-56. However, although computer programming "started out with an ambiguous gender identity, [it] was gradually and deliberately transformed into a high-status, scientific, and masculine discipline," according to Nathan Ensmenger, “Making Programming Masculine,” in *Gender Codes: Why Women are Leaving Computing*, Thomas J. Misa, ed. (Hoboken, NJ: John Wiley, 2010), 115-141.

[^STEM]: Having programming skills has become a prerequisite in education and business globally. See, for instance, <https://ec.europa.eu/digital-single-market/en/coding-21st-century-skill> and <https://news.microsoft.com/apac/features/coding-way-brighter-future-2018-beyond/>. The opening up of programming beyond specialized disciplines, the so-called "STEM" subjects, sets the conditions for what we refer to as "aesthetic programming."

[^Hall]: We are thinking of Stuart Hall's essay "Encoding/Decoding" in which he argues that people can play an active role in decoding messages, in Stuart Hall et al, eds. *Culture, Media, Language* (London: Hutchison, 1980), 128-38.

[^Vee]: Annette Vee, *Coding Literacy: How computer programing is changing writing* (Cambridge, MA: MIT Press, 2017), 4. Beyond coding literacy, we can also observe other kinds of literacy in mainstream media, policy making, and academic discourse, such as procedural, data and digital literacy. See Ian Bogost, "Procedural Literacy: Problem Solving with Programming, Systems, & Play," *The Journal of Media Literacy* 52, no. 1-2 (2015); Michael Mateas, "Procedural Literacy: Educating the New Media Practitioner," *On the Horizon. Special issue. Future of Games, Simulations and Interactive Media in Learning Contexts* 13, no.1 (2005); Annette N. Markham, “Taking Data Literacy to the Streets: Critical Pedagogy in the Public Sphere," *Qualitative Inquiry* (August 2019). doi:10.1177/1077800419859024; Teressa Umali, "Exclusive: Promoting Digital Literacy in the Philippine Education System," *OpenGov Asia*, available at  <https://www.opengovasia.com/promoting-digital-literacy-in-the-philippine-education-system/>.

[^Cayley]: John Cayley, "The Code is Not the Text Unless it is the Text," *Electronic Book Review* (2002), available at <http://electronicbookreview.com/essay/the-code-is-not-the-text-unless-it-is-the-text/,> see also Katherine Hayles, *Writing Machines* (Cambridge, MA: MIT Press, 2002).

[^Vee2]: Vee, *Coding Literacy: How computer programing is changing writing*, 45-58.

[^Montfort]: Nick Montfort, *Exploratory Programming for the Arts and Humanities* (Cambridge, Mass.: MIT Press, 2016).

[^Rushkoff]: We take this from Douglas Rushkoff's *Program or Be Programmed: Ten Commandments for a Digital Age* (New York: OR books, 2010).

[^library]: A library is a collection of resource in the form of code containing programming functions and their details. Those functions can be used to develop software programs and applications.

[^Severance]: Charles Severance, "Javascript: Designing a Language in 10 Days," *IEEE Computer Society*, February (2012), 7-8.

[^Clark]: Lin Clark works at Mozilla and turns code into cartoons. Here she explains how JavaScript is run in the browser, see <https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/>.

[^Moon]: Seong-Won Lee and Soo-Mook Moon, "Selective Just-in-time Compilation for Client-side Mobile JavaScript Engine", in *Proceedings of the 14th International Conference on Compilers, Architectures and Synthesis for Embedded Systems (CASES '11)* (New York: ACM, 2011), 5-14. DOI: <https://doi.org/10.1145/2038698.2038703>

[^IDE]: IDE is a software application that provides a more comprehensive and integrated environment for software development. It usually consists of a source code editor, build automation tools and a debugger. In this book we use Atom as the code editor, but it requires another tool for debugging such as a browser's web console. One example of IDE would be Processing, an open source, standalone application built for the visual and electronic art communities. See <https://en.wikipedia.org/wiki/Integrated_development_environment>.

[^JVM]: JVM refers to a virtual environment in a machine (usually a computer) that can run and execute programs in the form of Java bytecode written in programming languages such as Java. JVM performs operations such as loading, verifying, executing code and offers a runtime environment. See <https://en.wikipedia.org/wiki/Java_virtual_machine>.

[^Minecraft]: See <https://minecraft.gamepedia.com/Development_resources>.

[^Papert]: A concept was first formulated by mathematician, computer scientist, and educator Seymour Papert who was an MIT Professor and created the design principle for a programming language called Logo. See Seymour Papert, *Mindstorms: Children, Computers, and Powerful Ideas* (New York: Basic Books, 1980).

[^Processing]: See <https://processing.org>.

[^laczko]: The lack of gender diversity is also reflected in the Aesthetic Programming course feedback in 2017, with a student commenting that "code is not a gentlemen's club that only belongs to computer scientists." Artist Juli Laczko's research and practice address the issue of gender and stereotyping in the history of computing. One of the examples is the artwork *webmachine*, which is a reversed analog weaving computer. It is an online software piece that uses punch card technology to translate a binary text into visual code. The project looks into the history and labor practices of weaving and how culture reinforces stereotypes in computing. See <https://digital-power.siggraph.org/piece/webmachine/>.

[^McCarthy]: Lauren McCarthy, "P5js Diversity & Floss Panel Introduction" (2015). Video available at <http://opentranscripts.org/transcript/p5js-diversity-floss-panel-introduction/>.

[^Chinese]: p5.js is now available in Spanish, see Maya Man, *Processing Foundation* (2016), available at <https://medium.com/processing-foundation/p5-js-is-now-available-in-spanish-3d1eab9dffa0>; see also Kenneth Lim, Chinese Translation for p5.js and preparing a future of more translations (2018), available at <https://medium.com/processing-foundation/chinese-translation-for-p5-js-and-preparing-a-future-of-more-translations-b56843ea096e>.

[^Jin]: Such a series with a focus on diversity within code+art and placed under the subdomain of p5.js, created and curated by Chelly Jin, diversity.p5js.org.

[^UX]: A UX-research project by Claire Kearney-Volpe, <https://www.clairekv.com/p5js-ux-research>.

[^Choi]: A project by artist and educator Taeyoon Choi, <http://taeyoonchoi.com/soft-care/signing-coders/>.

[^chun]: Chun politicizes the concept of software, and, in particular, she traces the history of automatic programming, the rise of the binary distinction between hard and software, as well as the erasure of gazes. See Wendy Hui Kyong Chun, “On Software, or the Persistence of Visual Knowledge,” *Grey Room* 18 (January 2005): 26–51. <https://doi.org/10.1162/1526381043320741>.

[^Atom]: <https://atom.io/>.

[^p5js]: p5.js download page, <https://p5js.org/download/>.

[^sound]: <https://p5js.org/reference/#/libraries/p5.sound>.

[^liveserver]: <https://atom.io/packages/atom-live-server>.

[^print]: <https://p5js.org/reference/#/p5/print>.

[^console]: p5.js has built in "The Friendly Error System" to help coders especially beginners. The library considers a well-designed and user friendly debugger "written in a right tone "can lower the barrier for inexperienced users." See A. Mira Chung, "Friendly Error System for p5.js", *Processing Foundation* (2017), <https://medium.com/processing-foundation/2017-marks-the-processing-foundations-sixth-year-participating-in-google-summer-of-code-d365f62fc463>.

[^Chun2]: Wendy Hui Kyong Chun and Andrew Lison argue the first "Hello World" program we learn is enjoyable and seductive. We will say more about this in the following chapter. See Chun and Lison, "Fun is a Battlefield: Software between Enjoyment and Obsession," in Olga Goriunova, ed., *Fun and Software: Exploring Pleasure, Paradox and Pain in Computing* (New York, London: Bloomsbury, 2014), 180.

[^Hello]: *hallo welt! (hello world!)* was a collaboration between Geoff Cox and Duncan Shingleton, see <http://www.anti-thesis.net/hello-world-60/>.

[^Babel]: *The Tower of Babel*, designed to reach heaven, displeased God such that "he" decided to confound the single language of Adam so that people would not understand each other’s speech (*Genesis* 2:19 & 11:1-9). Subsequently everyone is left to "babble" in a diversity of languages the so-called confusion of tongues. The code expresses this confusion, but also invokes free speech, allowing the web browser to "speak" through software according to what it is said/written. "It is both a computer-readable notation of logic and a representation of this process, both script and performance; and in this sense it is like spoken words" as Cox reminds us. See Geoff Cox, *Speaking Code: Coding as Aesthetic and Political Expression* (Cambridge, Mass: MIT Press, 2013), 3.

[^ellipse]: See <https://p5js.org/reference/#/p5/ellipse>.

[^runme]: To run the JavaScript via GitLab on a web browser, you need to do some configuration in the repository before uploading any source code. A new file (.gitlab-ci.yml) is created in the root of the project repository, containing a set of jobs and their specifications that are required to run on GitLab. You can follow GitLab's guidelines (in terms of the code in the yml file as well as the use of repository as a website) here, <https://gitlab.com/pages/plain-html/-/blob/master/README.md>.

[^readme]: The readme file is structured in a markdown format with the file extension as ".md". It is a lightweight markup language supporting simple text formatting with special syntax. Files with this extension can be processed by GitLab and display in a more readable form visually on the web. For more about the syntax of writing in markdown, see: <https://docs.gitlab.com/ee/user/markdown.html>.

[^Git]: This discussion is summarized at <https://stackoverflow.com/questions/43959748/what-is-the-abbreviation-of-git>.

[^p5Community]: See <https://github.com/processing/p5.js/wiki>.

[^GNUGPL]: See <https://www.gnu.org/licenses/lgpl-3.0.txt>.

[^term]: Not before time many software communities have decided to stop using "master-slave," such as Django and Python, and have replaced with alternative terms. See, <https://tools.ietf.org/id/draft-knodel-terminology-00.html#rfc.section.1.1>. According to Ron Eglash, the term master-slave suggests the element of control in a dependent relationship, however it is not accurately described technically and has further raised the ethical issues in using broken metaphor in computing. See, Ron Eglash, "Broken Metaphor: The Master-Slave Analogy in Technical Literature," *Technology and Culture* 48, no.2 (2007): 360–69. <https://doi.org/10.1353/tech.2007.0066>.

[^Spender]: Foundational reading on this issue would be Dale Spender's *Man-Made Language* (1980), <https://www.marxists.org/reference/subject/philosophy/works/ot/spender.htm>.

[^Butler]: Judith Butler, *Excitable Speech: A Politics of the Performative* (London: Routledge, 1997).

[^Cox]: See also Geoff Cox & Alex McLean, *Speaking Code: Coding as Aesthetic and Political Expression* (Cambridge, MA: MIT Press, 2013).

[^Hoggart]: Richard Hoggart, *The Uses of Literacy: Aspects of Working Class Life* [1957] (London: Penguin, 2009).

[^Ong]: Walter J. Ong, *Orality and Literacy: The Technologizing of the Word* [1982] (London: Routledge, 2002).

[^Graham]: See Harwood's "Class Library", in Fuller ed., *Software Studies*, 37-39.

[^class]: See, <https://p5js.org/reference/#/p5/class>.

[^Vee3]: Vee, *Coding Literacy*.

[^Kelty]: This point is largely derived from Kelty's *Two Bits*, which uses the phrase "running code" to describe the relationship between "argument-by-technology and argument-by-talk." See Christopher Kelty *Two Bits: the Cultural Significance of Free Software* (Durham: Duke University Press, 2008), 58. Clearly programmers are able to make arguments as people can in other rhetorical forms, see Kevin Brock, *Rhetorical Code Studies: Discovering Arguments in and around Code* (Ann Arbor, MN: University of Michigan Press, 2019).

[^webeditor]: Processing Foundation announced the official release of the p5.js Web Editor in 2018, an online platform for learning and running code, and it is easy to get started with no additional installation of software. See <https://medium.com/processing-foundation/hello-p5-js-web-editor-b90b902b74cf>.

[^Reference]: See <https://p5js.org/reference/>.
