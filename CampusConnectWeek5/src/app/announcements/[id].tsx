import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionButton } from '@/components/ActionButton';
import { useAnnouncements } from '@/services/AnnouncementContext';

export default function AnnouncementDetailsScreen() {
  const { id: routeId } = useLocalSearchParams<{ id?: string | string[] }>();
  const id = typeof routeId === 'string' ? routeId : undefined;
  const { announcements, toggleRead } = useAnnouncements();
  const announcement = id ? announcements.find(item => item.id === id) : undefined;

  if (!announcement) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.title}>Announcement not found</Text>
        <Text style={styles.body}>
          This announcement may have been removed or the link may be incorrect.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{announcement.title}</Text>
      <Text style={styles.body}>Category: {announcement.category}</Text>
      <Text style={styles.body}>Status: {announcement.read ? 'Read' : 'Unread'}</Text>
      <ActionButton
        label={`Mark as ${announcement.read ? 'Unread' : 'Read'}`}
        accessibilityLabel={`Mark ${announcement.title} as ${announcement.read ? 'unread' : 'read'}`}
        onPress={() => toggleRead(announcement.id)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 16,
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    color: '#111111',
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    color: '#526070',
    fontSize: 16,
    lineHeight: 24,
  },
});
