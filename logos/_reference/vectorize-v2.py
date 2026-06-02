"""
Vectorize the ETARP logo icon using vtracer with optimized parameters.
"""
import vtracer

input_png = r"c:\Users\dev\Documents\My_Projects\etarp\logos\logo-original.png"
output_svg = r"c:\Users\dev\Documents\My_Projects\etarp\logos\etarp-logo-vtracer.svg"

print("Vectorizing...")
vtracer.convert_image_to_svg_py(
    input_png,
    output_svg,
    colormode="color",
    hierarchical="stacked",
    mode="spline",
    filter_speckle=4,
    color_precision=8,
    layer_difference=16,
    corner_threshold=60,
    length_threshold=3.0,
    max_iterations=15,
    splice_threshold=45,
    path_precision=5,
)
print(f"Done! Saved: {output_svg}")

# Also generate a version with different settings for comparison
output_svg2 = r"c:\Users\dev\Documents\My_Projects\etarp\logos\etarp-logo-vtracer-smooth.svg"
print("Generating smoother version...")
vtracer.convert_image_to_svg_py(
    input_png,
    output_svg2,
    colormode="color",
    hierarchical="stacked",
    mode="spline",
    filter_speckle=2,
    color_precision=10,
    layer_difference=8,
    corner_threshold=90,
    length_threshold=2.0,
    max_iterations=20,
    splice_threshold=60,
    path_precision=8,
)
print(f"Done! Saved: {output_svg2}")
