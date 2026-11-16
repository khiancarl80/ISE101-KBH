import { Pressable, StyleSheet, Text, View } from 'react-native';

type AnnouncementCardProps = {
  title: string;
  category: string;
  read: boolean;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.status}>Status: {read ? 'Read' : 'Unread'}</Text>

      <Pressable
        onPress={onMarkRead}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, read && styles.buttonActive]}>
        <Text style={styles.buttonText}>{read ? 'Mark as Unread' : 'Mark as Read'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 18,
    marginTop: 18,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    color: '#0F172A',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
  },
  category: {
    color: '#475569',
    fontSize: 18,
    marginBottom: 8,
  },
  status: {
    color: '#111827',
    fontSize: 18,
    marginBottom: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 16,
  },
  buttonActive: {
    backgroundColor: '#1D4ED8',
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
