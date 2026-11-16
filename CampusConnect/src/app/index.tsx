import { StyleSheet, View } from 'react-native';

import AnnouncementPanel from '@/components/AnnouncementPanel';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AnnouncementPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F3F6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
});
