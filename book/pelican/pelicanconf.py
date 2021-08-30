#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from os.path import abspath
import sys, os
sys.path.append(os.curdir)
from attach_images import PelicanAttachImage
from indexed_words import IndexedWordsExtension

from markdown.extensions.toc import slugify
from random import randint

AUTHOR = '.'
SITENAME = 'Aesthetic Programming'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

#PAGE_PATHS = ['../source']
STATIC_PATHS = ['content']
TYPOGRIFY = True
THEME = 'theme/aesthetic-programming'

PAGE_ORDER_BY = 'Order'

PLUGIN_PATHS = ['plugins']
PLUGINS = ['page_order', 'elevate_img_class_to_figure', 'include-sketches' ]

SKETCH_BASEPATH = 'theme/aesthetic-programming-web/static'
SKETCH_BASEPATH_PUBLIC = '/theme/'
SKETCH_P5_PATH = '/theme/p5_SampleCode/libraries/p5.js'

DISPLAY_PAGES_ON_MENU = False

def salted_slug (value, separator):
    slug = slugify(value, separator)
    salt = ''.join([str(randint(0,9)) for x in range(5)])
    return slug + separator + salt

MARKDOWN = {
    'extension_configs': {
        # 'markdown.extensions.codehilite': {'css_class': 'highlight', 'linenums': "True"},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
        'markdown.extensions.toc': {
            'slugify': salted_slug
        },
        'mdx_figcaption': {},
        'attach_images': {},
        #'indexed_words': {},
    },
    'output_format': 'html5',
}

DEFAULT_METADATA = {
    'show_in_menu': True
}

