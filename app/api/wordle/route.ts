import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

interface WordleEntry {
  date: string;
  word: string;
  sponsored: boolean;
  sponsor: string;
  variant: string;
}

function formatTimeRemaining(milliseconds: number): string {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  
  return `${hours}h ${minutes}m ${seconds}s`;
}

function parseCSV(): WordleEntry[] {
  const csvPath = join(process.cwd(), 'wordle.csv');
  const csvContent = readFileSync(csvPath, 'utf-8');
  const lines = csvContent.trim().split('\n');
  
  // Skip header row
  const dataLines = lines.slice(1);
  
  return dataLines.map(line => {
    const [dateStr, word, sponsoredStr, sponsor, variant] = line.split(',');
    
    // Parse date to "2025-10-10"
    const dateParts = dateStr.trim().match(/(\d+)\s+(\w+)\s+(\d+)/);
    if (!dateParts) {
      throw new Error(`Invalid date format: ${dateStr}`);
    }
    
    const day = dateParts[1].padStart(2, '0');
    const monthName = dateParts[2];
    const year = dateParts[3];
    
    const monthMap: { [key: string]: string } = {
      'January': '01', 'February': '02', 'March': '03', 'April': '04',
      'May': '05', 'June': '06', 'July': '07', 'August': '08',
      'September': '09', 'October': '10', 'November': '11', 'December': '12'
    };
    
    const month = monthMap[monthName];
    const isoDate = `${year}-${month}-${day}`;
    
    return {
      date: isoDate,
      word: word.trim(),
      sponsored: sponsoredStr.trim().toUpperCase() === 'TRUE',
      sponsor: sponsor?.trim() || '',
      variant: variant?.trim() || ''
    };
  });
}

export async function GET() {
  try {
    const wordleData = parseCSV();
    
    // Get current date in YYYY-MM-DD format
    const now = new Date();
    const dateString = now.toISOString().split('T')[0];
    
    // Find entry matching today's date
    let selectedEntry = wordleData.find(entry => entry.date === dateString);
    
    // If no match, cycle through available entries based on day
    if (!selectedEntry) {
      const daysSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
      const index = daysSinceEpoch % wordleData.length;
      selectedEntry = wordleData[index];
    }
    
    // Calculate time until next puzzle (midnight)
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilNext = tomorrow.getTime() - now.getTime();
    
    const response = {
      date: dateString,
      word: selectedEntry.word,
      sponsored: selectedEntry.sponsored,
      sponsor: selectedEntry.sponsor,
      variant: selectedEntry.variant,
      nextPuzzleIn: {
        milliseconds: timeUntilNext,
        seconds: Math.floor(timeUntilNext / 1000),
        formatted: formatTimeRemaining(timeUntilNext)
      }
    };
    
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load wordle data' },
      { status: 500 }
    );
  }
}
