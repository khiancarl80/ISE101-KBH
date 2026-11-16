import { useRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { AnnouncementCard } from '@/components/AnnouncementCard';
import { AnnouncementPanel } from '@/components/AnnouncementPanel';
import { SectionHeading } from '@/components/SectionHeading';
import { useAnnouncements } from '@/services/AnnouncementContext';
import { getUnreadAnnouncements } from '@/services/announcementUtils';

export default function HomeScreen() {
  const listRef = useRef<FlatList>(null);
  const { announcements, toggleRead } = useAnnouncements();
  const unreadAnnouncements = getUnreadAnnouncements(announcements);

  return (
    <FlatList
      ref={listRef}
      style={styles.list}
      contentContainerStyle={styles.container}
      data={announcements}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.feedItem}>
          <AnnouncementCard announcement={item} onToggleRead={toggleRead} />
        </View>
      )}
      ListHeaderComponent={
        <View style={styles.content}>
          <SectionHeading />
          <AnnouncementPanel
            onViewAll={() => listRef.current?.scrollToIndex({ index: 0, animated: true })}
          />
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
          <View style={styles.feedHeader}>
            <Text style={styles.sectionTitle}>Campus Announcements</Text>
            <Text style={styles.unreadCount}>
              Unread Announcements: {unreadAnnouncements.length}
            </Text>
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 48,
  },
  content: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
  },
  utilityCard: {
    width: '100%',
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
  cardTitle: {
    color: '#111111',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardText: {
    color: '#222222',
    fontSize: 14,
    lineHeight: 20,
  },
  feedHeader: {
    width: '100%',
    gap: 8,
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#111111',
    fontSize: 20,
    fontWeight: '700',
  },
  unreadCount: {
    color: '#2864E8',
    fontSize: 14,
    fontWeight: '600',
  },
  feedItem: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    marginBottom: 12,
  },
});
