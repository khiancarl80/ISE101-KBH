import { StyleSheet, Text, View } from 'react-native';

import { getUnreadAnnouncements } from '@/services/announcementUtils';
import type { Announcement } from '@/types/announcement';

const sampleAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
];

export default function HomeScreen() {
  const unreadAnnouncements = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text>One campus. Connected students.</Text>
      <Text>Welcome to the Week 1 project foundation.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Announcement Utility Test</Text>
        <Text style={styles.cardText}>Total Announcements: {sampleAnnouncements.length}</Text>
        <Text style={styles.cardText}>
          Unread Announcements: {unreadAnnouncements.length}
        </Text>
        {unreadAnnouncements.map(item => (
          <Text key={item.id} style={styles.cardText}>
            {'\u2022'} {item.title}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 36,
    maxWidth: 420,
    padding: 24,
  },
  cardTitle: {
    color: '#111111',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 14,
  },
  cardText: {
    color: '#222222',
    fontSize: 16,
    lineHeight: 24,
  },
});
