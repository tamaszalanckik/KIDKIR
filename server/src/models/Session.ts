import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class Session extends Model {}

    Session.init(
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            expires_in: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            session: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            modelName: "Session",
            tableName: "sessions",
        },
    );

    return Session;
};
