using Microsoft.EntityFrameworkCore.Migrations;

namespace PromizzApp.Data.Migrations
{
    public partial class promiseetopromisetable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Promises_Users_OwnerId",
                table: "Promises");

            migrationBuilder.DropIndex(
                name: "IX_Promises_OwnerId",
                table: "Promises");

            migrationBuilder.AddColumn<int>(
                name: "PromiseeId",
                table: "Promises",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Promises_PromiseeId",
                table: "Promises",
                column: "PromiseeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Promises_Users_PromiseeId",
                table: "Promises",
                column: "PromiseeId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Promises_Users_PromiseeId",
                table: "Promises");

            migrationBuilder.DropIndex(
                name: "IX_Promises_PromiseeId",
                table: "Promises");

            migrationBuilder.DropColumn(
                name: "PromiseeId",
                table: "Promises");

            migrationBuilder.CreateIndex(
                name: "IX_Promises_OwnerId",
                table: "Promises",
                column: "OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Promises_Users_OwnerId",
                table: "Promises",
                column: "OwnerId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
