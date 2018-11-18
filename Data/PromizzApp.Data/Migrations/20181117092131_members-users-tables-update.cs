using Microsoft.EntityFrameworkCore.Migrations;

namespace PromizzApp.Data.Migrations
{
    public partial class membersuserstablesupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fullname",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "Firstname",
                table: "Users",
                maxLength: 200,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Lastname",
                table: "Users",
                maxLength: 200,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "PromiseId",
                table: "PromiseMembers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_PromiseMembers_PromiseId",
                table: "PromiseMembers",
                column: "PromiseId");

            migrationBuilder.AddForeignKey(
                name: "FK_PromiseMembers_Promises_PromiseId",
                table: "PromiseMembers",
                column: "PromiseId",
                principalTable: "Promises",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PromiseMembers_Promises_PromiseId",
                table: "PromiseMembers");

            migrationBuilder.DropIndex(
                name: "IX_PromiseMembers_PromiseId",
                table: "PromiseMembers");

            migrationBuilder.DropColumn(
                name: "Firstname",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Lastname",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PromiseId",
                table: "PromiseMembers");

            migrationBuilder.AddColumn<string>(
                name: "Fullname",
                table: "Users",
                maxLength: 500,
                nullable: false,
                defaultValue: "");
        }
    }
}
