#!/usr/bin/python

import sys
import re

'''
Read a Markdown file via standard input and tidy the containing
Multimarkdown footnotes. The reference links will be numbered in
the order they appear in the text and placed at the bottom
of the file.

Based on "Tidying Markdown reference links" by Dr. Drang available at:

http://www.leancrew.com/all-this/2012/09/tidying-markdown-reference-links/

Do *not* place footnote reference links at the start of a line, bad things will
happen, your footnotes will be eaten by a grue.
''' 

# The regex for finding footnote reference links in the text. 
# It starts with a dot to check the ref doesn't start at the beginning of a line
link = re.compile(r'.(\[\^\w+\])')

# The regex for finding the footnote labels with the text.
#label = re.compile(r'(^\[\^\w+\]):(.+)', re.MULTILINE)
label = re.compile(r'(\[\^\w+\]):(.+)')

# Read in the file and find all the footnote-links and -references.
text = sys.stdin.read()
links = link.findall(text)
labels = dict(label.findall(text))


# Make a list of the footnote-references in order of appearance.
newlabels = []

for (i,j) in enumerate(links):
    try:
       newlabels.append("%s:%s" % (links[i], labels[links[i]]))
       del(labels[links[i]])
    except KeyError:
       pass

# LIST ORPHANED REFERENCES
for i in labels:
    newlabels.append("%s:%s" % (i, labels[i]))

# Remove the old footnote-references and put the new ones at the end of the text.
text = label.sub('', text).rstrip() + '\n'*2 + '\n\n'.join(newlabels)

print(text)
