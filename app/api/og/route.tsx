import { ImageResponse } from 'next/og';
 
function Link3Card() {  
return(
    <div
      style={{
        background: 'linear-gradient(to bottom, #ffffff, #f5f3ff)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter',
        padding: 80,
        position: 'relative',
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 25px 25px, #4f4f4f15 2%, transparent 0%)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 70%, transparent 110%)',
        }}
      />

      {/* Logo and Title */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            background: 'linear-gradient(to right, #2563eb, #7c3aed)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 16,
          }}
        >
          Trustartup
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#6b7280',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Discover the Future of Startups
        </div>
      </div>

      {/* Stats *
      <div
        style={{
          display: 'flex',
          gap: 48,
          marginTop: 48,
          padding: '24px 48px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        {[
          { label: 'Companies', value: '2,500+' },
          { label: 'Investors', value: '500+' },
          { label: 'Total Investments', value: '$25B+' },
        ].map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              borderRight: i < 2 ? '1px solid #e5e7eb' : 'none',
              paddingRight: i < 2 ? 48 : 0,
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: 18, color: '#6b7280' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>*/}
    </div>
  )
}


export async function GET() {

  try {
  
  return new ImageResponse(
    (
      Link3Card()
    ),
    {
      width: 1200,
      height: 630,
    },
  );
    
  } catch (error) {
    console.error(error);
  }
    
}
