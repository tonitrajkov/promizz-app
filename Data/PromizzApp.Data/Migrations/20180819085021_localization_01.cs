using Microsoft.EntityFrameworkCore.Migrations;

namespace PromizzApp.Data.Migrations
{
    public partial class localization_01 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Localizations_Languages_LanguageId",
                schema: "loc",
                table: "Localizations");

            migrationBuilder.DropIndex(
                name: "IX_Localizations_LanguageId",
                schema: "loc",
                table: "Localizations");

            migrationBuilder.DropColumn(
                name: "LanguageId",
                schema: "loc",
                table: "Localizations");

            migrationBuilder.AddColumn<string>(
                name: "LanguageShortName",
                schema: "loc",
                table: "Localizations",
                maxLength: 15,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LanguageShortName",
                schema: "loc",
                table: "Localizations");

            migrationBuilder.AddColumn<int>(
                name: "LanguageId",
                schema: "loc",
                table: "Localizations",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Localizations_LanguageId",
                schema: "loc",
                table: "Localizations",
                column: "LanguageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Localizations_Languages_LanguageId",
                schema: "loc",
                table: "Localizations",
                column: "LanguageId",
                principalSchema: "loc",
                principalTable: "Languages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
