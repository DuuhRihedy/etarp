import re

content = open('_reference/logo-certo.svg', 'r').read()
paths = re.findall(r'<path[^>]*>', content)

for i, p in enumerate(paths):
    fill_match = re.search(r'fill[:=][\"\']?([^\"\'\;]+)', p)
    fill = fill_match.group(1) if fill_match else 'None'
    if fill == '#121552':
        d_match = re.search(r'd=[\"\']([^\"\']+)', p)
        d = d_match.group(1)
        subpaths = re.split(r'(?<=[Zz])\s+(?=[mM])', d)
        
        for j, sp in enumerate(subpaths):
            # Find all coordinates
            coords = re.findall(r'(-?\d+\.\d+)', sp)
            if coords:
                coords = [float(c) for c in coords]
                # very rough approx
                xs = coords[0::2]
                ys = coords[1::2]
                if xs and ys:
                    avg_x = sum(xs) / len(xs)
                    avg_y = sum(ys) / len(ys)
                    print(f"Subpath {j}: len {len(sp)}, avg_x {avg_x:.1f}, avg_y {avg_y:.1f}")

