import numpy as np
from PIL import Image
import os

ref_path = "c:/Users/Sameel Kazi/OneDrive/Desktop/khalifa perfume/reference photos"
files = ["unnamed (1).webp", "unnamed (2).webp", "unnamed (3).webp", "unnamed (4).webp", "unnamed (5).webp", "unnamed (6).webp", "unnamed.webp"]

for f in files:
    p = os.path.join(ref_path, f)
    if os.path.exists(p):
        img = Image.open(p).convert("RGB")
        data = np.array(img)
        # Check if the image contains large regions of repeating checkerboard (e.g. 255 and 204 or 153/102 alternating)
        # Let's count how many pixels are exactly (204, 204, 204) or similar grey colors
        # Checkerboards usually use (204, 204, 204) or (238, 238, 238) or (153, 153, 153)
        gray_pixels_1 = np.sum((data[:, :, 0] == 204) & (data[:, :, 1] == 204) & (data[:, :, 2] == 204))
        gray_pixels_2 = np.sum((data[:, :, 0] == 153) & (data[:, :, 1] == 153) & (data[:, :, 2] == 153))
        gray_pixels_3 = np.sum((data[:, :, 0] == 255) & (data[:, :, 1] == 255) & (data[:, :, 2] == 255))
        gray_pixels_4 = np.sum((data[:, :, 0] == 0) & (data[:, :, 1] == 0) & (data[:, :, 2] == 0))
        
        total = data.shape[0] * data.shape[1]
        print(f"File: {f}")
        print(f"  Total pixels: {total}")
        print(f"  Pure white (255,255,255): {gray_pixels_3} ({gray_pixels_3/total*100:.1f}%)")
        print(f"  Pure black (0,0,0): {gray_pixels_4} ({gray_pixels_4/total*100:.1f}%)")
        print(f"  Grey 204 (204,204,204): {gray_pixels_1} ({gray_pixels_1/total*100:.1f}%)")
        print(f"  Grey 153 (153,153,153): {gray_pixels_2} ({gray_pixels_2/total*100:.1f}%)")
