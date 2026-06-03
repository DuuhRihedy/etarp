import xml.etree.ElementTree as ET
import re

def parse_svg_bounds(filename):
    tree = ET.parse(filename)
    root = tree.getroot()
    namespace = {'svg': 'http://www.w3.org/2000/svg'}
    
    xs, ys = [], []
    for path in root.findall('.//svg:path', namespace):
        d = path.get('d', '')
        # extract all coordinates
        coords = re.findall(r'(-?\d+(?:\.\d+)?)', d)
        coords = [float(c) for c in coords]
        if len(coords) >= 2:
            xs.extend(coords[0::2])
            ys.extend(coords[1::2])
            
    if xs and ys:
        print(f"Bounds for {filename}: X({min(xs):.1f} to {max(xs):.1f}), Y({min(ys):.1f} to {max(ys):.1f})")

parse_svg_bounds('_reference/logo-certo.svg')
