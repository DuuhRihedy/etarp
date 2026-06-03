import re
def update_build_logos():
    s = open('build_logos.py', 'r', encoding='utf-8').read()
    s = s.replace(
        "return extract_svg_contents('_reference/logo-certo-e-melhor.svg', scale_factor=1.6, dx=11, dy=8, is_dark_mode=is_dark_mode, split_miolo=True)",
        "return extract_svg_contents('_reference/logo-certo-e-melhor.svg', scale_factor=0.72, dx=62, dy=-3, is_dark_mode=is_dark_mode, split_miolo=True)"
    )
    open('build_logos.py', 'w', encoding='utf-8').write(s)
update_build_logos()
