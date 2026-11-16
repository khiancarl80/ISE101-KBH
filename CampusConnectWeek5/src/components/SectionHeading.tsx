import { StyleSheet, Text, View } from 'react-native';

interface SectionHeadingProps {
  title?: string;
  subtitle?: string;
}

export function SectionHeading({
  title = 'Campus Connect',
  subtitle = 'Campus updates in one place',
}: SectionHeadingProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 6,
    padding: 20,
  },
  title: {
    color: '#111111',
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    color: '#526070',
    fontSize: 15,
  },
});
