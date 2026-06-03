import re

def calc_final_bounds(filename, scale_factor, dx, dy):
    s = open(filename, 'r', encoding='utf-8').read()
    # very rough estimation based on the two transforms we know
    # Net translation inside logo-certo-e-melhor is (-67.22 + 32.28, -104.83 + 176.02) = (-34.94, 71.19)
    # Plus whatever path coordinates there are.
    # Let's extract all numbers from the paths in logo-certo-e.svg
    s2 = open('_reference/logo-certo-e.svg', 'r').read()
    paths = re.findall(r'<path[^>]*d=[\"\']([^\"\']+)[\"\']', s2)
    # Actually, we need to properly parse it. Let's just find the bounds by applying the transforms.
    pass

