import re
import xml.etree.ElementTree as ET

def get_bounds(filename):
    try:
        s = open(filename, 'r', encoding='utf-8').read()
        paths = re.findall(r'<path[^>]*d=[\"\']([^\"\']+)[\"\']', s)
        xs = [float(x) for p in paths for x in re.findall(r'(-?\d+(?:\.\d+)?)', p)]
        if xs:
            return min(xs), max(xs)
    except Exception as e:
        print(e)
    return None, None

print('logo-certo:', get_bounds('_reference/logo-certo.svg'))
print('logo-certo-e:', get_bounds('_reference/logo-certo-e.svg'))
print('logo-certo-e-melhor:', get_bounds('_reference/logo-certo-e-melhor.svg'))
