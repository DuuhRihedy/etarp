import re

content = open('_reference/logo-certo.svg', 'r').read()
fills = set(re.findall(r'fill[:=][\"\']?([^\"\'\;]+)', content))
print('Fills in logo-certo.svg:', fills)
