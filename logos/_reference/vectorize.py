"""
Vectorize the ETARP logo using vtracer raw pixel API.
"""
from PIL import Image
import vtracer

input_jpeg = r"c:\Users\Barbara\Documents\GitHub\etarp\logos\logo-original.jpeg"
output_svg = r"c:\Users\Barbara\Documents\GitHub\etarp\logos\grupo-etarp-icon-traced.svg"

print("Loading image...")
img = Image.open(input_jpeg).convert("RGBA")
w, h = img.size
print(f"Image: {w}x{h}")

# Get raw pixel bytes
raw_bytes = img.tobytes()
print(f"Raw bytes: {len(raw_bytes)}")

print("Vectorizing with raw API...")
svg_str = vtracer.convert_raw_image_to_svg(
    raw_bytes,
    img_width=w,
    img_height=h,
    colormode="color",
    hierarchical="stacked",
    mode="spline",
    filter_speckle=4,
    color_precision=6,
    layer_difference=16,
    corner_threshold=60,
    length_threshold=4.0,
    max_iterations=10,
    splice_threshold=45,
    path_precision=3,
)

with open(output_svg, "w", encoding="utf-8") as f:
    f.write(svg_str)

print(f"SUCCESS! SVG saved: {output_svg} ({len(svg_str)} chars)")
