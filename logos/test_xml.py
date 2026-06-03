import xml.etree.ElementTree as ET

def check_paths(filename):
    try:
        tree = ET.parse(filename)
        root = tree.getroot()
        namespace = {'svg': 'http://www.w3.org/2000/svg'}
        paths = root.findall('.//svg:path', namespace)
        lengths = [len(p.get('d', '')) for p in paths]
        print(f"{filename}: {len(paths)} paths, max length {max(lengths) if lengths else 0}")
    except Exception as e:
        print(e)

check_paths('_reference/logo-certo-e.svg')
check_paths('_reference/logo-certo-e-melhor.svg')
