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
                keyValue: "990b4c0c-2814-45a5-acea-073ce0b5ba2a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "92898809-7c1b-4eeb-aaaf-06c9afe359c0", null, "Teacher", "TEACHER" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "92898809-7c1b-4eeb-aaaf-06c9afe359c0");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "990b4c0c-2814-45a5-acea-073ce0b5ba2a", null, "Teacher", "TEACHER" });
        }
    }
}
