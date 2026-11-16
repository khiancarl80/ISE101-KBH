import type { Announcement } from '@/types/announcement';

interface ApiPost {
  id: number;
  title: string;
}

function isApiPost(value: unknown): value is ApiPost {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    typeof value.id === 'number' &&
    'title' in value &&
    typeof value.title === 'string'
  );
}

export function getUnreadAnnouncements(items: Announcement[]): Announcement[] {
  return items.filter(item => !item.read);
}

export async function loadDemoAnnouncements(): Promise<Announcement[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data: unknown = await response.json();
    if (!Array.isArray(data) || !data.every(isApiPost)) {
      throw new Error('The demo service returned invalid announcement data.');
    }

    return data.map(post => ({
      id: String(post.id),
      title: post.title,
      category: 'Notice',
      read: false,
    }));
  } catch (error) {
    console.error('Unable to load demo announcements:', error);
    throw error;
  }
}