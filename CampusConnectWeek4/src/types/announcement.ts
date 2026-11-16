export type AnnouncementCategory = 'Academic' | 'Community' | 'Events' | 'Notice';

export interface Announcement {
  id: string;
  title: string;
  category: AnnouncementCategory;
  read: boolean;
}