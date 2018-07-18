﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PromizzApp.Data;

namespace PromizzApp.Data.Migrations
{
    [DbContext(typeof(PromizzAppContext))]
    [Migration("20180718172506_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PromizzApp.Domain.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("OwnerId");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("PromizzApp.Domain.History", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ActionById");

                    b.Property<DateTime>("ActionOn");

                    b.Property<int?>("ActionTypeId");

                    b.HasKey("Id");

                    b.HasIndex("ActionById");

                    b.HasIndex("ActionTypeId");

                    b.ToTable("History");
                });

            modelBuilder.Entity("PromizzApp.Domain.HistoryActionType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("MultiLangKey");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("HistoryActionTypes");
                });

            modelBuilder.Entity("PromizzApp.Domain.Promise", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Color");

                    b.Property<string>("Description");

                    b.Property<DateTime>("EndDate");

                    b.Property<int?>("OwnerId");

                    b.Property<int?>("StateId");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.HasIndex("StateId");

                    b.ToTable("Promises");
                });

            modelBuilder.Entity("PromizzApp.Domain.PromiseState", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("MultiLangKey");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("PromiseStates");
                });

            modelBuilder.Entity("PromizzApp.Domain.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Avatar");

                    b.Property<string>("Bio");

                    b.Property<string>("Email");

                    b.Property<string>("Fullname");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("PromizzApp.Domain.Group", b =>
                {
                    b.HasOne("PromizzApp.Domain.User", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("PromizzApp.Domain.History", b =>
                {
                    b.HasOne("PromizzApp.Domain.User", "ActionBy")
                        .WithMany()
                        .HasForeignKey("ActionById");

                    b.HasOne("PromizzApp.Domain.HistoryActionType", "ActionType")
                        .WithMany()
                        .HasForeignKey("ActionTypeId");
                });

            modelBuilder.Entity("PromizzApp.Domain.Promise", b =>
                {
                    b.HasOne("PromizzApp.Domain.User", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");

                    b.HasOne("PromizzApp.Domain.PromiseState", "State")
                        .WithMany()
                        .HasForeignKey("StateId");
                });
#pragma warning restore 612, 618
        }
    }
}
