import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
    class User extends Model {};

    User.init(
        {
             ID : {
                type : DataTypes.UUID,
                primaryKey : true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            username : {
                type : DataTypes.STRING,
                allowNull : false,
                unique : true
            },
            email : {
                type : DataTypes.STRING,
                allowNull : false,
                unique : true
            },
            password : {
                type : DataTypes.STRING,
                allowNull : false
            },
            role : {
                type : DataTypes.ENUM("admin", "student", "teacher"),
                defaultValue : "student",
                allowNull : false
            }
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users"
        }
    );

    return User;
};