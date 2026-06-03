import os
import re

def migrate_page():
    old_path = 'src/pages/FoxoneSoftware.jsx'
    new_path = 'src/pages/EtarpLocacoes.jsx'
    
    with open(old_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace the component name
    content = content.replace('FoxoneSoftware', 'EtarpLocacoes')
    content = content.replace('foxone-software', 'etarp-locacoes')
    content = content.replace('Foxone Software', 'Etarp Locações')
    
    with open(new_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    os.remove(old_path)

def migrate_routes():
    path = 'src/routes.jsx'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = content.replace('FoxoneSoftware', 'EtarpLocacoes')
    content = content.replace('foxone-software', 'etarp-locacoes')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    migrate_page()
    migrate_routes()
    print("Page and routes migrated.")
