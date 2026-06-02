import re

content = open('_reference/logo-certo.svg', 'r').read()
paths = re.findall(r'<path[^>]*>', content)

for i, p in enumerate(paths):
    fill_match = re.search(r'fill[:=][\"\']?([^\"\'\;]+)', p)
    fill = fill_match.group(1) if fill_match else 'None'
    if fill == '#121552':
        d_match = re.search(r'd=[\"\']([^\"\']+)', p)
        d = d_match.group(1)
        
        # Split by Z or z followed by m or M
        # A subpath ends with Z or z
        # Usually it's 'Z m' or 'z M'
        # Let's split by 'z ' or 'Z ' where next char is 'm' or 'M'
        subpaths = re.split(r'(?<=[Zz])\s+(?=[mM])', d)
        
        print(f"Path has {len(subpaths)} subpaths.")
        
        for j, sp in enumerate(subpaths):
            print(f"Subpath {j} length: {len(sp)}")
            
        # We can just write out the split paths to a test file
        out = ''
        colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow', 'cyan', 'magenta']
        for j, sp in enumerate(subpaths):
            c = colors[j % len(colors)]
            out += f'<path fill="{c}" d="{sp}"/>\n'
            
        open('test_split.svg', 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">{out}</svg>')
