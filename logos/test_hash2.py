import re

def extract(filename):
    content = open(filename, 'r', encoding='utf-8').read()
    match = re.search(r'<svg[^>]*>(.*)</svg>', content, re.DOTALL | re.IGNORECASE)
    return match.group(1).strip() if match else ""

body1 = extract('_reference/logo-certo-e.svg')
body2 = extract('_reference/logo-certo-e-melhor.svg')
out = open('../public/logos/etarp-etiquetas/horizontal.svg', 'r', encoding='utf-8').read()

if body2 in out:
    print("horizontal.svg CONTAINS logo-certo-e-melhor.svg")
elif body1 in out:
    print("horizontal.svg CONTAINS logo-certo-e.svg")
else:
    print("horizontal.svg contains NEITHER! Maybe split_miolo modified it?")

