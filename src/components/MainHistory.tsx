import { Image, Text, View } from "react-native";
import { Avatar, AvatarImage } from "./Avatar";

export default function MainHistory(){
  return(
    <View className="top-48 px-4">
      <View className="gap-1 pb-4 flex-row">
        <Avatar className="size-12">
          <AvatarImage source={require('@/img/stories.png')}/>
        </Avatar>
          <View className="">
            <Text className="font-title text-lg">Guilherme Lima David</Text>
            <Text className="text-unselected text-subtitle">são paulo, brasil</Text>
          </View>
      </View>
      <View className="">
        <Image source={require('@/img/MainHistory.png')} className="w-full h-80 flex justify-center content-center" />
          <Text className="font-text text-base pt-4">Especialista e Líder Técnico em Telecom, responsável por manutenção e melhoria de APIs. Experiência em modelagem e documentação de APIs REST com Swagger/OpenAPI. Proficiente em Apigee API Management e desenvolvimento de scripts de testes automatizados. Habilidade em controle de versionamento com GitLab e implementação de CI/CD. Liderança de equipe, integração de novos desenvolvedores e desenvolvimento de talentos.Especialista e Líder Técnico em Telecom, responsável por manutenção e melhoria de APIs. Experiência em modelagem e documentação de APIs REST com Swagger/OpenAPI. Proficiente em Apigee API Management e desenvolvimento de scripts de testes automatizados. Habilidade em controle de versionamento com GitLab e implementação de CI/CD. Liderança de equipe, integração de novos desenvolvedores e desenvolvimento de talentos.Especialista e Líder Técnico em Telecom, responsável por manutenção e melhoria de APIs. Experiência em modelagem e documentação de APIs REST com Swagger/OpenAPI. Proficiente em Apigee API Management e desenvolvimento de scripts de testes automatizados. Habilidade em controle de versionamento com GitLab e implementação de CI/CD. LCD. Liderança de equipe, integração de novos desenvolvedores e desenvolvimento de talentos.Especialista e Líder Técnico em Telecom, responsável por maniderança de equipe, integração de novos desenvolvedores e desenvolvimento de talentos.Especialista e Líder Técnico em Telecom, responsável por manutenção e melhoria de APIs. Experiência em modelagem e documentação de APIs REST com Swagger/OpenAPI. Proficiente em Apigee API Management</Text>
      </View>

    </View>
  )
}