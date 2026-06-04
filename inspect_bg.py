import numpy as np
from PIL import Image

img = Image.open("c:/Users/Sameel Kazi/OneDrive/Desktop/khalifa perfume/khalifa-motion/public/bg.png")
data = np.array(img)
print("bg.png shape:", data.shape)
# Sample some pixels
print("bg.png corner sample:\n", data[0:10, 0:10])
print("bg.png center sample:\n", data[500:510, 500:510])
