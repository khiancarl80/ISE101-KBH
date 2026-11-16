import { Image, StyleSheet, Text, View } from 'react-native';

import { ActionButton } from './ActionButton';

interface AnnouncementPanelProps {
  onViewAll: () => void;
}

export function AnnouncementPanel({ onViewAll }: AnnouncementPanelProps) {
  return (
    <View style={styles.panel}>
      <Text style={styles.title}>Campus Announcements</Text>
      <Text style={styles.subtitle}>Stay updated with the latest campus news.</Text>
      <ActionButton label="View All Announcements" onPress={onViewAll} />
      <Image
        source={require('@/assets/images/campus-logo.jpg')}
        style={styles.banner}
        resizeMode="contain"
        accessibilityLabel="Santa Rita College campus seal"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    gap: 12,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#111111',
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    color: '#526070',
    fontSize: 14,
  },
  banner: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
});
