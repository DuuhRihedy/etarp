import re
s = open('_reference/logo-certo-e-melhor.svg', 'r').read()
match = re.search(r'<path[^>]*d=[\"\']([^\"\']+)[\"\']', s)
if match:
    print(match.group(1)[:200])
