import os

src_path = "c:/Users/Sameel Kazi/OneDrive/Desktop/khalifa perfume/khalifa-motion"
for root, dirs, files in os.walk(src_path):
    if 'node_modules' in root:
        continue
    for f in files:
        if f.endswith(('.css', '.jsx', '.html', '.js')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                lines = file.readlines()
                for i, line in enumerate(lines):
                    if 'background' in line or 'body' in line:
                        print(f"{f}:{i+1}: {line.strip()}")
