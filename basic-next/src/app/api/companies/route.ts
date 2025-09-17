import { NextRequest, NextResponse } from "next/server";
import https from 'https';

// Create an agent that ignores SSL certificate errors (development only)
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const res = await fetch(
      `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${body.search}`,
      {
        agent: httpsAgent, // Add this for development
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; NextJS-App)',
        }
      }
    );
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    
    return NextResponse.json({
      enheter: data?._embedded?.enheter ? data?._embedded?.enheter : [],
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch companies', enheter: [] },
      { status: 500 }
    );
  }
}