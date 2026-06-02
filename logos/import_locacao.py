import re

content = open('_reference/Etarp-locacao.svg', 'r', encoding='utf-8').read()

# Extract the group layer1
group_match = re.search(r'<g[^>]*id="layer1"[^>]*>(.*?)</g>', content, re.DOTALL)
if not group_match:
    print("Could not find layer1")
    exit(1)

inner_xml = group_match.group(1)

# Map the colors
def color_replacer(match):
    color = match.group(1).lower()
    # Oranges/Browns
    if color in ['#e7935b', '#e75e0e', '#a04e28']:
        return 'fill="{orange}"'
    # Navy/Blues/Grays
    else:
        return 'fill="{main_color}"'

# Replace style="fill:#..." with fill="{color}"
inner_xml = re.sub(r'style="fill:(#[0-9a-fA-F]{6})"', color_replacer, inner_xml)

# Remove id attributes
inner_xml = re.sub(r'id="[^"]+"', '', inner_xml)

# Format for python f-string
inner_xml = inner_xml.replace('{', '{{').replace('}', '}}')
inner_xml = inner_xml.replace('{{orange}}', '{orange}').replace('{{main_color}}', '{main_color}')

print("Extracted Paths:")
print(inner_xml)
