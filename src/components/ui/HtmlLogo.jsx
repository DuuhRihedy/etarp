import React from 'react';

export default function HtmlLogo({ brand, scale = 1, dark = false, iconOnly = false, square = false, withBadge = false }) {
  if (!brand) return null;
  const isGrupo = brand.id === 'grupo';
  const color1 = dark ? '#FFFFFF' : brand.color1;
  const color2 = dark ? '#FFFFFF' : (brand.color2 || brand.color1);

  const badgeStyle = withBadge ? {
    backgroundColor: '#FFFFFF',
    padding: '24px 48px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    display: 'inline-flex'
  } : {};

  if (iconOnly) {
    return (
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'center', display: 'flex' }}>
        <div style={badgeStyle}>
          <img 
            src={`${import.meta.env.BASE_URL}logos/${brand.iconSrc ? '_reference' : brand.folder}/${brand.iconSrc || 'icon.svg'}`} 
            alt="Icon" 
            style={{ height: '85px', width: 'auto', display: 'block' }} 
          />
        </div>
      </div>
    );
  }

  if (square) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '12px',
        transform: `scale(${scale})`,
        transformOrigin: 'center'
      }}>
        <div style={{ ...badgeStyle, flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src={`${import.meta.env.BASE_URL}logos/${brand.iconSrc ? '_reference' : brand.folder}/${brand.iconSrc || 'icon.svg'}`} 
            alt="Icon" 
            style={{ height: '80px', width: 'auto', display: 'block' }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: '32px', color: color1, lineHeight: '0.9', letterSpacing: '0.02em', margin: 0 }}>
              {brand.logoTitle}
            </div>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.34em', color: color2, marginTop: '4px' }}>
              {brand.logoSubtitle}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '24px', 
      justifyContent: 'center', 
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      ...badgeStyle
    }}>
      <img 
        src={`${import.meta.env.BASE_URL}logos/${brand.iconSrc ? '_reference' : brand.folder}/${brand.iconSrc || 'icon.svg'}`} 
        alt="Icon" 
        style={{ height: '85px', width: 'auto', display: 'block' }} 
      />
      <div style={{ width: '2px', height: '70px', backgroundColor: color1 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
        {isGrupo ? (
          <>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '15px', letterSpacing: '0.34em', color: color2, marginBottom: '6px' }}>
              {brand.logoSubtitle}
            </div>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: '52px', color: color1, lineHeight: '0.9', letterSpacing: '0.02em', margin: 0 }}>
              {brand.logoTitle}
            </div>
          </>
        ) : (
          <>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: '52px', color: color1, lineHeight: '0.9', letterSpacing: '0.02em', margin: 0 }}>
              {brand.logoTitle}
            </div>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '15px', letterSpacing: '0.34em', color: color2, marginTop: '6px' }}>
              {brand.logoSubtitle}
            </div>
          </>
        )}
        {brand.logoSlogan && (
          <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.15em', color: color1, marginTop: '6px' }}>
            {brand.logoSlogan}
          </div>
        )}
      </div>
    </div>
  );
}
