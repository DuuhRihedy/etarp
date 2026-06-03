import os
import shutil

# This script replaces horizontal.svg for Etiquetas with the locked version
locked_svg = '_reference/logo-certo-e-melhor.svg'
out_dir = '../public/logos/etarp-etiquetas'

with open(locked_svg, 'r', encoding='utf-8') as f:
    content = f.read()

# Save light mode
with open(os.path.join(out_dir, 'horizontal.svg'), 'w', encoding='utf-8') as f:
    f.write(content)

# Save dark mode
# Replace dark blue with white
dark_mode_content = content.replace('#040e22', '#FFFFFF').replace('#050d1d', '#FFFFFF')
# Wait, let me just replace all dark colors
dark_colors = ['#0d1324', '#0d2b4e', '#1a1a1a', '#000000', '#231f20', '#121552', '#0c1223', '#111524', '#040e22', '#050d1d']
for color in dark_colors:
    dark_mode_content = dark_mode_content.replace(color, '#FFFFFF')

with open(os.path.join(out_dir, 'horizontal-dark.svg'), 'w', encoding='utf-8') as f:
    f.write(dark_mode_content)

print("Etiquetas horizontal logos updated with locked version!")
