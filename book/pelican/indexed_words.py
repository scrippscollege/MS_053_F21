from markdown.inlinepatterns import InlineProcessor
from markdown.extensions import Extension
from markdown.util import etree, AtomicString
    
INDEXED_WORDS_RE = r'\%([^\%]+)\%'
INDEXED_WORDS_TAG = 'span'
INDEXED_WORDS_CLASSNAME = 'indexed_word'

class IndexedWords(InlineProcessor):
    """ Return a `<span class="inline_footnote">` element containing ((This will be my footnote)) the matching text. """

    def handleMatch(self, m, data):
        el = etree.Element(INDEXED_WORDS_TAG)
        el.set('class', INDEXED_WORDS_CLASSNAME)
        el.set('data-book-index', self.unescape(m.group(1).strip())) # Use unescape to remove placeholders
        el.text = AtomicString(m.group(1).strip())
        return el, m.start(0), m.end(0)


class IndexedWordsExtension(Extension):
    """ Add definition lists to Markdown. """

    def extendMarkdown(self, md):
        """ Add an instance of FigcaptionProcessor to BlockParser. """
        md.inlinePatterns.register(IndexedWords(INDEXED_WORDS_RE, md), 'indexed_words', 175)


def makeExtension(**kwargs):
    return IndexedWordsExtension(**kwargs)
