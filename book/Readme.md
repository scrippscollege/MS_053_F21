# About the book:

The web version: https://aesthetic-programming.net/
Git/Source:
- About the book (https://gitlab.com/aesthetic-programming/book/-/tree/master/source)
- Table of contents (https://gitlab.com/aesthetic-programming/book/-/blob/master/source/Table_Of_Contents.md)
- Preface (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/0-Preface)
- Design notes (https://gitlab.com/aesthetic-programming/book/-/blob/master/source/OSP.md)
- Ch.1: Getting started (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/1-GettingStarted)
- Ch.2: Variable geometry (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/1-GettingStarted)
- Ch.3: Infinite loops (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/3-InfiniteLoops)
- Ch.4: Data capture (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/4-DataCapture)
- Ch.5: Auto-generator (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/5-AutoGenerator)
- Ch.6: Object abstraction (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/6-ObjectAbstraction)
- Ch.7: Vocable code (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/7-VocableCode)
- Ch.8: Que(e)ry data (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/8-Que(e)ryData)
- Ch.9: Algorithmic procedures (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/9-AlgorithmicProcedures)
- Ch.10: Machine unlearning (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/10-MachineUnlearning)
- Afterword: Recurrent Imaginaries (https://gitlab.com/aesthetic-programming/book/-/tree/master/source/11-Afterword_RecurrentImaginaries)
- Bibliography (https://gitlab.com/aesthetic-programming/book/-/blob/master/source/bibliography.md)
- List of Projects (https://gitlab.com/aesthetic-programming/book/-/blob/master/source/projects.md)
- Selected student projects (https://gitlab.com/aesthetic-programming/book/-/blob/master/source/showcase.md)
- Acknowledgements (https://gitlab.com/aesthetic-programming/book/-/blob/master/source/acknowledgments.md)

## Sample code (public folder):

RunMe: https://aesthetic-programming.gitlab.io/book/

Repository: https://gitlab.com/aesthetic-programming/book/-/tree/master/public/p5_SampleCode

## All flowcharts (graphviz folder):

Source: https://gitlab.com/aesthetic-programming/book/-/tree/master/graphviz

# Website & publication

Both the website and publication are using pelican and have individual themes.

## Installation

To generate the website it is necessary to install pelican and a few other pyton libraries.

*The following steps should be executed in a terminal, shell or command prompt.*

First, make sure you have python 3 installed. The easiest way to do this is type `python3 --version` in a terminal or commandline. It should output a version number, if it doesn't it means you'll have to install it,  [download python here](https://www.python.org/downloads/).

(It is advisable to install the requirements in a virtual environment.)

First, navigate to the pelican folder. (Hint: type `cd `, it is important there is a space at the end. Then drag and drop the pelican folder in this repository. Then press enter. Now you should be in the pelican folder. You can verify this by typing `cwd` followed by an enter. This should print the current working directory. It should end in `pelican` )

To install the requirements run: `pip install -r requirements.txt` or `pip3 install -r requirements.txt`.

(in case you need to install pip for python3, the terminal command is `sudo apt-get install python3-pip`)

## Website

*The following steps should be executed in a terminal, shell or command prompt. It is assumed you've navigated to the pelican folder in this repository*

### Development

For development it is practical to use pelican's reload option which causes the site to be regenerated when a change is detected. The development server is started with the following command (-l stands for setting up the local server via http port 8000, -r stands for reload, and -s stands for settings):

```
pelican -lr -s pelicanconf_web.py
```

If your encounter errors regarding "$HOME/.local/bin not in PATH", you can type this in the terminal: `source ~/.profile, or` and retry the command above.

The site is now accessible through <http://localhost:8000>

### Publish

Generating the site for publishing is slightly different in that pelican assumes the site to be published online on a specific domain and generates the internal urls accordingly. Also, the `output` folder is cleared before the generation process is started. It is possible to set the `SITEURL` in the file `publishconf.py` (all the related files path will be then generated in absolute path according to the domain that you have set).

```
pelican -s publishconf.py
```

The generated site is written to the folder `output`. Upload those files to the server using your preferred method.

#### On-going website updates

*Assume pelican has been setup in the local machine with your own domain path (`SITEURL` in `publishconf.py`)*

1. Git pull the latest repository
2. Run the development command (`pelican -lr -s pelicanconf_web.py`) in the pelican folder and see the changes on the local web server
3. Generate the static site via the publish command (`pelican -s publishconf.py`) > locate in the `output` folder
4. Upload the site to the web server (for the machine learning models, a web server requires binary transfer mode - theme/p5_SampleCode/ch10_MachineUnlearning/models/AP_book/)

## Print publication

*The following steps should be executed in a terminal, shell or command prompt. It is assumed you've navigated to the pelican folder in this repository*

```
pelican -lr -s pelicanconf.py
```

Navigate to <http://localhost:8000/pages/archives.html> ?
