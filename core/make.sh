#!/bin/bash

cd "$(dirname "$0")/.." || exit

python3 << 'EOF'
import os
import json

def scan_directory(base_path):
    items = []
    for item in sorted(os.listdir(base_path)):
        if item.startswith('.') or item == 'core' or item == 'node_modules':
            continue
        full_path = os.path.join(base_path, item)
        
        if os.path.isdir(full_path):
            children = scan_directory(full_path)
            items.append({
                "type": "folder",
                "name": item,
                "children": children
            })
        elif os.path.isfile(full_path) and item.endswith('.md'):
            rel_path = os.path.relpath(full_path)
            items.append({
                "type": "file",
                "name": item,
                "path": rel_path.replace('\\', '/')
            })
    return items

tree = scan_directory(".")
result = {"tree": [{"type": "folder", "name": "root", "children": tree}]}

with open("core/base.json", "w") as f:
    json.dump(result, f, indent=2)

print("Generated core/base.json")
EOF