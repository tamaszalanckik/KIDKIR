export function UserHasCustomization(U:any, C:any) { // 1-N
    U.belongsTo(C, {
        foreignKey : "customizationID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
    
    C.hasMany(U, {
        foreignKey : "customizationID"
    });
}

export function UserLoggedInWithSession(U:any, S:any) { // 1-1
    S.hasOne(U, {
        foreignKey : "sessionID",
        
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
    
    U.belongsTo(S, {
        foreignKey : "sessionID"
    });
}

export function UserTeachesClass(U:any, C:any) {
    C.belongsTo(U, {
        foreignKey : "teacherID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });

    U.hasOne(C, {
        foreignKey : "teacherID"
    })
}

export function UserAttendsClass(U:any, C:any) { // N-M
    U.belongsToMany(C, {
        through : "user_attends_class",
        foreignKey : "userID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });

    C.belongsToMany(U, {
        through : "user_attends_class",
        foreignKey : "classID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
}

export function UserCreatesTaskGroup(U:any, TG:any) {
    U.hasMany(TG, {
        foreignKey : "userID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });

    TG.belongsTo(U, {
        foreignKey : "userID"
    });
}

export function UserDoesAnswersTask(U:any, T:any, UAT:any) {
    U.belongsToMany(T, {
        through : UAT,
        foreignKey : "userID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
    
    T.belongsToMany(U, {
        through : UAT,
        foreignKey : "taskID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
}

export function TaskGroupContainsTask(TG:any, T:any) {
    TG.belongsToMany(T, {
        through : "task_group_contains_task",
        foreignKey : "task_groupID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
    
    T.belongsToMany(TG, {
        through : "task_group_contains_task",
        foreignKey : "taskID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
}

export function TaskIsCardTask(T:any, C:any) {
    T.hasOne(C, {
        foreignKey : "taskID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
    
    C.belongsTo(T, {
        foreignKey : "taskID"
    });
}

export function CardTaskContainsCard(CT:any, C:any) {
    C.belongsTo(CT, {
        foreignKey : "card_taskID",
        
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
    
    CT.hasMany(C, {
        foreignKey : "card_taskID"
    });
}

export function TaskIsWriteTask(T:any, W:any) {
    T.hasOne(W, {
        foreignKey : "taskID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
    
    W.belongsTo(T, {
        foreignKey : "taskID"
    });
}

export function WriteTasksGoodAnswer(W:any, A:any) {
    W.belongsTo(A, {
        foreignKey : "good_answerID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
    
    A.hasOne(W, {
        foreignKey : "good_answerID"
    })
}

export function TaskIsPickTask(T:any, P:any) {
    T.hasOne(P, {
        foreignKey : "taskID",

        onDelete : "CASCADE",
        onUpdate : "CASCADE"
    });
    
    P.belongsTo(T, {
        foreignKey : "taskID"
    });
}

export function PickTaskIncludesAnswer(P:any, A:any) {
    A.belongsTo(P, {
        foreignKey : "pick_taskID",
        as : "pickTask",
    });
    
    P.hasMany(A, {
        foreignKey : "pick_taskID",
        as : "answers"
    });
}

export function PickTasksGoodAnswer(P:any, A:any) {
    P.belongsTo(A, {
        foreignKey : "good_answerID",
        as: "goodAnswer",
    });
    
    A.hasOne(P, {
        foreignKey : "good_answerID",
        as : "goodForPickTask"
    })
}