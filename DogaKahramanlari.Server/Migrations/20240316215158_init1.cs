using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DogaKahramanlari.Server.Migrations
{
    /// <inheritdoc />
    public partial class init1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "055a4507-60bc-46f1-b334-c72b9d5cf30a");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "UserKeys",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c6ee3e6e-f6d3-46b9-b49c-a19da9d32307", null, "Teacher", "TEACHER" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c6ee3e6e-f6d3-46b9-b49c-a19da9d32307");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserKeys",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "055a4507-60bc-46f1-b334-c72b9d5cf30a", null, "Teacher", "TEACHER" });
        }
    }
}
