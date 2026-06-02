import re

content = open('_reference/logo-certo.svg', 'r').read()
paths = re.findall(r'<path[^>]*>', content)
for i, p in enumerate(paths):
    fill_match = re.search(r'fill[:=][\"\']?([^\"\'\;]+)', p)
    fill = fill_match.group(1) if fill_match else 'None'
    d_match = re.search(r'd=[\"\']([^\"\']+)', p)
    d_len = len(d_match.group(1)) if d_match else 0
    print(f'Path {i}: fill={fill}, d_length={d_len}')
