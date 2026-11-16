import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '@/types/announcement';

import AnnouncementCard from './AnnouncementCard';

const initialAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment Reminder', category: 'Academic', read: true },
  { id: 'a2', title: 'Sports Festival Announcement', category: 'Events', read: false },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);

  const unreadAnnouncements = announcements.filter(item => !item.read);

  const handleToggleRead = (id: string) => {
    setAnnouncements(currentAnnouncements =>
      currentAnnouncements.map(item =>
        item.id === id ? { ...item, read: !item.read } : item,
      ),
    );
  };

  return (
    <View style={styles.panel}>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>Total Announcements: {announcements.length}</Text>
        <Text style={styles.summaryText}>Unread Announcements: {unreadAnnouncements.length}</Text>
        {unreadAnnouncements.length > 0 && (
          <View style={styles.listBox}>
            {unreadAnnouncements.map(item => (
              <Text key={item.id} style={styles.listItem}>{'•'} {item.title}</Text>
            ))}
          </View>
        )}
      </View>

      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.subheading}>Unread Announcements: {unreadAnnouncements.length}</Text>

      {announcements.map(item => (
        <AnnouncementCard
          key={item.id}
          title={item.title}
          category={item.category}
          read={item.read}
          onMarkRead={() => handleToggleRead(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    width: '100%',
    maxWidth: 760,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  summaryBox: {
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    marginTop: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  summaryText: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 6,
  },
  listBox: {
    marginTop: 8,
  },
  listItem: {
    color: '#111827',
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 2,
  },
  heading: {
    color: '#0F172A',
    fontSize: 42,
    fontWeight: '800',
    marginTop: 26,
    marginBottom: 10,
  },
  subheading: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
});
