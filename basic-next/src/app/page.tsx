export default function HomePage() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem',
        color: 'var(--foreground)'
      }}>
        Welcome to Next.js! 🚀
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        marginBottom: '2rem',
        color: 'var(--foreground)',
        opacity: 0.8
      }}>
        This is your homepage
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a 
          href="/companies" 
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem'
          }}
        >
          View Companies
        </a>
        
        <a 
          href="/api/companies" 
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#28a745',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem'
          }}
        >
          API Endpoint
        </a>
      </div>
    </div>
  );
}