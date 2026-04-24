import os

replacements = {
    "#00E5A0": "#0dcfcf",
    "#00C88C": "#00b8b8",
    "rgba(0, 229, 160": "rgba(13, 207, 207",
    "rgba(0,229,160": "rgba(13, 207, 207",
}

directory = "src/components"

for filename in os.listdir(directory):
    if filename.endswith(".tsx"):
        path = os.path.join(directory, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = content
        for old, new in replacements.items():
            new_content = new_content.replace(old, new)
        
        if new_content != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
