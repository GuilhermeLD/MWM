import { Image, Text, View } from "react-native";
import { Avatar, AvatarImage } from "./Avatar";

export default function MainHistory(){
  return(
    <View className="top-48 px-4 pb-56">
      <View className="gap-1 pb-4 flex-row">
        <Avatar className="size-12">
          <AvatarImage source={require('@/img/stories.png')}/>
        </Avatar>
          <View className="">
            <Text className="font-title text-lg">Guilherme Lima David</Text>
            <Text className="text-unselected text-subtitle">são paulo, brasil</Text>
          </View>
      </View>
      <View className="pb-24">
        <Image source={require('@/img/mainImage.jpg')} className="w-full h-80 flex justify-center content-center mb-5 " />
          <Text className="font-text text-justify text-xl">É muito doido pensar que ja nos conhecemos a tanto tempo e que a cada dia estamos nos conhecendo cada vez mais e mais, hoje completamos 4 anos de namoro, mas não são apenas 4 anos de história, uma historia que começou confusa, dolorosa, mas que pela Graça do Nosso Deus, conseguiu passar por isso e se manteve, hoje, aquilo foi fixinha baseado em tudo que ja passamos nesses 4 anos. Agradeço a Deus pela sua paciência e persistÇencia, sua doçura, dedicação e gentileza, que me encantaram e me encanta todos os dias. A Seguir, temos alguns momentos que tivemos juntos nessess 4 anos. Isso aqui, é apenas uma pequena demonstração do amor que eu sinto por você!</Text>
      </View>

    </View>
  )
}