using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DogaKahramanlari.Server.Migrations
{
    /// <inheritdoc />
    public partial class a : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "25ab462e-c57d-4dc9-ba74-49fb4cc1f49b");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ef22dac6-a0de-4563-b0fd-ab78bc664232", null, "Teacher", "TEACHER" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ef22dac6-a0de-4563-b0fd-ab78bc664232");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "25ab462e-c57d-4dc9-ba74-49fb4cc1f49b", null, "Teacher", "TEACHER" });
        }
    }
}
