from markdown.inlinepatterns import LinkInlineProcessor, IMAGE_LINK_RE
from markdown import Extension, util
import re

"""
  Overloads (Python) Markdowns image processor to insert {attach}
  in src's of local images.
"""

def isRelative (src):
  src = src.lower()
  if src and \
    (src.startswith('https://') \
    or src.startswith('http://') \
    or src.startswith('ftp://') \
    or src.startswith('/')):
    return False

  return True


class PelicanAttachImageInlineProcessor(LinkInlineProcessor):
    """ Return a img element from the given match. """

    def handleMatch(self, m, data):
        text, index, handled = self.getText(data, m.end(0))
        if not handled:
            return None, None, None

        src, title, index, handled = self.getLink(data, index)
        if not handled:
            return None, None, None
            
        if isRelative(src):
          src = '{attach}' + src

        el = util.etree.Element("img")

        el.set("src", src)

        if title is not None:
            el.set("title", title)

        el.set('alt', self.unescape(text))
        return el, m.start(0), index


class PelicanAttachImage(Extension):
  def extendMarkdown(self, md):
    md.inlinePatterns.register(PelicanAttachImageInlineProcessor(IMAGE_LINK_RE, md), 'pelican_attach_image_link', 155)


def makeExtension(**kwargs):
    return PelicanAttachImage(**kwargs)
