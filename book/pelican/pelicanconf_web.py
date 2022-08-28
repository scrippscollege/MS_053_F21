#!/usr/bin/env python
# -*- coding: utf-8 -*- #

# This file is only used if you use `make devserver-web` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

SITENAME = 'Aesthetic Programming'

THEME = 'theme/aesthetic-programming-web'
DISPLAY_PAGES_ON_MENU = True
MENUITEMS = [
  ('Download sample code', 'https://gitlab.com/aesthetic-programming/book/-/archive/master/book-master.zip'),
  ('Git repository', 'https://gitlab.com/aesthetic-programming/book'),
  ('Buy a hardcopy of the book', 'http://www.openhumanitiespress.org/books/titles/aesthetic-programming/'),
  ('Download as pdf', 'http://openhumanitiespress.org/books/download/Soon-Cox_2020_Aesthetic-Programming.pdf')
]