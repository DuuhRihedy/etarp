import re

build_logos = open('build_logos.py', 'r', encoding='utf-8').read()

wrapper = """
SVG_WRAPPER = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}">
  <style>
    {style}
  </style>
  <defs>
    {defs}
  </defs>
  {content}
</svg>'''

def create_svg(filename, viewbox, content, style=""):
"""

build_logos = build_logos.replace('def create_svg(filename, viewbox, content, style=""):', wrapper)

open('build_logos.py', 'w', encoding='utf-8').write(build_logos)
