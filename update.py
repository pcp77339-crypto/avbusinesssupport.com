import os

sample_dir = r'c:\Users\ved prakash dubey\Downloads\portfolio 2\MAIN WEB\all web sections\manue\SAMPLE'
front_back_dir = os.path.join(sample_dir, 'front and back')
html_file = r'c:\Users\ved prakash dubey\Downloads\portfolio 2\MAIN WEB\all web sections\manue\new\manue\code.html'

menu_files = [f for f in os.listdir(sample_dir) if os.path.isfile(os.path.join(sample_dir, f))]
cover_files = [f for f in os.listdir(front_back_dir) if os.path.isfile(os.path.join(front_back_dir, f))]

html_content = []
idx = 1
for f in cover_files:
    html_content.append(f'    <img src="../../SAMPLE/front and back/{f}" class="gallery-img gallery-item w-full h-auto object-contain rounded-xl cursor-pointer hover:scale-[1.02] transition-transform shadow-lg border border-white/10" data-category="cover" style="view-transition-name: img-{idx};">')
    idx += 1
for f in menu_files:
    html_content.append(f'    <img src="../../SAMPLE/{f}" class="gallery-img gallery-item w-full h-auto object-contain rounded-xl cursor-pointer hover:scale-[1.02] transition-transform shadow-lg border border-white/10" data-category="menu" style="view-transition-name: img-{idx};">')
    idx += 1

with open(html_file, 'r', encoding='utf-8') as file:
    lines = file.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if 'id="gallery-grid"' in line:
        start_idx = i + 1
    if start_idx != -1 and i > start_idx and '</div>' in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    new_lines = lines[:start_idx] + [line + '\n' for line in html_content] + lines[end_idx:]
    with open(html_file, 'w', encoding='utf-8') as file:
        file.writelines(new_lines)
    print('Updated html successfully')
else:
    print('Could not find gallery-grid section')
