import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Berktuğ Berke - Web & Mobile Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #e91e63 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Berktuğ Berke
          </h1>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: '600',
              margin: '0 0 30px 0',
              opacity: 0.9,
            }}
          >
            Web & Mobile Developer
          </h2>
          <p
            style={{
              fontSize: '24px',
              margin: '0',
              opacity: 0.8,
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Web Development • React Native • Mobile Apps • React • Next.js • TypeScript
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
