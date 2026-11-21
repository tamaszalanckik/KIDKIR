import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
    class Class extends Model {};

    Class.init(
        {
            ID : {
                type : DataTypes.UUID,
                primaryKey : true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            name : {
                type : DataTypes.STRING,
                allowNull : false
            }
        },
        {
            sequelize,
            modelName : "Class",
            tableName : "classes",
        }
    );

    return Class;
};