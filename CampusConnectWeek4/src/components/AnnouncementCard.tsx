import { StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '@/types/announcement';

import { ActionButton } from './ActionButton';

interface AnnouncementCardProps {
  announcement: Announcement;
  onToggleRead: (id: string) => void;
}

export function AnnouncementCard({ announcement, onToggleRead }: AnnouncementCardProps) {
  const actionLabel = `Mark as ${announcement.read ? 'Unread' : 'Read'}`;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{announcement.title}</Text>
      <Text style={styles.mutedText}>Category: {announcement.category}</Text>
      <Text style={styles.statusText}>Status: {announcement.read ? 'Read' : 'Unread'}</Text>
      <ActionButton
        label={actionLabel}
        accessibilityLabel={`${actionLabel}: ${announcement.title}`}
        onPress={() => onToggleRead(announcement.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E4EAF2',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#111111',
    fontSize: 18,
    fontWeight: '700',
  },
  mutedText: {
    color: '#727A86',
    fontSize: 15,
  },
  statusText: {
    color: '#222222',
    fontSize: 15,
  },
});
