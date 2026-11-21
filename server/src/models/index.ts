import type { Sequelize } from "sequelize";

import User from "./User";
import Customization from "./Customization";
import Session from "./Session";
import Task from "./Task";
import CardTask from "./CardTask";
import Card from "./Card";
import WriteTask from "./WriteTask";
import Answer from "./Answer";
import PickTask from "./PickTask";
import TaskGroup from "./TaskGroup";
import Class from "./Class";

export default (sequelize:Sequelize) => {
    const Users = User(sequelize);
    const Customizations = Customization(sequelize);
    const Sessions = Session(sequelize);
    const Tasks = Task(sequelize);
    const CardTasks = CardTask(sequelize);
    const Cards = Card(sequelize);
    const WriteTasks = WriteTask(sequelize);
    const Answers = Answer(sequelize);
    const PickTasks = PickTask(sequelize);
    const TaskGroups = TaskGroup(sequelize);
    const Classes = Class(sequelize);

    return { Users, Customizations, Sessions, Tasks, CardTasks, Cards, WriteTasks, Answers, PickTasks, TaskGroups, Classes };
};