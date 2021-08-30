from pelican import signals
from bs4 import BeautifulSoup
import os.path

def include_sketches (contentObj):
  basepath = contentObj.settings.get("SKETCH_BASEPATH", "")
  basepath_public = contentObj.settings.get("SKETCH_BASEPATH_PUBLIC", "")
  default_p5_path = contentObj.settings.get("SKETCH_P5_PATH", "")

  if contentObj._content:
    soup = BeautifulSoup(contentObj._content, "html.parser")

    # Find all figures
    for sketch in soup.select('sketch'):
      path = os.path.join(basepath, sketch['src'])

#
# Make a pre
# inside a code, with class language, insert dependencies through the data tags?

      if os.path.exists(path):
        with open(path, 'r') as h:
          code = soup.new_tag('code')
          code.string = h.read()
          code['class'] = 'language-' + sketch.get('lang')
          code['src'] = os.path.join(basepath_public, sketch['src'])

          if 'data-base-url' in sketch.attrs:
            code['data-base-url'] = os.path.join(basepath_public, sketch.get('data-base-url'))

          if 'data-download-link' in sketch.attrs:
            code['data-download-link'] = sketch.get('data-download-link')          

          if 'data-executable' in sketch.attrs:
            code['data-executable'] = 'executable'

          if 'data-linenostart' in sketch.attrs:
            code['data-linenostart'] = sketch.get('data-linenostart')

          if 'data-autoplay' in sketch.attrs:
            code['data-autoplay'] = sketch.get('data-autoplay')   

          if 'data-continue-on-exception' in sketch.attrs:
            code['data-continue-on-exception'] = 'on'

          if 'data-max-run-time' in sketch.attrs:
            code['data-max-run-time'] = sketch.get('data-max-run-time')

          if 'data-requirements' in sketch.attrs:
            requirements = sketch.get('data-requirements').split(',')
            code['data-requirements'] = ', '.join([os.path.join(basepath_public, p.strip()) for p in requirements])

          code['data-p5-path'] = os.path.join(basepath_public, sketch.get('data-p5-path')) if 'data-p5-path' in sketch.attrs else default_p5_path

          pre = soup.new_tag('pre')
          pre.append(code)
          sketch.replace_with(pre)
      else:
        print('File not found for sketch `{}`.'.format(path))
      # for img in figure.select('img'):
      #   imgClass = img.get('class')
      #   if imgClass:
      #     figureClass = figure.get('class')

      #     if figureClass:
      #       figure['class'] = figureClass + imgClass
      #     else:
      #       figure['class'] = imgClass
        
    contentObj._content = str(soup)

def register():
  signals.content_object_init.connect(include_sketches)