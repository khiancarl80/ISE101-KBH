import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { getUnreadAnnouncements } from '@/services/announcementUtils';
import type { Announcement } from '@/types/announcement';

const initialAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment Reminder', category: 'Academic', read: true },
  { id: 'a2', title: 'Sports Festival Announcement', category: 'Events', read: false },
];

export default function HomeScreen() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const unreadAnnouncements = getUnreadAnnouncements(announcements);

  function toggleAnnouncementRead(id: string) {
    setAnnouncements(current =>
      current.map(item => (item.id === id ? { ...item, read: !item.read } : item))
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Campus Connect</Text>
          <Text>One campus. Connected students.</Text>
          <Text>Welcome to the Week 1 project foundation.</Text>
        </View>

        <View style={styles.utilityCard}>
          <Text style={styles.cardTitle}>Announcement Utility Test</Text>
          <Text style={styles.cardText}>Total Announcements: {announcements.length}</Text>
          <Text style={styles.cardText}>
            Unread Announcements: {unreadAnnouncements.length}
          </Text>
          {unreadAnnouncements.map(item => (
            <Text key={item.id} style={styles.cardText}>
              {'\u2022'} {item.title}
            </Text>
          ))}
        </View>

        <View style={styles.announcements}>
          <Text style={styles.sectionTitle}>Campus Announcements</Text>
          <Text style={styles.unreadCount}>
            Unread Announcements: {unreadAnnouncements.length}
          </Text>
          {announcements.map(item => (
            <View key={item.id} style={styles.announcementCard}>
              <Text style={styles.announcementTitle}>{item.title}</Text>
              <Text style={styles.mutedText}>Category: {item.category}</Text>
              <Text style={styles.cardText}>Status: {item.read ? 'Read' : 'Unread'}</Text>
              <Pressable
                accessibilityRole="button"
                onPress={() => toggleAnnouncementRead(item.id)}
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
                <Text style={styles.buttonText}>
                  Mark as {item.read ? 'Unread' : 'Read'}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 48,
    backgroundColor: '#F4F7FB',
  },
  content: {
    width: '100%',
    maxWidth: 900,
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  utilityCard: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
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
  announcements: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    marginTop: 32,
    gap: 16,
  },
  sectionTitle: {
    color: '#111111',
    fontSize: 24,
    fontWeight: '700',
  },
  unreadCount: {
    color: '#2864E8',
    fontSize: 16,
    fontWeight: '600',
  },
  announcementCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E4EAF2',
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
    padding: 16,
  },
  announcementTitle: {
    color: '#111111',
    fontSize: 18,
    fontWeight: '700',
  },
  mutedText: {
    color: '#727A86',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2864E8',
    borderRadius: 8,
    marginTop: 4,
    paddingVertical: 12,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
