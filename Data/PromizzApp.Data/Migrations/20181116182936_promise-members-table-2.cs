using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PromizzApp.Data.Migrations
{
    public partial class promisememberstable2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PromiseMembers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(nullable: false),
                    PromiseeId = table.Column<int>(nullable: true),
                    GroupId = table.Column<int>(nullable: true),
                    Accept = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PromiseMembers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PromiseMembers_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PromiseMembers_Users_PromiseeId",
                        column: x => x.PromiseeId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PromiseMembers_GroupId",
                table: "PromiseMembers",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_PromiseMembers_PromiseeId",
                table: "PromiseMembers",
                column: "PromiseeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PromiseMembers");
        }
    }
}
