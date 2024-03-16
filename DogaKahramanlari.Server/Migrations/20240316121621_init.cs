using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DogaKahramanlari.Server.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "92898809-7c1b-4eeb-aaaf-06c9afe359c0");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "7d3a1fd1-a7d3-44a7-a46b-a9542d849f5a", null, "Teacher", "TEACHER" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7d3a1fd1-a7d3-44a7-a46b-a9542d849f5a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "92898809-7c1b-4eeb-aaaf-06c9afe359c0", null, "Teacher", "TEACHER" });
        }
    }
}
