import { Pressable, StyleSheet, Text } from 'react-native';

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
}

export function ActionButton({ label, onPress, accessibilityLabel }: ActionButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#174A7E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});
