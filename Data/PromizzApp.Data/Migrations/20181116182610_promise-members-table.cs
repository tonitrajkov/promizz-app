using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PromizzApp.Data.Migrations
{
    public partial class promisememberstable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Promises_Users_PromiseeId",
                table: "Promises");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Promises");

            migrationBuilder.RenameColumn(
                name: "PromiseeId",
                table: "Promises",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Promises_PromiseeId",
                table: "Promises",
                newName: "IX_Promises_UserId");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateAdded",
                table: "Promises",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateModified",
                table: "Promises",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddForeignKey(
                name: "FK_Promises_Users_UserId",
                table: "Promises",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Promises_Users_UserId",
                table: "Promises");

            migrationBuilder.DropColumn(
                name: "DateAdded",
                table: "Promises");

            migrationBuilder.DropColumn(
                name: "DateModified",
                table: "Promises");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Promises",
                newName: "PromiseeId");

            migrationBuilder.RenameIndex(
                name: "IX_Promises_UserId",
                table: "Promises",
                newName: "IX_Promises_PromiseeId");

            migrationBuilder.AddColumn<int>(
                name: "OwnerId",
                table: "Promises",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Promises_Users_PromiseeId",
                table: "Promises",
                column: "PromiseeId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
