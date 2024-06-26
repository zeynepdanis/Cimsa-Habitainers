
using System;
using DogaKahramanlari.Server.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DogaKahramanlari.Server.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    partial class RepositoryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("DogaKahramanlari.Server.Models.Animal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImagesNormal")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImagesStatus1")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Key")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Animals");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Content = "Merhaba! Ben bir maymunum. Ormanların neşeli ve maceraperest sakinlerinden biriyim. Dal dal gezinir, ağaçlarda sallanır ve meyveleri toplarım. Akıllı ve oyunbaz bir hayvanım. Maymun olmak harika! Ancak, maalesef çevre kirliliği bizi de etkiliyor. Ormanlarımızın yok olması ve yaşam alanlarımızın azalması, hayatımızı zorlaştırıyor. Lütfen doğamızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-monkey.png",
                            ImagesStatus1 = "/animals/monkey.png",
                            Key = 1,
                            Name = "Maymun",
                            Status = 0,
                            Value = 2
                        },
                        new
                        {
                            Id = 2,
                            Content = "Merhaba! Ben bir aslanım. Ben büyük ve güçlüyüm. Afrika'nın sıcak savanlarında yaşıyorum. Altın rengim ve muhteşem yelesim var. Kükreyişimle tanınırım ve avlarımı korurum. Ama maalesef çevre kirliliği bizi etkiliyor. Ormanlarımız yok ediliyor ve su kaynaklarımız kirleniyor. Lütfen doğamızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-lion.png",
                            ImagesStatus1 = "/animals/lion.png",
                            Key = 2,
                            Name = "Aslan",
                            Status = 0,
                            Value = 6
                        },
                        new
                        {
                            Id = 3,
                            Content = "Merhaba! Ben bir zürafaım. Uzun boyum ve uzun boynumla tanınıyorum. Afrika'nın sıcak savanlarında yaşarım. Yüksek ağaçlardaki yaprakları severim. Zürafa olmak harika! Ancak, maalesef çevre kirliliği bizi etkiliyor. Ormanlarımız yok ediliyor ve yaşam alanlarımız azalıyor. Lütfen doğamızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-giraffe.png",
                            ImagesStatus1 = "/animals/giraffe.png",
                            Key = 3,
                            Name = "Zürafa",
                            Status = 0,
                            Value = 7
                        },
                        new
                        {
                            Id = 4,
                            Content = "Merhaba! Ben bir baykuşum. Geceleri uyanıkken diğer hayvanlar uyur. Sessizce uçarım ve hızla dönerim. En sevdiğim şey avlanmaktır. Baykuş olmak harika! Ancak, maalesef çevre kirliliği bizi etkiliyor. Hava kirliliği ve orman tahribatı bizim yaşamımızı zorlaştırıyor. Lütfen doğamızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-owl.png",
                            ImagesStatus1 = "/animals/owl.png",
                            Key = 4,
                            Name = "Baykuş",
                            Status = 0,
                            Value = 8
                        },
                        new
                        {
                            Id = 5,
                            Content = "Merhaba! Ben bir tilkiyim. Hızlı ve çevik bir avcıyım. Gece avlanır, gündüz uyurum. Tilki olmak gerçekten heyecan verici! Ancak, insan etkinlikleri ve çevre kirliliği yaşam alanlarımızı tehdit ediyor. Ormanlarımız azalıyor ve doğal yaşamımızı sürdürebileceğimiz alanlar giderek daralıyor. Lütfen doğal yaşamı korumak için çaba gösterelim, böylece biz ve diğer orman sakinleri mutlu ve sağlıklı bir şekilde var olabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-fox.png",
                            ImagesStatus1 = "/animals/fox.png",
                            Key = 5,
                            Name = "Tilki",
                            Status = 0,
                            Value = 2
                        },
                        new
                        {
                            Id = 6,
                            Content = "Merhaba! Ben bir sincapım. Neşeli ve enerjik bir hayvanım. Ormanların uyanık ve hızlı koşucusuyum. Ağaçlarda zıplayıp yiyeceklerimi toplarım. Sincap olmak harika! Ancak, maalesef çevre kirliliği bizi de etkiliyor. Ormanların yok olması ve kentlerin büyümesi yaşam alanlarımızı tehdit ediyor. Lütfen doğamızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-beaver.png",
                            ImagesStatus1 = "/animals/beaver.png",
                            Key = 6,
                            Name = "Kunduz",
                            Status = 0,
                            Value = 7
                        },
                        new
                        {
                            Id = 7,
                            Content = "Merhaba! Ben bir tavşanım. Sevimli ve çevik bir hayvanım. Genellikle çimenlerde ve ormanlarda yaşarım. Büyük kulaklarım ve hızlı koşmamla tanınırım. Havada zıplayarak sevimli tavırlar sergilerim. Havuçları çok severim! Tavşan olmak harika! Ancak, maalesef çevre kirliliği bizi de etkiliyor. Ormanların yok olması ve tarım alanlarının genişlemesi, yaşam alanlarımızı tehdit ediyor. Lütfen doğal yaşam alanlarımızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-rabbit.png",
                            ImagesStatus1 = "/animals/rabbit.png",
                            Key = 7,
                            Name = "Tavşan",
                            Status = 0,
                            Value = 3
                        },
                        new
                        {
                            Id = 8,
                            Content = "Merhaba! Ben bir kediyim. Gizemli ve zarif bir hayvanım. Yumuşak tüylerim ve kuyruğumla tanınırım. Genellikle evlerde ve sokaklarda dolaşırım. Bağımsız ve meraklıyım. Yüksek yerlere tırmanmayı çok severim. Kedi olmak harika! Ancak, maalesef çevre kirliliği bizi de etkiliyor. Hava kirliliği ve kentsel gelişim, yaşam alanlarımızı daraltıyor. Lütfen doğamızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-cat.png",
                            ImagesStatus1 = "/animals/cat.png",
                            Key = 8,
                            Name = "Kedi",
                            Status = 0,
                            Value = 7
                        },
                        new
                        {
                            Id = 9,
                            Content = "Merhaba! Ben bir köpeğim. Sadık ve sevgi dolu bir arkadaşım. İnsanların en yakın dostlarından biriyim. Oyun oynamayı ve koşmayı çok severim. Sahibime koruyucu ve mutlu anlar yaşatırım. Köpek olmak harika! Ancak, maalesef çevre kirliliği bizi de etkiliyor. Kirlenmiş sular ve hava, sağlığımızı tehdit ediyor. Lütfen doğamızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-dog.png",
                            ImagesStatus1 = "/animals/dog.png",
                            Key = 9,
                            Name = "Köpek",
                            Status = 0,
                            Value = 5
                        },
                        new
                        {
                            Id = 10,
                            Content = "Merhaba! Ben bir flamingoyum. Zarif ve renkli bir su kuşuyum, sığ sularda dans ederim. Uzun bacaklarım ve eşsiz gagamla sularda avlanırım. sulak alanların yok olması ve kirlenmesi bizi çok olumsuz etkiliyor. Bu durum, besin zincirimizi ve yaşam alanlarımızı tehdit ediyor. Lütfen su kaynaklarını korumak için çaba gösterelim, böylece biz ve diğer su kuşları mutlu ve sağlıklı bir şekilde yaşayabiliriz.",
                            ImagesNormal = "/black-animals/black-flamingo.png",
                            ImagesStatus1 = "/animals/flamingo.png",
                            Key = 10,
                            Name = "Flamingo",
                            Status = 0,
                            Value = 2
                        },
                        new
                        {
                            Id = 11,
                            Content = "Merhaba! Ben bir geyiğim. Zarif ve sessiz bir orman sakinim, ormanların incisiyim. Uzun boynum ve güzel boynuzlarım ile doğanın güzelliğini temsil ederim. Geyik olmak gerçekten büyüleyici! Ancak, ormansızlaşma ve avlanma baskısı yaşam alanlarımızı tehdit ediyor. Bu nedenle, doğal habitatlarımızı korumak ve avlanma faaliyetlerini sınırlamak çok önemlidir. Lütfen doğal yaşamı korumak için çaba gösterelim, böylece biz ve diğer orman dostları mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-reindeer.png",
                            ImagesStatus1 = "/animals/reindeer.png",
                            Key = 11,
                            Name = "Geyik",
                            Status = 0,
                            Value = 6
                        },
                        new
                        {
                            Id = 12,
                            Content = "Merhaba! Ben bir kurbağayım. Geceleri nehirlerin, göllerin ve bataklıkların tadını çıkaran sevimli bir sakinim. Uzun ve yapışkan dilimle böcekleri yakalarım. Su altında yüzerken, şarkılarımı çalıp çırparken mutlu olurum. Kurbağa olmak harika! Ancak, maalesef çevre kirliliği bizi de etkiliyor. Su kaynaklarının kirlenmesi ve habitatlarımızın tahrip edilmesi, hayatımızı zorlaştırıyor. Lütfen doğamızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-frog.png",
                            ImagesStatus1 = "/animals/frog.png",
                            Key = 12,
                            Name = "Kurbağa",
                            Status = 0,
                            Value = 8
                        },
                        new
                        {
                            Id = 13,
                            Content = "Merhaba! Ben bir papağanım. Renkli ve konuşkan bir kuşum. Genellikle tropikal ormanlarda ve evlerde yaşarım. Parlak tüylerim ve çeşitli seslerimle dikkat çekerim. İnsanların taklit ettiğim seslerini öğrenirim. Papağan olmak harika! Ancak, maalesef çevre kirliliği bizi de etkiliyor. Ormanların yok olması ve yasadışı avlanma, yaşam alanlarımızı tehdit ediyor. Lütfen doğal yaşam alanlarımızı koruyalım, böylece biz ve diğer hayvanlar mutlu ve sağlıklı bir şekilde yaşayabiliriz. Teşekkürler!",
                            ImagesNormal = "/black-animals/black-parrot.png",
                            ImagesStatus1 = "/animals/parrot.png",
                            Key = 13,
                            Name = "Papağan",
                            Status = 0,
                            Value = 3
                        });
                });

            modelBuilder.Entity("DogaKahramanlari.Server.Models.Duty", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte>("DateStatus")
                        .HasColumnType("tinyint");

                    b.Property<byte>("DutyStatus")
                        .HasColumnType("tinyint");

                    b.HasKey("Id");

                    b.ToTable("Duties");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Content = "Su tasarrufu yapmak: Dişlerimizi fırçalarken suyu kapatmayı unutmayalım. Bu sayede gereksiz yere su israfını önlemiş olacağız.",
                            DateStatus = (byte)0,
                            DutyStatus = (byte)0
                        },
                        new
                        {
                            Id = 2,
                            Content = "Geri dönüşüm yapmak: \"Bugün evdeki atık malzemeleri, plastik, kağıt, cam veya metal gibi kategorilere ayıralım. Böylelikle geri dönüşüme katkı sağlamış olacağız.",
                            DateStatus = (byte)0,
                            DutyStatus = (byte)0
                        },
                        new
                        {
                            Id = 3,
                            Content = "Enerji Tasarrufu yapmak: \"Herhangi bir odadan çıktığımızda ışıkları kapatmayı unutmayalım. Böylelikle elektrik tasarrufu yapmış olacağız.",
                            DateStatus = (byte)0,
                            DutyStatus = (byte)0
                        },
                        new
                        {
                            Id = 4,
                            Content = "Bitki sulamak: \"Bitkiler de bizim gibi canlı varlıklardır ve yaşamlarını sürdürmek için suya ihtiyaç duyarlar. Bugün onlara biraz sevgi ve su verelim.",
                            DateStatus = (byte)0,
                            DutyStatus = (byte)0
                        },
                        new
                        {
                            Id = 5,
                            Content = "Hayvanları beslemek: \"Hadi bugün sokak hayvanları için mama kabı ve su kabı hazırlayalım. Hazırladığımız kapları onların yaşam alanlarına yakın bir yere bırakalım.",
                            DateStatus = (byte)0,
                            DutyStatus = (byte)0
                        },
                        new
                        {
                            Id = 6,
                            Content = "Çöp toplamak: \"Bugün çevremizi temizleyelim! Yürürken karşılaştığımız etrafımızdaki çöpleri toplayıp çöp kutusuna atalım. Bu sayede hem doğayı hem de çevremizi temiz tutmuş olacağız.",
                            DateStatus = (byte)0,
                            DutyStatus = (byte)0
                        },
                        new
                        {
                            Id = 7,
                            Content = "Gıda israfını azaltmak: \"Bugünkü görevin, yemeklerini bitirebileceğin kadarını tabağına almak. Bu sayede kalan yemeklerin çöpe gitmesini engel olmuş olacağız.",
                            DateStatus = (byte)0,
                            DutyStatus = (byte)0
                        },
                        new
                        {
                            Id = 8,
                            Content = "Hayvan fotoğrafı çekmek: \"Bugün bir hayvan dostumuzun fotoğrafını çekelim. O hayvan hakkında bilgilendirici bilgileri öğrenip arkadaşlarımızla paylaşalım.",
                            DateStatus = (byte)0,
                            DutyStatus = (byte)0
                        },
                        new
                        {
                            Id = 9,
                            Content = "Ağaç dikmek: \"Hadi birlikte doğayı korumak için bir ağaç veya fidan dikelim. Daha sonra o fidanı sulayalım ve fidanın büyüyüp gelişmesini gözlemleyelim.",
                            DateStatus = (byte)1,
                            DutyStatus = (byte)0
                        });
                });

            modelBuilder.Entity("DogaKahramanlari.Server.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("RefreshToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("RefreshTokenExpiryTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("DogaKahramanlari.Server.Models.UserKey", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int?>("NumberOfKeys")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("UserKeys");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "15f7ec80-d12e-4b00-8415-8dab0b8f0950",
                            Name = "Teacher",
                            NormalizedName = "TEACHER"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("DogaKahramanlari.Server.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("DogaKahramanlari.Server.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DogaKahramanlari.Server.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("DogaKahramanlari.Server.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
