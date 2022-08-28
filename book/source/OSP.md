Title: Design notes
page_order: -1

<!--
Open Source Publishing questions the influence and affordance of digital
tools through its practice of (commissioned) graphic design, pedagogy,
and applied research. Hence they prefer to use exclusively free and open
source softwares (F/LOSS). Currently the group is composed of people
with backgrounds in graphic design, typography, and software development. They
find excitement in the cross-over between its members respective fields
and competences.
-->

## Book layout
Since 2013, Open Source Publishing (OSP) makes printed publications with web technologies: HTML,
CSS, and Javascript. The use of these technologies allows for new kinds of
layout and new publication pipelines where multiple output formats
(website, book, ebook) can be produced based on the same content. The
contents of this book were written in the Markdown markup language and
synchronized between the authors and designers using Git, a
collaborative tool. The sources were then transformed into HTML with
[Pelican CMS](https://blog.getpelican.com/). The web version lets the
reader view and live test the sample codes of each chapter. For the
printed version of the book, the polyfill
[paged.js](https://www.pagedjs.org/) was used to augment browser support
for styling paged media with CSS. Both versions are independent and
complementary.

## Fonts
All fonts of the book have been chosen because they were drawn
with code.

Body and headers fonts used in this book are part of a larger font
family drawn by A.V. Hershey in the 1960s and were developed specifically
for vector plotters. Limited by the technical limitations of these
plotters, curves are segmented into small, straight lines. Furthermore, as
vector plotters draw using a single line width, varying line thickness
is simulated by placing lines close to each other. The specific
variants displayed in the book were reinterpreted with Metafont. The
body fonts are from the Hershey Noailles family, interpreted by Antoine
Gelgon, transforming the segmented curves into real curves. The Hershey
Times in the headers was interpreted by Gijs de Heij and Simon Egli,
(ab-)using Metafont's "most pleasing curve" to generate its particular
shapes.

The code samples are set in OCR-pbi, a font family drawn with Metafont
by Antoine Gelgon. The skeleton of this font is based on the OCR-B,
drawn by Adrian Frutiger in an effort to draw a monospace font readable
by both machines and humans.
