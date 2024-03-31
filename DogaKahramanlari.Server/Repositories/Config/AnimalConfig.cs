using DogaKahramanlari.Server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace DogaKahramanlari.Server.Repositories.Config
{
    public class AnimalConfig : IEntityTypeConfiguration<Animal>
    {
        public void Configure(EntityTypeBuilder<Animal> builder)
        {
            builder.HasKey(a=> a.Id);
            builder.Property(a => a.Name).IsRequired();

            builder.HasData(
                      new Animal()
                      {
                        Id = 1,
                        Name="Monkey",
                        ImagesNormal= "/black-animals/black-monkey.png",
                        ImagesStatus1= "/animals/monkey.png",
                        Content = "Monkey İçeriği",
                        Key =1,
                        Value = 2,
                        Status=0
                      },
                      new Animal()                     
                      {
                        Id = 2,
                        Name = "Lion",
                        ImagesNormal = "/black-animals/black-lion.png",
                        ImagesStatus1 = "/animals/lion.png",
                        Content = "Lion İçeriği",
                        Key = 2,
                        Value = 6,
                        Status = 0
                      },
                       new Animal()
                       {
                           Id=3,
                           Name = "Giraffe",
                           ImagesNormal = "/black-animals/black-giraffe.png",
                           ImagesStatus1 = "/animals/giraffe.png",
                           Content = "Giraffe İçeriği",
                           Key = 3,
                           Value = 7,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id=4,
                           Name = "Owl",
                           ImagesNormal = "/black-animals/black-owl.png",
                           ImagesStatus1 = "/animals/owl.png",
                           Content = "Owl İçeriği",
                           Key = 4,
                           Value = 8,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id=5,
                           Name = "Fox",
                           ImagesNormal = "/black-animals/black-fox.png",
                           ImagesStatus1 = "/animals/fox.png",
                           Content = "Fox İçeriği",
                           Key = 5,
                           Value = 2,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id=6,
                           Name = "Beaver",
                           ImagesNormal = "/black-animals/black-beaver.png",
                           ImagesStatus1 = "/animals/beaver.png",
                           Content = "Beaver İçeriği",
                           Key = 6,
                           Value = 7,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id=7,
                           Name = "Rabbit",
                           ImagesNormal = "/black-animals/black-rabbit.png",
                           ImagesStatus1 = "/animals/rabbit.png",
                           Content = "Rabbit İçeriği",
                           Key = 7,
                           Value = 3,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id =8,
                           Name = "Cat",
                           ImagesNormal = "/black-animals/black-cat.png",
                           ImagesStatus1 = "/animals/cat.png",
                           Content = "Cat İçeriği",
                           Key = 8,
                           Value = 7,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id=9,
                           Name = "Dog",
                           ImagesNormal = "/black-animals/black-dog.png",
                           ImagesStatus1 = "/animals/dog.png",
                           Content = "Dog İçeriği",
                           Key = 9,
                           Value = 5,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id=10,
                           Name = "Flamingo",
                           ImagesNormal = "/black-animals/black-flamingo.png",
                           ImagesStatus1 = "/animals/flamingo.png",
                           Content = "Flamingo İçeriği",
                           Key = 10,
                           Value = 2,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id = 11,
                           Name = "Reindeer",
                           ImagesNormal = "/black-animals/black-reindeer.png",
                           ImagesStatus1 = "/animals/reindeer.png",
                           Content = "Reindeer İçeriği",
                           Key = 11,
                           Value = 6,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id = 12,
                           Name = "Frog",
                           ImagesNormal = "/black-animals/black-frog.png",
                           ImagesStatus1 = "/animals/frog.png",
                           Content = "Frog İçeriği",
                           Key = 12,
                           Value = 8,
                           Status = 0
                       },
                       new Animal()
                       {
                           Id = 13,
                           Name = "Parrot",
                           ImagesNormal = "/black-animals/black-parrot.png",
                           ImagesStatus1 = "/animals/parrot.png",
                           Content = "Parrot İçeriği",
                           Key = 13,
                           Value = 3,
                           Status = 0
                       }
                );
        }
    }
}
