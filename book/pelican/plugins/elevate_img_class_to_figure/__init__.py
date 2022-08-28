from pelican import signals
from bs4 import BeautifulSoup

def elevate_img_class_to_figure (contentObj):
  if contentObj._content:
    soup = BeautifulSoup(contentObj._content, "html.parser")

    # Find all figures
    for figure in soup.select('figure'):
      for img in figure.select('img'):
        imgClass = img.get('class')
        if imgClass:
          figureClass = figure.get('class')

          if figureClass:
            figure['class'] = figureClass + imgClass
          else:
            figure['class'] = imgClass
        
    contentObj._content = str(soup)

def register():
  signals.content_object_init.connect(elevate_img_class_to_figure)