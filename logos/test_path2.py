import xml.etree.ElementTree as ET
import re

def get_real_bounds(filename):
    try:
        tree = ET.parse(filename)
        root = tree.getroot()
        namespace = {'svg': 'http://www.w3.org/2000/svg'}
        
        xs, ys = [], []
        for path in root.findall('.//svg:path', namespace):
            d = path.get('d', '')
            # find all absolute M, L, C coordinates
            # M x,y
            # L x,y
            # C x1,y1 x2,y2 x,y
            # this is hard. But let's just find "m x,y" or "l x,y"
            # actually let's just dump the first few paths
            print(d[:100])
            break
            
    except Exception as e:
        print(e)

get_real_bounds('_reference/logo-certo-e-melhor.svg')
