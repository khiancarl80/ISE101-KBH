import {
  Button as ButtonKBH,
  FlatList as FlatListKBH,
  StyleSheet as StyleSheetKBH,
  Text as TextKBH,
  TextInput as TextInputKBH,
  View as ViewKBH,
} from "react-native";
import { useRef as useRefKBH, useState as useStateKBH } from "react";
import FooterKBH from "../components/Footer";
import HeaderKBH from "../components/Header";
import TaskItemKBH from "../components/TaskItem";

export default function TaskScreenKBH() {
  const [taskKBH, setTaskKBH] = useStateKBH("");
  const [tasksKBH, setTasksKBH] = useStateKBH([]);
  const nextTaskIdKBH = useRefKBH(1);

  const addTaskKBH = () => {
    const trimmedTaskKBH = taskKBH.trim();
    if (trimmedTaskKBH === "") {
      return;
    }

    const newTaskKBH = {
      idKBH: String(nextTaskIdKBH.current),
      textKBH: trimmedTaskKBH,
    };
    nextTaskIdKBH.current += 1;
    setTasksKBH((currentTasksKBH) => [...currentTasksKBH, newTaskKBH]);
    setTaskKBH("");
  };

  const deleteTaskKBH = (taskIdKBH) => {
    setTasksKBH((currentTasksKBH) =>
      currentTasksKBH.filter((taskItemKBH) => taskItemKBH.idKBH !== taskIdKBH),
    );
  };

  return (
    <ViewKBH style={stylesKBH.container}>
      <HeaderKBH />
      <ViewKBH style={stylesKBH.body}>
        <TextKBH style={stylesKBH.title}>Task Manager</TextKBH>
        <TextInputKBH
          accessibilityLabel="New task"
          autoCapitalize="sentences"
          onChangeText={setTaskKBH}
          onSubmitEditing={addTaskKBH}
          placeholder="Enter a new task"
          returnKeyType="done"
          style={stylesKBH.input}
          value={taskKBH}
        />
        <ButtonKBH title="Add Task" onPress={addTaskKBH} />
        <FlatListKBH
          contentContainerStyle={stylesKBH.list}
          data={tasksKBH}
          keyExtractor={(taskItemKBH) => taskItemKBH.idKBH}
          ListEmptyComponent={
            <TextKBH style={stylesKBH.emptyMessage}>
              No tasks yet. Add your first task above.
            </TextKBH>
          }
          renderItem={({ item: taskItemKBH }) => (
            <TaskItemKBH
              taskKBH={taskItemKBH.textKBH}
              onDeleteKBH={() => deleteTaskKBH(taskItemKBH.idKBH)}
            />
          )}
        />
      </ViewKBH>
      <FooterKBH />
    </ViewKBH>
  );
}

const stylesKBH = StyleSheetKBH.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  body: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderColor: "#cccccc",
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    padding: 16,
  },
  list: {
    paddingTop: 12,
    flexGrow: 1,
  },
  emptyMessage: {
    color: "#666666",
    paddingVertical: 16,
    textAlign: "center",
  },
});
