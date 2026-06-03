import re
import hashlib

def hash_svg(filename):
    try:
        content = open(filename, 'r', encoding='utf-8').read()
        match = re.search(r'<svg[^>]*>(.*)</svg>', content, re.DOTALL | re.IGNORECASE)
        if match:
            return hashlib.md5(match.group(1).encode('utf-8')).hexdigest()
    except Exception as e:
        return str(e)
    return None

print("logo-certo-e.svg:", hash_svg('_reference/logo-certo-e.svg'))
print("logo-certo-e-melhor.svg:", hash_svg('_reference/logo-certo-e-melhor.svg'))
print("horizontal.svg:", hash_svg('../public/logos/etarp-etiquetas/horizontal.svg'))
