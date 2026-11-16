import { createContext, useContext, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type { Announcement } from '@/types/announcement';

const initialAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment Reminder', category: 'Academic', read: false },
  { id: 'a2', title: 'Sports Festival Announcement', category: 'Events', read: false },
  { id: 'a3', title: 'Campus Clean-up Drive', category: 'Community', read: true },
];

interface AnnouncementContextValue {
  announcements: Announcement[];
  toggleRead: (id: string) => void;
}

const AnnouncementContext = createContext<AnnouncementContextValue | undefined>(undefined);

export function AnnouncementProvider({ children }: PropsWithChildren) {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  const toggleRead = (id: string) => {
    setAnnouncements(current =>
      current.map(announcement =>
        announcement.id === id ? { ...announcement, read: !announcement.read } : announcement
      )
    );
  };

  return (
    <AnnouncementContext.Provider value={{ announcements, toggleRead }}>
      {children}
    </AnnouncementContext.Provider>
  );
}

export function useAnnouncements() {
  const context = useContext(AnnouncementContext);
  if (!context) {
    throw new Error('useAnnouncements must be used within an AnnouncementProvider.');
  }

  return context;
}
