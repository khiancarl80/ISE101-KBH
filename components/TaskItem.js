import {
  StyleSheet as StyleSheetKBH,
  Text as TextKBH,
  TouchableOpacity as TouchableOpacityKBH,
  View as ViewKBH,
} from "react-native";

export default function TaskItemKBH({ taskKBH, onDeleteKBH }) {
  return (
    <ViewKBH style={stylesKBH.item}>
      <TextKBH style={stylesKBH.text}>{taskKBH.toUpperCase()}</TextKBH>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel={`Delete ${taskKBH}`}
        onPress={onDeleteKBH}
        style={stylesKBH.deleteButton}
      >
        <TextKBH style={stylesKBH.delete}>Delete</TextKBH>
      </TouchableOpacity>
    </ViewKBH>
  );
}

const stylesKBH = StyleSheetKBH.create({
  item: {
    alignItems: "center",
    backgroundColor: "#dcedc8",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 12,
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginRight: 12,
  },
  deleteButton: {
    padding: 4,
  },
  delete: {
    color: "#b00020",
    fontSize: 16,
    fontWeight: "600",
  },
});
