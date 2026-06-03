import re
s = open('_reference/logo-certo-e.svg', 'r', encoding='utf-8').read()
paths = re.findall(r'<path[^>]*d=[\"\']([^\"\']+)[\"\']', s)
print([len(x) for x in paths])
