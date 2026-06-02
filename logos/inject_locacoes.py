import re
import os

svg_content = open('_reference/Etarp-locacao.svg', 'r', encoding='utf-8').read()

group_match = re.search(r'<g[^>]*id="layer1"[^>]*>(.*?)</g>', svg_content, re.DOTALL)
inner_xml = group_match.group(1)

def color_replacer(match):
    color = match.group(1).lower()
    if color in ['#e7935b', '#e75e0e', '#a04e28']:
        return 'fill="{orange}"'
    else:
        return 'fill="{main_color}"'

inner_xml = re.sub(r'style="fill:(#[0-9a-fA-F]{6})"', color_replacer, inner_xml)
inner_xml = re.sub(r'id="[^"]+"', '', inner_xml)

# Format for f-string
inner_xml = inner_xml.replace('{', '{{').replace('}', '}}')
inner_xml = inner_xml.replace('{{orange}}', '{orange}').replace('{{main_color}}', '{main_color}')

# Clean up spaces
inner_xml = re.sub(r'\s+', ' ', inner_xml)
inner_xml = inner_xml.replace('/> <path', '/>\n      <path')

# Generate build_logos.py script with this
build_logos = open('build_logos.py', 'r', encoding='utf-8').read()

new_func = f'''def get_locacoes_icon(is_dark_mode=False):
    main_color = '#FFFFFF' if is_dark_mode else COLORS['locacoes_navy']
    orange = COLORS['locacoes_orange']
    bg_color = COLORS['automacao_navy'] if is_dark_mode else '#FFFFFF'
    
    return f"""
    <g transform="translate(10, 5) scale(2.2) translate(-29.4, -49.7)">
      {inner_xml}
    </g>
    """
'''

build_logos = re.sub(r'def get_locacoes_icon\(is_dark_mode=False\):.*?(?=\ndef |$)', new_func, build_logos, flags=re.DOTALL)
open('build_logos.py', 'w', encoding='utf-8').write(build_logos)
print("Updated build_logos.py")
