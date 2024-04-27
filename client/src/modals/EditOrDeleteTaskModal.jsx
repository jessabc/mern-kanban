import { useRef, useState } from "react";
import DeleteTaskModal from "./DeleteTaskModal";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

export default function EditOrDeleteTaskModal({
  task,
  isEditDeleteTaskModalVisible,
  setIsEditDeleteTaskModalVisible,
  setIsTaskModalVisible,
  setIsEditTaskModalVisible,
}) {
  const [isDeleteTaskModalVisible, setIsDeleteTaskModalVisible] =
    useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => {
    setIsEditDeleteTaskModalVisible(false);
  });

  function handleClick(e) {
    // setIsTaskModalVisible(false);
    if (e.target.id === "editTask") {
      setIsEditTaskModalVisible(true);
    } else {
      setIsDeleteTaskModalVisible(true);
    }
    setIsEditDeleteTaskModalVisible(false);
  }

  return (
    <>
      <div className="">
        {/* overlay */}
        <div className={`${isEditDeleteTaskModalVisible ? " " : ""}`}>
          <div
            className={`${
              isEditDeleteTaskModalVisible
                ? "flex flex-col absolute right-4 w-28 justify-center items-start py-3 pl-3  text-lg bg-gray-50 shadow-lg gap-1 rounded-lg text-gray-400 dark:bg-zinc-700"
                : "hidden"
            } `}
            ref={ref}
          >
            <button
              type="button"
              id="editTask"
              onClick={(e) => handleClick(e)}
              className="text-left hover:text-gray-300"
            >
              Edit Task
            </button>

            <button
              type="button"
              id="deleteTask"
              onClick={(e) => handleClick(e)}
              className="text-red-400 hover:text-red-300"
            >
              Delete Task
            </button>
          </div>
        </div>
      </div>
      {isDeleteTaskModalVisible && (
        <DeleteTaskModal
          task={task}
          isDeleteTaskModalVisible={isDeleteTaskModalVisible}
          setIsDeleteTaskModalVisible={setIsDeleteTaskModalVisible}
          setIsTaskModalVisible={setIsTaskModalVisible}
        />
      )}
    </>
  );
}
