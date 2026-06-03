import re

def update_branding_css():
    s = open('src/pages/Branding.css', 'r', encoding='utf-8').read()
    
    new_css = """
.brand-presentation-board {
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  padding: 40px;
  margin-bottom: 60px;
}

.presentation-section {
  margin-bottom: 40px;
}

.presentation-badge {
  display: inline-block;
  background-color: var(--primary);
  color: var(--white);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
}

.main-logo-display {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  background-color: #FAFAFA;
  border-radius: 8px;
  padding: 40px;
}

.presentation-divider {
  border: none;
  border-top: 1px solid #E9EAEC;
  margin: 40px 0;
}

.board-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

@media (max-width: 900px) {
  .board-grid {
    grid-template-columns: 1fr;
  }
}

.board-panel {
  display: flex;
  flex-direction: column;
}

.colors-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.color-swatch-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
}

.color-swatch {
  width: 90px;
  height: 90px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  margin-bottom: 12px;
}

.color-swatch.light {
  border: 1px solid #E9EAEC;
}

.color-name {
  font-size: 0.75rem;
  font-weight: 700;
  color: #1A1A1A;
  text-align: center;
  text-transform: uppercase;
}

.color-hex {
  font-size: 0.7rem;
  color: #666;
  font-family: monospace;
}

.typography-display {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.typo-big-letters {
  font-family: 'Montserrat', sans-serif;
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  color: var(--primary);
  letter-spacing: -0.05em;
}

.typo-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.typo-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.typo-alphabet {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  color: #333;
  line-height: 1.5;
  word-break: break-all;
}

.typo-weights {
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  color: #1A1A1A;
  line-height: 1.6;
}

.typo-weights strong {
  font-weight: 700;
}

.variations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.variation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.variation-image-container {
  width: 100%;
  height: 160px;
  background-color: #FAFAFA;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.variation-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #666;
  letter-spacing: 0.05em;
}
"""

    # We will just append or replace existing styling.
    # It's safer to append and rely on CSS specificity, but let's replace the whole presentation styling block.
    # Actually, we can just append it if not already there, but we have some existing rules.
    # Let's replace the content from .brand-presentation-board onwards.
    s = re.sub(r'\.brand-presentation-board\s*\{.*', new_css, s, flags=re.DOTALL)
    open('src/pages/Branding.css', 'w', encoding='utf-8').write(s)

update_branding_css()
