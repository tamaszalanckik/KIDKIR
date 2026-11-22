import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class Customization extends Model {}

    Customization.init(
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            language: {
                type: DataTypes.ENUM("hu", "en"),
                defaultValue: "hu",
                allowNull: false,
            },
            mode: {
                type: DataTypes.ENUM("dark", "light"),
                defaultValue: "light",
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Customization",
            tableName: "customizations",
            timestamps: false,
        },
    );

    return Customization;
};
