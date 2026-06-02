import xml.etree.ElementTree as ET

def extract_g_and_paths(filename):
    tree = ET.parse(filename)
    root = tree.getroot()
    namespaces = {'svg': 'http://www.w3.org/2000/svg'}
    g = root.find('.//svg:g', namespaces)
    
    out = ''
    if g is not None:
        # Get the transform of the main g
        transform = g.attrib.get('transform', '')
        out += f'<g transform="{transform}">\n'
        for p in g.findall('.//svg:path', namespaces):
            d = p.attrib.get('d', '')
            fill = p.attrib.get('fill', p.attrib.get('style', ''))
            out += f'  <path d="{d}" style="{fill}"/>\n'
        out += '</g>'
    return out

g_certo = extract_g_and_paths('_reference/logo-certo.svg')
g_melhor = extract_g_and_paths('_reference/logo-certo-e-melhor.svg')

html = '<html><body style="background: #ccc;">\n'

# Generate a grid to find the right viewBox for logo-certo
html += '<h1>logo-certo.svg (Grupo)</h1>\n'
for x in range(30, 100, 20):
    for y in range(120, 180, 20):
        # We try different viewBoxes
        vb = f'{x} {y} 40 40'
        html += f'<div style="display:inline-block; border:1px solid red; margin:5px; width:100px; height:100px;" title="{vb}">'
        html += f'<svg viewBox="{vb}" width="100%" height="100%">{g_certo}</svg>'
        html += f'<br>{vb}</div>\n'
        
html += '<br><hr><br>'

# Generate a grid to find the right viewBox for logo-certo-e-melhor
html += '<h1>logo-certo-e-melhor.svg (E)</h1>\n'
for x in range(60, 120, 20):
    for y in range(140, 200, 20):
        vb = f'{x} {y} 40 40'
        html += f'<div style="display:inline-block; border:1px solid red; margin:5px; width:100px; height:100px;" title="{vb}">'
        html += f'<svg viewBox="{vb}" width="100%" height="100%">{g_melhor}</svg>'
        html += f'<br>{vb}</div>\n'

html += '</body></html>'

with open('test_viewbox.html', 'w', encoding='utf-8') as f:
    f.write(html)
