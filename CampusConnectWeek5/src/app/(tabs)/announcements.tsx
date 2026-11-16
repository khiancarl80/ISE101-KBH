import { FlatList, StyleSheet, View } from 'react-native';

import { AnnouncementCard } from '@/components/AnnouncementCard';
import { SectionHeading } from '@/components/SectionHeading';
import { useAnnouncements } from '@/services/AnnouncementContext';

export default function AnnouncementsScreen() {
  const { announcements, toggleRead } = useAnnouncements();

  return (
    <FlatList
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
        <View style={styles.header}>
          <SectionHeading
            title="Announcements"
            subtitle="Browse campus updates and open an announcement for details."
          />
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
  header: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    marginBottom: 12,
  },
  feedItem: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    marginBottom: 12,
  },
});
