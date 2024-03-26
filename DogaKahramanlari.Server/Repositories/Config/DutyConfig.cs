using DogaKahramanlari.Server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DogaKahramanlari.Server.Repositories.Config
{
    public class DutyConfig : IEntityTypeConfiguration<Duty>
    {
        public void Configure(EntityTypeBuilder<Duty> builder)
        {
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Content).IsRequired();

            builder.HasData(
                      new Duty()
                      {
                          Id = 1,
                          Content = "Su tasarrufu yapmak: Dişlerimizi fırçalarken suyu kapatmayı unutmayalım. Bu sayede gereksiz yere su israfını önlemiş olacağız.",
                          DutyStatus = 0,
                          DateStatus = 0
  
                      },
                      new Duty()
                      {
                          Id = 2,
                          Content = "Geri dönüşüm yapmak: \"Bugün evdeki atık malzemeleri, plastik, kağıt, cam veya metal gibi kategorilere ayıralım. Böylelikle geri dönüşüme katkı sağlamış olacağız.",
                          DutyStatus = 0,
                          DateStatus = 0

                      },
                      new Duty()
                      {
                          Id = 3,
                          Content = "Enerji Tasarrufu yapmak: \"Herhangi bir odadan çıktığımızda ışıkları kapatmayı unutmayalım. Böylelikle elektrik tasarrufu yapmış olacağız.",
                          DutyStatus = 0,
                          DateStatus = 0

                      },
                      new Duty()
                      {
                          Id = 4,
                          Content = "Bitki sulamak: \"Bitkiler de bizim gibi canlı varlıklardır ve yaşamlarını sürdürmek için suya ihtiyaç duyarlar. Bugün onlara biraz sevgi ve su verelim.",
                          DutyStatus = 0,
                          DateStatus = 0

                      },
                      new Duty()
                      {
                          Id = 5,
                          Content = "Hayvanları beslemek: \"Hadi bugün sokak hayvanları için mama kabı ve su kabı hazırlayalım. Hazırladığımız kapları onların yaşam alanlarına yakın bir yere bırakalım.",
                          DutyStatus = 0,
                          DateStatus = 0

                      },
                      new Duty()
                      {
                          Id = 6,
                          Content = "Çöp toplamak: \"Bugün çevremizi temizleyelim! Yürürken karşılaştığımız etrafımızdaki çöpleri toplayıp çöp kutusuna atalım. Bu sayede hem doğayı hem de çevremizi temiz tutmuş olacağız.",
                          DutyStatus = 0,
                          DateStatus = 0

                      },
                      new Duty()
                      {
                          Id = 7,
                          Content = "Gıda israfını azaltmak: \"Bugünkü görevin, yemeklerini bitirebileceğin kadarını tabağına almak. Bu sayede kalan yemeklerin çöpe gitmesini engel olmuş olacağız.",
                          DutyStatus = 0,
                          DateStatus = 0

                      },
                      new Duty()
                      {
                          Id = 8,
                          Content = "Hayvan fotoğrafı çekmek: \"Bugün bir hayvan dostumuzun fotoğrafını çekelim. O hayvan hakkında bilgilendirici bilgileri öğrenip arkadaşlarımızla paylaşalım.",
                          DutyStatus = 0,
                          DateStatus = 0

                      },

                      new Duty()
                      {
                          Id = 9,
                          Content = "Ağaç dikmek: \"Hadi birlikte doğayı korumak için bir ağaç veya fidan dikelim. Daha sonra o fidanı sulayalım ve fidanın büyüyüp gelişmesini gözlemleyelim.",
                          DutyStatus = 0,
                          DateStatus = 1

                      }
                );
        }
    }
}
